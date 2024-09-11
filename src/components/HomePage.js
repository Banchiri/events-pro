import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Events Booking App</h1>
      <p>Disscover amazing events and book your tickets now!</p>
    
      <div className="homepage-links">
        <Link to="/events" className="btn">Browse Events</Link>
        <Link to="/about" className="btn">Learn More About Us</Link>
      </div>
      
      
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event 1 - Date</li>
          <li>Event 2 - Date</li>
          <li>Event 3 - Date</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;