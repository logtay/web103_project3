import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Event from '../components/Event';
import LocationsAPI from '../services/LocationsAPI';
import { getEventsByLocationId } from '../services/EventsAPI';
import '../css/LocationEvents.css';

const LocationEvents = ({ index }) => {
  const { id } = useParams();
  const locationId = index || id;

  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const loc = await LocationsAPI.getLocationById(locationId);
        setLocation(loc);

        const evts = await getEventsByLocationId(locationId);
        setEvents(evts);
      } catch (error) {
        console.error('Error loading location or events:', error);
      }
    })();
  }, [locationId]);

  if (!location || !location.name) return <p>Loading location...</p>;

  return (
    <div className='location-events'>
      <header>
        <div className='location-image'>
          <img src={location.image} alt={location.name} />
        </div>

        <div className='location-info'>
          <h2>{location.name}</h2>
          <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map(event => <Event key={event.id} event={event} />)
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  );
}

export default LocationEvents;
