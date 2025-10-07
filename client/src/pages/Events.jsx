import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/EventsAPI';
import { getLocations } from '../services/LocationsAPI';
import '../css/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    (async () => {
      try {
        const allEvents = await getEvents();
        setEvents(allEvents);

        const allLocations = await getLocations();
        setLocations(allLocations);
      } catch (error) {
        console.error('Error fetching events or locations:', error);
      }
    })();
  }, []);

  const handleFilterChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredEvents =
    selectedLocation === 'all'
      ? events
      : events.filter((event) => event.location_id === parseInt(selectedLocation));

  return (
    <div className="events-page">
      <h1>All Events</h1>

      <div className="filter">
        <label htmlFor="locationFilter">Filter by location: </label>
        <select id="locationFilter" value={selectedLocation} onChange={handleFilterChange}>
          <option value="all">All Locations</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

<div className="events-grid">
  {filteredEvents.length > 0 ? (
    filteredEvents.map((event) => (
      <div key={event.id} className="event-card">
        <img src={event.image} alt={event.title} className="event-image" />
        <h3>{event.title}</h3>
        <p>
          {new Date(event.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
          {' at '}{event.time}
        </p>
      </div>
    ))
  ) : (
    <p>No events for this location.</p>
  )}
</div>
    </div>
  );
};

export default Events;
