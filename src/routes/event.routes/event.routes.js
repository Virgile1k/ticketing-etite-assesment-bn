import { Router } from "express";
import createEvent from "../../controllers/event/Addevent";
import deleteEvent from "../../controllers/event/Deleteevent";
import getAllEvents from "../../controllers/event/Getallevents";
import getBookingsForEvent from "../../controllers/event/Getbookingsassociatedwithevent";
import getEventById from "../../controllers/event/Geteventbyid";
import getTicketsForEvent from "../../controllers/event/getticketsassociatedwithevent";
import updateEvent from "../../controllers/event/UpdatedEvent";

const eventRouter = Router();

eventRouter.post("event/add", createEvent); 
eventRouter.delete("/event/:id", deleteEvent);  
eventRouter.get("/event/all", getAllEvents);  
eventRouter.get("eventbookings/:id", getBookingsForEvent);  
eventRouter.get("event/:id", getEventById);  
eventRouter.get("eventtickets/:id", getTicketsForEvent);  
eventRouter.put("event/:id", updateEvent); 

export default eventRouter;
