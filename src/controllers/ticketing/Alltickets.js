import { Ticket } from "../../database/models/ticket";

async function getTicketsForEvent(req, res) {
  try {
    const eventId = req.params.eventId;
    const tickets = await Ticket.findAll({ where: { eventId } });
    res.json(tickets);
  } catch (error) {
    console.error("Error getting tickets for event:", error);
    res.status(500).json({ error: "Failed to get tickets for event" });
  }
}

export default getTicketsForEvent;
