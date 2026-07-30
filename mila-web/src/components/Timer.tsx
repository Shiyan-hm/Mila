import {
useState
}
from "react";


export default function Timer(){


const [time,setTime]=useState(0);


const [running,setRunning]=useState(false);



if(running){

setTimeout(()=>{

setTime(time+1)

},1000)

}



return(

<div className="card">


<h2>

学习计时

</h2>


<h1 className="
text-4xl
">

{
Math.floor(time/60)
}

:

{
time%60
}

</h1>


<button

onClick={()=>setRunning(!running)}

className="
bg-mila-tea
p-3
rounded-xl
"

>

{
running?
"暂停":
"开始学习"

}

</button>


</div>

)

}
