import express from 'express';
import connectDB from './database/connection.js';
import User from './models/userschema.js';
import cors from 'cors';
const app = express();
const port = 5600;

app.use(express.json());


app.use(cors());

console.log("Starting server...");

connectDB();

app.get('/', (req, res) => {
  res.send('Hello ergtfhjkl;ljhghfWorld!');
});

app.post('/api/user/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
      }

     
      const user = new User({ email, username, password });
      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})