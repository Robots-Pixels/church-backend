import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  adresse: String,
  profession: String,
  telephone: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Contact', contactSchema);
