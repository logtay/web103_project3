import React from 'react';
import '../css/Event.css';

const Event = ({ event }) => {
  if (!event) return null;

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className='event-information'>
      <img src={event.image} alt={event.title} />

      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{event.title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {formattedDate} at {event.time}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Event;
