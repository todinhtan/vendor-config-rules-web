import { Router } from 'express';
import webRoutes from './webRoutes';

const router = Router();

router.use('/', webRoutes);

export default router;
