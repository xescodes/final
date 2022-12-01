//importamos el Modelo
import citaModel from "../models/citaModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los citas
export const getAllcitas = async (req, res) => {
    try {
        const citas = await citaModel.find()
        res.status(200).json(citas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un cita
export const getcita = async (req, res) => {
        try {
            const id = req.params.id
            await citaModel.findById( {_id:id} ).then( (cita) => {
                res.status(200).json(cita)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un cita
export const createcita = async (req, res) => {
    try {
       await citaModel.create(req.body)
       res.status(200).json({
           "message":"¡cita creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un cita
export const updatecita = async (req, res) => {
    try {
        const id = req.params.id
        await citaModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡cita actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un cita
export const deletecita = async (req, res) => {
    try {
        const id = req.params.id
        await citaModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡cita eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}