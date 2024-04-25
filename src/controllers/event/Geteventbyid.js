 import { Event } from "../../database/models/event";
async function getEventById(req, res) {
    try {
      const eventId = req.params.id;
      const event = await Event.findByPk(eventId);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      console.error('Error getting event by ID:', error);
      res.status(500).json({ error: 'Failed to get event' });
    }
  }
  export default getEventById;