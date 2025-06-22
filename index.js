import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contact.routes.js';
import authRoutes from './routes/auth.routes.js';


dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('🚀 API Contact App is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
