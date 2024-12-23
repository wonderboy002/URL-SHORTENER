import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); 
      },
      message: (props) => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [6,'Password Should contain atleast 6 characters']
  },
});

export const User = mongoose.model("user", userSchema);
