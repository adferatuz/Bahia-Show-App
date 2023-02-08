import { Router } from "express"
import { encrypt, compare } from "../hellpers/handleBcrypt"
import contactos from "../models/contactos"

import Contactos from '../models/contactos'

const router = Router()

//CRUD crear tabla de datos en BD
router.post('/contactenos', async (req, res) => {   
    try {
         const contacto = new Contactos({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        motivo: req.body.motivo
    })
        await contacto.save()
        res.json(contacto)
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }

    console.log(contactos)
    res.send({"msg":"recibido"})

    })

// CRUD leer todos los datos de BD
router.get('/contactenos/mensajes', async (req, res) => {
    try {
        const allContacts= await Contactos.find()
        return res.json(allContacts)
    } catch (error) {
        console.log(error)
        res.send(error)    
    }
})

// CRUD listar mensaje
router.get('/contactenos/mensajes/:id', async (req, res) => {
    try {
        const oneContacts= await Contactos.findById(req.params.id)
        return res.json(oneContacts)
    } catch (error) {
        console.log(error)
        res.send(error)    
    }
})

//CRUD borrar mensaje
router.delete('/contactenos/mensajes/eliminar/:id', async (req, res) => {
    try {
        const deleteContacts= await Contactos.findByIdAndDelete(req.params.id)
        return res.json(deleteContacts)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

export default router

