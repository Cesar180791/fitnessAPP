import React from 'react'
import FormularioEjercicio from '../Componentes/FormularioEjercicio'
import Card from '../Componentes/card'

const ExerciceNew = ({form, onChange, onSubmit}) =>(
    <div className="row">
    <div className="col-sm">
        <Card {...form}/>
    </div>
    <div className="col-sm">
        <FormularioEjercicio 
        onChange={onChange}  
        onSubmit={onSubmit}
        form={form}/>
    </div>
</div>
)

export default ExerciceNew