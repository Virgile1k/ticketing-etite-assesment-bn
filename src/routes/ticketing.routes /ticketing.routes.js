import { Router } from "express";
import addTicket from "../../controllers/ticketing/Addticket";
import getTicketsForEvent from "../../controllers/ticketing/Alltickets";
import deleteTicket from "../../controllers/ticketing/deleteticket";
import getTicketById from "../../controllers/ticketing/Singleticket";
import updateTicket from "../../controllers/ticketing/Updateticket";

const ticketingRoute = Router();

ticketingRoute.post("/add/ticket", addTicket);
ticketingRoute.get("/tickets/event/:eventId", getTicketsForEvent);
ticketingRoute.delete("/ticket/:id", deleteTicket);
ticketingRoute.get("/getticket/:id", getTicketById);
ticketingRoute.patch("/ticket/update/:id", updateTicket);

export default ticketingRoute;
