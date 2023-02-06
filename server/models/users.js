import { Schema, model } from 'mongoose'

const userSchema = new Schema ({
    email: String,
    password:  {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('User', userSchema)