import {Ticket} from "../../database/models/ticket";
async function getTicketById(req, res) {
    try {
      const ticketId = req.params.id;
      const ticket = await Ticket.findByPk(ticketId);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.json(ticket);
    } catch (error) {
      console.error('Error getting ticket by ID:', error);
      res.status(500).json({ error: 'Failed to get ticket' });
    }
}
export default getTicketById;  