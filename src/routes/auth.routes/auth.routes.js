import { Router } from "express";
import login from '../../controllers/auth/Login';
import logout from '../../controllers/auth/Logout';
import { updateProfile, getProfile } from "../../controllers/User/UserProfile";
import signup from "../../controllers/auth/signup";

const authRoute = Router();

authRoute.post('/login', login);
authRoute.post("/signup",signup);
authRoute.post('/logout', logout);
authRoute.put("/profile", updateProfile);
authRoute.get("/for/only/profiles", getProfile);

export default authRoute;