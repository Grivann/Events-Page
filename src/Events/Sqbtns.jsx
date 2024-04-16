import React, { useState } from 'react'; // Import useState from React
import Buttonsq from './Buttonsq';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sqbtns() {
  const notify = () => {
    toast.success("All Events are Live", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [clicked, setClicked] = useState(false); // Use useState to declare state

  const ifClick = () => {
    setClicked(prevVal => !prevVal);
  };

  return (
    <div className='btnBox'>
      <Buttonsq text='All' onClick={ifClick} clicked={!clicked}/>
      <Buttonsq text='Live' onClick={ifClick} clicked={clicked}/>
      <Buttonsq text='Upcoming' onClick={notify} />
      <ToastContainer />
    </div>
  );
}
