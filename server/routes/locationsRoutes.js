import express from 'express'
// import controllers for events and locations  
import locationsController from '../controllers/locationsController.js'

const router = express.Router()

// define routes to get events and locations
router.get('/', locationsController.getLocations)

export default router
