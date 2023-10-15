import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type:String
    },
    message: {
        type:String
    }
})
const Contact = new mongoose.model("Contact", contactSchema);
export default Contact;