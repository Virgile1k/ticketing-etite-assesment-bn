import {Ticket} from "../../database/models/ticket";

async function deleteTicket(req, res) {
    try {
      const ticketId = req.params.id;
      const ticket = await Ticket.findByPk(ticketId);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      await ticket.destroy();
      res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
      console.error('Error deleting ticket:', error);
      res.status(500).json({ error: 'Failed to delete ticket' });
    }
  }
  export default deleteTicket;