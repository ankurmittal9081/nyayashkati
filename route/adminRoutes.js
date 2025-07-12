import { Router } from 'express';
import { Admin } from '../models/index.js';
import { softDeleteById } from './helper.js';
import authMiddleware from './auth/authMiddleware.js';

const router = Router();

// Middleware applied to all routes in this router
router.use(authMiddleware);

// ✅ Route 1: Add New Admin
router.post('/create', async (req, res) => {
  try {
    const adminData = { ...req.body, isDeleted: false };
    const newAdmin = await Admin.create(adminData);
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Route 2: Get All Active Admins
router.get('/list', async (req, res) => {
  try {
    const admins = await Admin.find({ isDeleted: false }).populate('user');
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Route 3: Soft Delete Admin by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedAdmin = await softDeleteById(Admin, req.params.id);

    if (!deletedAdmin) {
      return res.status(404).json({ error: 'Admin not found or already deleted' });
    }

    res.json({ message: 'Admin soft-deleted successfully', admin: deletedAdmin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
