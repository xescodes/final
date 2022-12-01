import cors from 'cors'
import express from "express"
//importamos la conexión a la DB
//importamos nuestro enrutador
import citaRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/citas', citaRoutes)

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})