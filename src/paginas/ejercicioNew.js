import React from 'react'
import FormularioEjercicio from '../Componentes/FormularioEjercicio'
import Card from '../Componentes/card'

class ExerciseNew extends React.Component{

    state ={   ///se define el estado dentro de ExerciceNew 
        form:{ ///Objeto donde se almacenara la informacion del formulario 
            titulo: '' ,
            img: '',
            description: '', 
            leftColor: '', 
            rightColor: ''
        }
    }
    handleChange = e =>{   ///este evento manipula el componente FormularioEjercicio.js 
        ///para almacenar los estados del frmulario this.setState
        this.setState({
            form: {///Objeto donde se almacenara la informacion del formulario 
                ...this.state.form, //para que conserve los valores en los campos de los formularios
            [e.target.name]: e.target.value
                
            }
        })
    }
///se manda el controlador handleChange a FormularioEjercicios.js mediante onchange={this.hansleChange} en el componente Formulari Ejercicio
    render(){
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <FormularioEjercicio onChange={this.handleChange} form={this.state.form}/>
                </div>
            </div>
        )
    }
}

export default ExerciseNew