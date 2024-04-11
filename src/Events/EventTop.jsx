import Sqbtns from './Sqbtns'
import './eventTop.css'

function EventTop() {
    return (
      <>
    <div className="eventTop" style={{display:"flex", justifyContent:"space-between"}}>
    <div>
    <h1>EVENTS</h1>
      <p>Challenge your limits with events full of uncertainities</p>
    </div>

      <Sqbtns></Sqbtns>

      </div>
      </>
    )
  }
  
  export default EventTop