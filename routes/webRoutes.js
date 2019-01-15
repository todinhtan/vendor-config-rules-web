import { Router } from 'express';
import { getIndex, saveRules } from '../controllers';

const router = Router();

router.get('/', getIndex);
router.post('/vendor/:vendorId', saveRules);

export default router;
