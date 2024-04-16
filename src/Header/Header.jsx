import NavBar from "./NavBar"
import Logo from "./Logo"
import Ham from "./Ham"
import "./Header.css"
import { useState } from "react"

export default function Header(){
    const [isTrue, setIsTrue] = useState(true);
    const [count, setCount] = useState(0);

    return(
        <div className="header" style={{height: isTrue ? "73px" : "100vh"}} >
            <Logo isTrue={isTrue} count={count}  setIsTrue={setIsTrue} setCount={setCount}></Logo>
            <NavBar isTrue={isTrue} count={count}></NavBar>

        </div>
    )
}