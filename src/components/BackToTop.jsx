import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop(){

const[show,setShow]=useState(false);

useEffect(()=>{

const scroll=()=>{

setShow(window.scrollY>500);

}

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

return(

show&&(

<button

onClick={()=>window.scrollTo({
top:0,
behavior:"smooth"
})}

className="fixed bottom-8 right-8 bg-[#0B8F7A] text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
>

<ArrowUp/>

</button>

)

);

}