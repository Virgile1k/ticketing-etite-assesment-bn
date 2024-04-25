 import { Event } from "../../database/models/event";
 async function getTicketsForEvent(req, res) {
    try {
      const eventId = req.params.id;
      const event = await Event.findByPk(eventId, { include: Ticket });
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      const tickets = event.Tickets;
      res.json(tickets);
    } catch (error) {
      console.error('Error getting tickets for event:', error);
      res.status(500).json({ error: 'Failed to get tickets for event' });
    }
  }
  export default getTicketsForEvent;