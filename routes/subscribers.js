import express from 'express';
import { newSubscriber, getSubscribers } from './../controllers/subscriberController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new subscriber
router.post('/',newSubscriber);

//get Subscriber
router.get('/',verifyAdmin, getSubscribers);

export default router;