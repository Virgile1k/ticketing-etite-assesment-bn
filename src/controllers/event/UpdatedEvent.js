import { Event } from "../../database/models/event";
async function updateEvent(req, res) {
    try {
      const eventId = req.params.id;
      const eventData = req.body;
      const event = await Event.findByPk(eventId);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      await event.update(eventData);
      res.json(event);
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ error: 'Failed to update event' });
    }
  }
  export default updateEvent;