import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        require: [true, "please provide a username"],
        unique: true
    },
    email: {
        type: String,
        require: [true, "please provide a email"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "please provide a password"],
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.model.users || mongoose.model('users', userSchema)

export default User