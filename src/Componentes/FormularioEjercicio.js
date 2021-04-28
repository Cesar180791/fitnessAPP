import React from 'react'

const ExerciseForm = ({ onChange , onSubmit, form }) =>(
    <div className="container"> 
    <form
    onSubmit={onSubmit}
    >
        <div className="form-group">
            <input type="text" 
                className="form-control" 
                placeholder="Titulo" 
                name="title"
                onChange={onChange}  
                value={form.titulo} ///para que noduplique su valor en e estado y en el input     
            />
        </div>
        <div className="form-group"> 
            <input 
                type="text" 
                className="form-control" 
                placeholder="descricion" 
                name="description"
                onChange={onChange}
                value={form.description}
            />
        </div>
        <div className="form-group">
            <input 
                type="text" 
                className="form-control" 
                placeholder="URL imagen" 
                name="img"
                onChange={onChange}
                value={form.img}
            />
        </div>
        <div className="form-row">
            <div className="col">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="leftColor" 
                    name="leftColor"
                    onChange={onChange}
                    value={form.leftColor}
                />
            </div>
            <div className="col">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="rightColor" 
                    name="rightColor"
                    onChange={onChange}
                    value={form.rightColor}
                />    
            </div>
        </div>
        
        <button 
            type="submit" 
            className="btn btn-primary">
            Submit
        </button>
    </form>
</div>
   
) 
export default ExerciseForm







/*
class ExerciseForm extends React.Component{
////Sin babel
    /*handleChange = e =>{
        console.log(`${e.target.name}: ${e.target.value}`)
        let Almacenar ={}
        Almacenar[e.target.name] = e.target.value
        this.setState(Almacenar)
    }
    render(){

        const { onChange , onSubmit, form } = this.props ///se recibe el controlador handleChange para este componente desde ejercicioNew.js
        return (
            <div className="container">
            <form
            onSubmit={onSubmit}
            >
                <div className="form-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Titulo" 
                        name="title"
                        onChange={onChange}  
                        value={form.titulo} ///para que noduplique su valor en e estado y en el input     
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="descricion" 
                        name="description"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="URL imagen" 
                        name="img"
                        onChange={onChange}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={onChange}
                            value={form.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={onChange}
                            value={form.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
        )
    }
}

export default ExerciseForm
*/