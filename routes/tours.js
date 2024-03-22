import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updatedTour } from './../controllers/tourController.js'

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new tour 
router.post('/',verifyAdmin, createTour)
//update tour
router.put('/:id',verifyAdmin, updatedTour);
//deleteTour
router.delete('/:id',verifyAdmin, deleteTour)
//getSingleTour
router.get('/:id',getSingleTour);
//getAll tgetour
router.get('/',getAllTour);
//get tour by distance|cityname|maxgroudsize
router.get('/search/getTourBySearch', getTourBySearch); //  '/getTourBySearch'
router.get('/search/getFeaturedTour', getFeaturedTour);
router.get('/search/getTourCount', getTourCount)

export default router;