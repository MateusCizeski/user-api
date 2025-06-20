import { Router } from "express";
import { createUser, deleteUser, listById, listUsers, updateUser } from "./user.controller";

export const userRoutes = Router();

userRoutes.post('/createUser', createUser);
userRoutes.get('/listUsers', listUsers);
userRoutes.get('/listById', listById);
userRoutes.put('/updateUser', updateUser);
userRoutes.delete('/deleteUser', deleteUser);