import mongoose from "mongoose";

const connectDatabase = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rye0p.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
  );
};

export default connectDatabase;
