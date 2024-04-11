import Buttonsq from "./Buttonsq"

export default function Sqbtns(){

    return(
        <div className="btnBox" style={{width:"25%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Buttonsq ></Buttonsq>
            <Buttonsq ></Buttonsq>
            <Buttonsq ></Buttonsq>
        </div>

    )
}