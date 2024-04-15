import React, { useState, useEffect } from "react";
import Cards from "./Card";
import "./cardTab.css";

export default function CardTab() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://api.esummit.in/events/all")
      .then((response) => response.json())
      .then((data) => {setEvents(data)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="cardTab" >
      {events.map((event, index) => (
        <Cards key={index} head={event.event_name} desc={event.card_description} backimg={event.card_image} />
      ))}
    </div>
  );
}
