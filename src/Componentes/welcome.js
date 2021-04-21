import React from 'react'
import '../css/Welcome.css'

//componentes funcionales 
const Welcome = ({userName}) => (
    <div className="container">
    <div className="Fitness-User-Info">
        <h1>Hola {userName}!</h1>
        <p>Bienvenido a este nuevo Tutorial de reat para las horas sociales </p>
    </div>
</div>
)

export default Welcome