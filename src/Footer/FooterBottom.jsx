import FBottomLink from "./FBottomLink"
import FBottomRight from "./FBottomRights"
import Followus from "./Followus"
import "./FooterBottom.css"

export default function FooterBottom(){

    return(
        <div className="FooterBottom">

        <FBottomRight></FBottomRight>
        <FBottomLink></FBottomLink>
        <Followus></Followus>
        </div>
    )
}