import Contact from '../models/contact.model.js';

export const checkAuth  = async (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  console.log('Authorization header:', authHeader); 
  const token = authHeader.split(' ')[1];
  if (token === process.env.ADMIN_TOKEN) {
    next();
  } else {
    res.status(403).json({       
      status : false,
      message: "Accès refusé. "});
  }
}

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createContact = async (req, res) => {
  const contact = req.body;

  if (!contact.nom || !contact.telephone){
    return res.status(400).json({
      status : false,
      message: "Champs manquants requis. "})
  }

  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ 
      status : true,
      message: 'Contact ajouté avec succès' });
  } catch (err) {
    res.status(400).json({ 
      status : false,
      message: 'Une erreur est survenue. Veuillez réésayer'
     });
  }
};
