import {Booking} from "../../database/models/booking";

async function getBookingById(req, res) {
    try {
      const bookingId = req.params.id;
      const booking = await Booking.findByPk(bookingId);
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.json(booking);
    } catch (error) {
      console.error('Error getting booking by ID:', error);
      res.status(500).json({ error: 'Failed to get booking' });
    }
  }
  export default getBookingById;