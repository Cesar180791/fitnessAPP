import React from 'react'
import Card from './card'

const listarEjercicio = ({ejercicios}) =>(
    <React.Fragment>
    {
    ejercicios.map((movimiento) =>{
        return(
        <Card //enviar diferentes propiedades al componente 
        key={movimiento.id}
        {...movimiento}
        />
        )
        })}
</React.Fragment>
)


export default listarEjercicio