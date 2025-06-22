import express from 'express';
import { getAllContacts, createContact, checkAuth } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', checkAuth,  getAllContacts);
router.post('/save', createContact);

export default router;
