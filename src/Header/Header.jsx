import NavBar from "./NavBar"
import Logo from "./Logo"
import Ham from "./Ham"
import "./Header.css"

export default function Header(){
    return(
        <div className="header" >
            <Logo></Logo>
            <NavBar></NavBar>

        </div>
    )
}