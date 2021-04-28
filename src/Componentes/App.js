import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EjercicioContainer from '../paginas/ejercicioContainer'
import EjercicioNewContainer from '../paginas/ejercicioNewContainer' 
import NotFound from '../paginas/NotFound'

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/ejercicio" component={EjercicioContainer} />  
            <Route exact path="/ejercicio/NuevoEjercicio" component={EjercicioNewContainer} />
            <Route component={NotFound} />
        </Switch> 
    </BrowserRouter>
)

export default App