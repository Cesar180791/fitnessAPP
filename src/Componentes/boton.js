import React from 'react'
import '../css/Welcome.css'
import { Link } from 'react-router-dom'


const boton = () => (
    <Link to="/ejercicio/NuevoEjercicio">
        <img  className="Fitness-Add" alt="exercise" src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"/>
    </Link>
)


export default boton