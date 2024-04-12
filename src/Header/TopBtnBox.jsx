import Buttontop1 from "./Buttontop1"
import Buttontop2 from "./Buttontop2"
import './ButtonTop.css'

export default function TopBtnBox(){
    return(
        <div className="topBtnBox">
            <Buttontop1></Buttontop1>
            <Buttontop2></Buttontop2>
        </div>
    )
}