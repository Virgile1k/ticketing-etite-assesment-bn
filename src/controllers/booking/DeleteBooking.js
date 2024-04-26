import {Booking} from "../../database/models/booking";

async function deleteBooking(req, res) {
    try {
      const bookingId = req.params.id;
      const booking = await Booking.findByPk(bookingId);
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      await booking.destroy();
      res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
      console.error('Error deleting booking:', error);
      res.status(500).json({ error: 'Failed to delete booking' });
    }
  }

  export default deleteBooking;