import Card from "../components/Card";

import Timer from "../components/Timer";


export default function Home(){


return(

<div className="
space-y-6
">


<Card>


<h1 className="
text-3xl
">

🌱 Mila

</h1>


<p>

距离2027考研

</p>


<h2 className="
text-6xl
font-bold
">

900

</h2>

天

</Card>



<div className="
grid
md:grid-cols-4
gap-4
">


<Card>
政治
</Card>


<Card>
英一
</Card>


<Card>
数一
</Card>


<Card>
408
</Card>


</div>



<Timer/>


</div>

)

}
