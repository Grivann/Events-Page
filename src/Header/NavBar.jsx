import TopBtnBox from "./TopBtnBox"
import HeadingBox from "./HeadingBox"

export default function NavBar(){

    return(
        <div className="NavBar" >
            <HeadingBox></HeadingBox>
            <TopBtnBox></TopBtnBox>
        </div>
    )
}
// // style={{display: isTrue? "none":"flex"}}
