import express from 'express';
const router = express.Router();
import { getCategories, getCategoryChannels } from '../controllers/homeController.js';

router.get('/', getCategories);
router.get('/api/category-channels', getCategoryChannels);

export default router;
