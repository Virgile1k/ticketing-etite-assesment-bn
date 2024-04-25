import { Event } from "../../database/models/event";

async function getAllEvents(req, res) {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (error) {
      console.error('Error getting all events:', error);
      res.status(500).json({ error: 'Failed to get events' });
    }
  }
  
  export default getAllEvents;