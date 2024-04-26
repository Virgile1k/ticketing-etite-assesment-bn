import {Booking} from "../../database/models/booking"

async function getBookingsForEvent(req, res) {
    try {
      const eventId = req.params.eventId;
      const bookings = await Booking.findAll({ where: { eventId } });
      res.json(bookings);
    } catch (error) {
      console.error('Error getting bookings for event:', error);
      res.status(500).json({ error: 'Failed to get bookings for event' });
    }
  }

  export default getBookingsForEvent;