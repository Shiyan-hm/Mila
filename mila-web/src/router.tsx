import {

Routes,

Route

}

from "react-router-dom";


import Home from "./pages/Home";

import Planner from "./pages/Planner";

import Subjects from "./pages/Subjects";

import Data from "./pages/Data";

import Review from "./pages/Review";


export default function Router(){


return(

<main className="
flex-1
p-6
">


<Routes>


<Route path="/" element={<Home/>}/>


<Route path="/planner" element={<Planner/>}/>


<Route path="/subjects" element={<Subjects/>}/>


<Route path="/data" element={<Data/>}/>


<Route path="/review" element={<Review/>}/>


</Routes>


</main>


)

}
