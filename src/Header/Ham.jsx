import { useState } from "react"
import NavBar from "./NavBar";


export default function Ham() {

    const [isTrue, setIsTrue] = useState(true);
    const [count, setCount] = useState(0);
    function change() {
        setIsTrue(prevIsTrue => !prevIsTrue);
        setCount(prevCount => prevCount + 1);
    }
    return (

        <div className="Ham">
                  
            <i onClick={change} className={isTrue ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
            <div style={{display:"none"}}>    <NavBar isTrue={isTrue} count={count}></NavBar></div>
        
        </div>
    );
}