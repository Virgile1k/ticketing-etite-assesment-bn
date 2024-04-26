import {Booking} from "../../database/models/booking";

async function getBookingsForUser(req, res) {
    try {
      const userId = req.params.userId;  
      const bookings = await Booking.findAll({ where: { userId } });
      res.json(bookings);
    } catch (error) {
      console.error('Error getting bookings for user:', error);
      res.status(500).json({ error: 'Failed to get bookings for user' });
    }
  }
export default getBookingsForUser;
