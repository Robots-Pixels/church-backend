import express from 'express';
import { getAllContacts, createContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', getAllContacts);
router.post('/', createContact);

export default router;
