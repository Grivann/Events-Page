import { useState } from "react"
import NavBar from "./NavBar";


export default function Ham() {

    const [isTrue, setIsTrue] = useState(true);

    function change() {
        setIsTrue(prevIsTrue => !prevIsTrue);
    }
    return (
        <div className="Ham">
            <i onClick={change} className={isTrue ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
        </div>
    );
}