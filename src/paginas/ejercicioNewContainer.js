import React, { useState } from 'react'
import Loading from '../Componentes/Loading'
import FatalError from './500'
import ExerciceNew from './EjercicesNew'
import Url from '../config'
const ExerciseNewContainer = ({history}) => {
    const [ form, setForm ] = useState({title: '',
                                description: '',
                                img: '',
                                leftColor: '',
                                rightColor: ''
                            })
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            await fetch(`${Url}/exercises`, config)
            setLoading(false)
            history.push('/ejercicio')
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    if(loading)
        return <Loading />

    if(error)
        return <FatalError />

    return <ExerciceNew 
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
}

export default ExerciseNewContainer
/*
class ExerciseNewContainer extends React.Component{
 
    state ={   ///se define el estado dentro de ExerciceNew 
        form:{ ///Objeto donde se almacenara la informacion del formulario 
            title: '' ,
            img: '',
            description: '', 
            leftColor: '', 
            rightColor: ''
        },
        loading: false,
        error: null
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


handleSubmit = async e =>{
    this.setState({
        loading: true
    })

    e.preventDefault() ///evitar que la pagina recarge
    try {
        let config = {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state.form)
        }

        let res = await fetch(`${Url}/exercises`, config) //si no se envia el objeto de configuracion fetch hace un GET
        let json = await res.json()
        console.log(json)

        this.setState({
            loading: false
        })

        this.props.history.push('/ejercicio')
    } catch (error) {
        this.setState({
        loading: false,
        error
    })
    }
   
   // console.log(this.state)
}

    render(){
        if(this.state.error)
            return<FatalError />


            return <ExerciceNew 
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
    }
}

export default ExerciseNewContainer
*/