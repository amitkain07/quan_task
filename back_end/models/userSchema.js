import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      minlength: 3,
      maxlength: 40,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    
    dob: {
      type: Date,
      required: [true, "Please provide a DOB"],
     
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
    },
  },
  { timestamps: true }
); 

const User = mongoose.model("user", UserSchema);
export default User;
