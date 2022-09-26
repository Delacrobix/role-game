import mongoose from 'mongoose';

const MONGODB = process.env.MONGODB || "mongodb://localhost/role-game";

(async () => {
  try {
    await mongoose.connect(MONGODB);
    console.log(`Connected to ${MONGODB}`);
  } catch (err) {
    console.error("ERROR: connecting to Database: " + err);
  }
})();