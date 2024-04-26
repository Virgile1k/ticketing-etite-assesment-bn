import { Router } from "express";
import authRoute from "./auth.routes/auth.routes";
import ticketingRoute from "./ticketing.routes /ticketing.routes";
import eventRouter from "./event.routes/event.routes";
import bookingRoute from "./booking.routes/booking.routes";

const router = Router();

router.use("/user", authRoute);
router.use("/ticketing",ticketingRoute);
router.use("/eventing",eventRouter);
router.use("/bookings",bookingRoute);

export default router;
