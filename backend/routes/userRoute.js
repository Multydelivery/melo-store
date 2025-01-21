import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/api/user/admin', adminLogin);

export default userRouter;