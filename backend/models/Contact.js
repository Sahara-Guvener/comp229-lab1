import mongoose from "mongoose";
import { type } from "os";

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
