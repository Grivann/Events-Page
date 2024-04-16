import Ham from "./Ham"

export default function Logo({isTrue,setIsTrue,count,setCount}){
    return(
        <div className="at1250">
        <div style={{width:"221px", height:"73px", display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>   
        <img src="https://i.ibb.co/bFQDQNQ/E-summit-Logo.png" alt="E-summit-Logo" border="0"  style={{width:"176px", height:"62px"}}/>
        </div>
        <Ham isTrue={isTrue} count={count}  setIsTrue={setIsTrue} setCount={setCount}></Ham>
        </div>

    )
}