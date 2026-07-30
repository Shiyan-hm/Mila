import {

BrowserRouter

} from "react-router-dom";


import Router from "./router";


import Sidebar from "./components/Sidebar";


export default function App(){


return(

<BrowserRouter>


<div className="flex">


<Sidebar/>


<Router/>


</div>


</BrowserRouter>

)

}
