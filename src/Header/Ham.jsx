import { useState } from "react"

export default function Ham(){
    let [isTrue,setIsTrue]=useState(true);
    function change() {
        setIsTrue((isTrue) =>!isTrue);
      }
    return(
        <div className="Ham">
            <i onClick={change} className={isTrue ? "fa-solid fa-bars" :"fa-solid fa-xmark"}></i>
        </div>
    )
}