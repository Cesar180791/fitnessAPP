import React from 'react'
import Loading from '../Componentes/Loading'
import FatalError from './500'
import Ejercicio from './Ejercicio'
import useFetch from '../hooks/useFetch'
import Url from '../config'


///uso de componentes funcionales mediante hooks

const EjercicioContainer = () => {

    const { data, loading, error } = useFetch(`${Url}/exercises`)

    if(loading)
    return <Loading />

    if(error)
    return<FatalError />   

    return<Ejercicio data={data} />
}

export default EjercicioContainer

/*
class EjercicioContainer extends React.Component{
    state={
            data: [],
            loading: true, //loading
            error: null
        }
       
       async componentDidMount(){
            await this.fetchExercises()
        }

        fetchExercises = async () =>{
            try{
                ///api de donde se estan solicitando los ejercicios la url es una consulta
                let res = await fetch('http://localhost:8000/api/exercises')
                let data = await res.json()

                ////visualizar en consola
               // console.log(data);

                ///vizualizar en los card
                this.setState({
                    data,
                    loading: false //si cumple no es necesario que muestre el loading spiner
                })
            } catch (error) { 
                this.setState({
                    loading: false,
                    error
                })

            }
            
        
        }
    
    render(){
        if(this.state.loading)
        return <Loading />

        if(this.state.error)
        return<FatalError />    
        return<Ejercicio 
        
        data={this.state.data}
        />
    }
}

export default EjercicioContainer*/
