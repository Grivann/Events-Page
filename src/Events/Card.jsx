import React from 'react';
import './Card.css';

export default function Cards({ head, desc, backimg }) {
  return (
    <div className="card" style={{backgroundImage: `url(${backimg})` }}>
      <div className="container">
        <div className="inContainer">
          <div className="cardIcon">
            <div></div>
          </div>
          <h3 className="cardHeading">{head}</h3>
          {/* Use dangerouslySetInnerHTML to set HTML content */}
          <p className="cardText" dangerouslySetInnerHTML={{ __html: desc }}></p>
          <div className="apply">
            <a href="#">
              Apply Now&nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square" style={{ height: '24px', width: '24px' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}