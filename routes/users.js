import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updatedUser } from './../controllers/userController.js'

const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
//create new user
//update User
router.put('/:id',verifyUser, updatedUser);
//deleteUser
router.delete('/:id',verifyUser, deleteUser)
//getSingleUser
router.get('/:id',verifyUser, getSingleUser);
//getAll tgeUser
router.get('/',verifyAdmin, getAllUser);

export default router;