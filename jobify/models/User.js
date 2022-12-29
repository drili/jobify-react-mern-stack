import mongoose from "mongoose";
import validator from "validator"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email"
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
        default: "Last name",
    },
    location: {
        type: String,
        trim: true,
        default: "My city",
    },
})

export default mongoose.model("User", UserSchema)