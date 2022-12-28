import express from 'express';
import {
  getAllBills,
  createBill,
  updateBill,
  deleteBill,
  getBillsByCategory,
} from '../controllers/billControllers.js';

const router = express.Router();

router.route('/').get(getAllBills).post(createBill);
router.route('/:id').patch(updateBill).delete(deleteBill);
router.route('/categories/:category').get(getBillsByCategory);

export default router;
