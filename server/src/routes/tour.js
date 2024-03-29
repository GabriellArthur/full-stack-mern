import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';

import {
   createTour,
   deleteTour,
   getRelatedTours,
   getTour,
   getTours,
   getToursBySearch,
   getToursByTag,
   getToursByUser,
   likeTour,
   updateTour,
} from "../controllers/tour.js";
//Not Authentication
router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/", getTours);
router.get("/:id", getTour);

//Authentication
router.post("/", auth, createTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/userTours/:id", auth, getToursByUser);
router.patch("/like/:id", auth, likeTour);

export default router;