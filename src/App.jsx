import Home from "./Pages/Home"
import Search from "./Pages/Search"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Admin from "./Pages/Admin"
import Report from "./Components/Report"
import Fool from "./Pages/Fool"
import { useState } from "react"
const App = ()=>{
    const [fool,setFool] = useState(false)
    setInterval(()=>{
        setFool(true)
    },1000)
    return(
        fool ? <Fool /> : <Home />
    )
}

export default App