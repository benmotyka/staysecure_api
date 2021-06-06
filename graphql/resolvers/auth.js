import User from "../../models/user.js";
import UserActions from "../../models/userActions.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  sendConfirmRegistrationEmail,
  sendForgotPasswordEmail,
} from "../../services/email/sendEmail.js";
import { v4 as uuidv4 } from "uuid";
import validateCaptcha from "../../functions/captcha/validateCaptcha.js";

export default {
  registerUser: async (args) => {
    await validateCaptcha(args.userInput.captchaToken);
    const isDuplicate = await User.findOne({ email: args.userInput.email });
    if (isDuplicate) {
      throw new Error("Użytkownik istnieje");
    }
    const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
    let token = uuidv4();
    const user = new User({
      email: args.userInput.email,
      emailVerified: false,
      password: hashedPassword,
    });
    const result = await user.save();
    const newAction = new UserActions({
      userId: user.id,
      verificationToken: token,
    });
    await newAction.save();
    sendConfirmRegistrationEmail(args.userInput.email, token);
    return { ...result._doc, password: null, _id: result.id };
  },
  loginUser: async (args) => {
    await validateCaptcha(args.userInput.captchaToken);
    const user = await User.findOne({ email: args.userInput.email });
    if (!user || !user.emailVerified) {
      throw new Error("Błędny email lub hasło");
    }
    const isEqual = await bcrypt.compare(
      args.userInput.password,
      user.password
    );
    if (!isEqual) {
      throw new Error("Błędny email lub hasło");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: 600 }
    );
    return { userId: user.id, token: token, tokenExpiration: 600 };
  },
  confirmEmail: async ({ token }) => {
    const action = await UserActions.findOne({ verificationToken: token });
    if (!action) {
      throw new Error("Błędny link");
    }
    const user = await User.findOne({ _id: action.userId });
    console.log(
      `${new Date().toISOString()} User ${
        user.email
      } has just confirmed their account`
    );
    await user.updateOne({ emailVerified: true });
    await action.deleteOne({ verificationToken: token });
    return {
      email: user._doc.email,
    };
  },
  forgotPassword: async ({ email, captchaToken }) => {
    await validateCaptcha(captchaToken);
    const user = await User.findOne({ email: email });
    if (!user || !user.emailVerified) {
      throw new Error("Konto nie istnieje");
    }
    let token = uuidv4();
    const alreadySent = await UserActions.findOne({ userId: user.id });
    if (alreadySent) {
      throw new Error("Email ze zmianą hasła został już wysłany");
    }
    const newAction = new UserActions({
      userId: user.id,
      forgotPasswordToken: token,
    });
    await newAction.save();
    sendForgotPasswordEmail(email, token);
    return {
      email: user._doc.email,
    };
  },
  forgotPasswordChange: async ({ token, password, captchaToken }) => {
    await validateCaptcha(captchaToken);
    const action = await UserActions.findOne({ forgotPasswordToken: token });
    if (!action) {
      throw new Error("Link nie istnieje");
    }
    const user = await User.findOne({ _id: action.userId });
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.updateOne({ password: hashedPassword });
    await action.deleteOne({ forgotPasswordToken: token });
    return {
      email: user._doc.email,
    };
  },
};