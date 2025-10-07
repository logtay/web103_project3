export const getLocations = async () => {
  const response = await fetch('http://localhost:3000/locations');
  if (!response.ok) throw new Error('Failed to fetch locations');
  return await response.json(); 
};


export const getLocationById = async (id) => {
  const allLocations = await getLocations(); 
  const location = allLocations.find(loc => loc.id === parseInt(id));
  if (!location) throw new Error('Location not found');
  return location;
};

export default { getLocations, getLocationById }
