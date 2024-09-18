import mongoose from "mongoose";

const authSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Auth = mongoose.model("users", authSchema);

export default Auth;