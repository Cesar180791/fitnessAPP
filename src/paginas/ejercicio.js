import React from 'react'
import ListarEjercicio from '../Componentes/listarEjercicio'                    //Importacion componente card.js (Componente de clase)
import Welcome from '../Componentes/welcome' //Importacion Componente Welcome.js (Componente Funcional)
import Boton from '../Componentes/boton'

class Ejercicio extends React.Component{
    state={
            data: [{
                "id": 1,
                "titulo": "Guías técnicas",
                "description": "Aprende ejercicios de calle y calistenia increíbles",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                "leftColor": "#A74CF2",
                "rightColor": "#617BFB"
            },{
                "id": 2,
                "titulo": "Entrenamiento de habilidades",
                "description": "Aprenda los secretos de las técnicas de peso corporal",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                "leftColor": "#17EAD9",
                "rightColor": "#6078EA"
            },{
                "id": 3,
                "titulo": "Entrenamiento de fuerza",
                "description": "¡Entrena en cualquier momento y en cualquier lugar y conviértete en un superhéroe!",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                "leftColor": "#FAD961",
                "rightColor": "#F76B1C"
            }]
        }
    
    render(){
        return(
            <div>
                    <Welcome 
                    userName="Manuel "
                    />
                    <ListarEjercicio 
                    ejercicios={this.state.data}
                    />
                    <Boton />
                </div>
        )
    }
}

export default Ejercicio
