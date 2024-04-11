import TopBtnBox from "./TopBtnBox"
import HeadingBox from "./HeadingBox"
import Logo from "./Logo"

export default function Header(){
    return(
        <div style={{display:"flex", justifyContent:"space-between", height:"73px", alignItems:"center"}}>
            <Logo></Logo>
            <HeadingBox></HeadingBox>
            <TopBtnBox></TopBtnBox>
        </div>
    )
}