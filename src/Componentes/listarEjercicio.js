import React from 'react'
import Card from './card'

const listarEjercicio = ({ejercicios}) =>(
    <div>
    {
    ejercicios.map((movimiento) =>{
        return(
        <Card //enviar diferentes propiedades al componente 
        key={movimiento.id}
        titulo={movimiento.titulo}
        description={movimiento.description}
        img={movimiento.img}
        leftColor={movimiento.leftColor}
        rightColor={movimiento.rightColor}
        />
        )
        })}
</div>
)


export default listarEjercicio