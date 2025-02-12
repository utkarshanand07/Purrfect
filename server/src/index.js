import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use("/ap/auth", authRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
