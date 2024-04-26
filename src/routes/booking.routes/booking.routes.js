import { Router } from "express";
import createBooking from "../../controllers/booking/AddBooking";
import getBookingsForEvent from "../../controllers/booking/AllBookingsforEvent";
import getBookingsForUser from "../../controllers/booking/AllBookingsForUser";
import deleteBooking from "../../controllers/booking/DeleteBooking";
import getBookingById from "../../controllers/booking/SingleBooking";
import updateBooking from "../../controllers/booking/UpdateBooking";

const bookingRoute = Router();

bookingRoute.post("/booking/add", createBooking);
bookingRoute.get("/booking/all", getBookingsForEvent);
bookingRoute.get("/booking/user/:userId", getBookingsForUser);
bookingRoute.delete("/booking/delete/:id", deleteBooking);
bookingRoute.get("/booking/:id", getBookingById);
bookingRoute.patch("/booking/update/:id", updateBooking);

export default bookingRoute;
