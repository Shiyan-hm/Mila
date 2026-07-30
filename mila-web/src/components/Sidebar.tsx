import {
Link
}
from "react-router-dom";


export default function Sidebar(){


return(

<aside className="
hidden
md:block
w-64
min-h-screen
p-5
">


<h1 className="
text-3xl
font-bold
">

🌱 Mila

</h1>



<nav className="
mt-10
space-y-4
">


<Link to="/">
🏠 首页
</Link>


<br/>


<Link to="/planner">
📅 学习计划
</Link>


<br/>


<Link to="/subjects">
📚 学科学习
</Link>


<br/>


<Link to="/data">
📊 学习数据
</Link>


<br/>


<Link to="/review">
🎓 复试计划
</Link>


</nav>


</aside>

)

}
