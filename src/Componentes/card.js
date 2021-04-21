import React from 'react';
import Circulo from '../img/circles.png'
import '../css/Card.css'
///existen diferentes tipos de componente, Componentes funcionales y componentes de clase 

/// componentes de clase ventajas se puede manipular estado y trabajr con el ciclo de vida del componente

class Card extends React.Component{


    render(){

        const { titulo ,img, description, leftColor, rightColor } = this.props
        
        return (
            <div className="card mx-auto Fitness-Card"
            ///Agregamos estilos en linea al div padre 
            style = {{
               backgroundImage: `url(${Circulo}), linear-gradient(to right, ${leftColor}, ${rightColor})` 
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img alt="exercise" src={img} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{titulo}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
                        )    
                    }
                }
export default Card
