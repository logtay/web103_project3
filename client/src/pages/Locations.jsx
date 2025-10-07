import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

const Locations = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await LocationsAPI.getLocations()
        setLocations(data)
      } catch (error) {
        console.error('Error fetching locations:', error)
      }
    })()
  }, [])

  const routeMap = {
    1: '/calcoastcredit',
    2: '/theobservatory',
    3: '/radyshell',
    4: '/gallaghersquare'
  }

  return (
    <div className="locations-page">
      <h1>San Diego Entertainment Venues</h1>

      <div className="locations-grid">
        {locations.map((location) => (
          <Link
            key={location.id}
            to={routeMap[location.id]} 
            className="location-card"
          >
            <img src={location.image} alt={location.name} />
            <h3>{location.name}</h3>
            <p>{location.city}, {location.state}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Locations
