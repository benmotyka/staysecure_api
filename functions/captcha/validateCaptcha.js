import axios from "axios";

const validateCaptcha = async (token) => {
    const captcha = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${token}`)
    if(!captcha.data.success || captcha.data.score <= 0.3){
        throw new Error("invalid-captcha");
    }
    return
}

export default validateCaptcha