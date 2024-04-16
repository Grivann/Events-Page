import React from 'react';
import './buttonsq.css';

export default function Buttonsq({ text, onClick, clicked }) {
  return (
    <button className={`sqbtn ${clicked ? 'sqbtn2' : 'sqbtn1'}`} onClick={onClick}>
      {text}
    </button>
  );
}
