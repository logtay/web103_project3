export const getEvents = async () => {
  try {
    const response = await fetch('http://localhost:3000/events');
    if (!response.ok) throw new Error('Failed to fetch events');
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};


export const getEventById = async (id) => {
  try {
    const allEvents = await getEvents(); 
    const event = allEvents.find(ev => ev.id === parseInt(id));
    if (!event) throw new Error('Event not found');
    return event;
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    throw error;
  }
};

export const getEventsByLocationId = async (locationId) => {
  try {
    const allEvents = await getEvents(); 
    const events = allEvents.filter(ev => ev.location_id === parseInt(locationId));
    return events;
  } catch (error) {
    console.error('Error fetching events by location:', error);
    throw error;
  }
};
export default { getEvents, getEventById, getEventsByLocationId }