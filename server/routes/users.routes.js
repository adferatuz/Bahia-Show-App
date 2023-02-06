import { Router } from "express"
import { encrypt, compare } from "../hellpers/handleBcrypt"

const mongoose = require('mongoose')
import User from '../models/users'
import config from '../config'

const router = Router()

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        const passwordHash = await encrypt(password)
        const user = new User({
        email: email,
        password: passwordHash
    })
        await user.save()
        return res.json(user)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
    
     
   console.log(newUser)
   res.send({"msg":"recibido"})

})

router.post('/signin', async (req, res) => {
   try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user){
        res.status(404)
        res.send({ error: 'Usuario invalido'})
    }
    const checkPassword = await compare(password, user.password)
    //const tokenSession = await tokenSign(user)
    if (checkPassword) {
        res.send({
            data: user
        })
        return
    }

    if (!checkPassword) {
        res.status(409)
        res.send({
            error: 'Contraseña invalida'
        })
        return
    }

   } catch (error) {
    
   }

})

export default router