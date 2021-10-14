import Navbar from "./components/navbar/Navbar"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./components/home/Home"
import Auth from "./components/auth/Auth"
import Welcome from "./components/welcome/Welcome"
import GoDown from "./components/goDown/GoDown"

function App(){

    return(
        <BrowserRouter>
            <Navbar/>
            <GoDown/>
                <Switch>
                    <Route exact path="/">
                        <Welcome/>
                        <Home/>
                    </Route>
                    <Route exact path="/auth">
                        <Auth/>
                    </Route>
                </Switch>
        </BrowserRouter>
        )
}

export default App