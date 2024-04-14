import FTopEmail from "./FTopEmail"
import FTopAddress from "./FTopAddress"
import './FTop2.css'

export default function FTop2(){

    return(
        <div className="FTop2">
        <FTopAddress></FTopAddress>
        <FTopEmail></FTopEmail>
        </div>
    )
}