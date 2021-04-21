import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Ejercicio from '../paginas/ejercicio'
import EjercicioNew from '../paginas/ejercicioNew' 
import NotFound from '../paginas/NotFound'

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/ejercicio" component={Ejercicio} /> 
            <Route exact path="/ejercicio/NuevoEjercicio" component={EjercicioNew} />
            <Route component={NotFound} />
        </Switch> 
    </BrowserRouter>
)

export default App