import express  from "express";
import {Request, Response} from 'express'
import connection from './db/config';
import { urlencoded, json } from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import pacienteRoutes from './routes/paciente.routes'
import doctorRoutes from './routes/doctor.routes'
import citaRoutes from './routes/citas.routes'
import espRoutes from './routes/especialidad.routes'
import docEspRoutes from './routes/dEsp.routes'
import consultorioRoutes from './routes/consultorio.routes'


dotenv.config();

const app = express();

// Middlewares:
// json para leer el body de las peticiones
// cors para aceptar peticiones desde otros dominios diferentes al del servidor
// urlencoded para los formularios en HTML (recibirlos en el body)
app.use( json() );
app.use( cors() );
app.use( urlencoded() );

// Ruta base
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenido a mi API!')
})

// Routers
app.use('/api/pacientes', pacienteRoutes)
app.use('/api/doctores', doctorRoutes)
app.use('/api/citas', citaRoutes)
app.use('/api/especialidades', espRoutes)
app.use('/api/doc-esp', docEspRoutes)
app.use('/api/consultorios', consultorioRoutes)


// Error de rutas
app.use( (req: Request, res: Response) => {
  res.status(404).send('404: Page not found')
})

// Error de servidor
app.use( (req: Request, res: Response) => {
  res.status(500).send('500: Internal server error')
})


connection.sync()
.then(() => {
  console.log('Database online')
})
.catch ((err) =>{
  console.log(`Error en la conexión ${err}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en: http://${process.env.HOST}/${process.env.PORT}`)
})
