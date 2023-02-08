import { Schema, model } from 'mongoose'

const contactoSchema = new Schema ({
    nombre : String,
    email: String,
    telefono: String,
    motivo: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Contacto', contactoSchema)