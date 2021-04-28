import React from 'react'
import ListarEjercicio from '../Componentes/listarEjercicio'                    //Importacion componente card.js (Componente de clase)
import Welcome from '../Componentes/welcome' //Importacion Componente Welcome.js (Componente Funcional)
import Boton from '../Componentes/boton'


const Ejercicio = ({data}) =>(

    <React.Fragment>
    <Welcome 
    userName="Manuel "
    />
    <ListarEjercicio 
    ejercicios={data}
    />
    <Boton />
</React.Fragment>

)

export default Ejercicio