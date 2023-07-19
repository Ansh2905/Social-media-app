import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    facebook: {
      type: String,
      default: "https://www.facebook.com/",
    },
    twitter: {
      type: String,
      default: "https://twitter.com/home?lang=en",
    },
    linkedin: {
      type: String,
      default: "https://www.linkedin.com/feed/",
    },
    instagram: {
      type: String,
      default: "https://www.instagram.com/",
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;