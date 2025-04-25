// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

(async () => {
  try {
    await connectDB(); // Wait for DB connection
    app.use(cors());
    app.use(express.json());

    // API route
    // app.use('/api/books', require('./routes/bookRoutes'));

    app.use('/api/databooks', require('./routes/databooks'));
    app.use('/api/music', require('./routes/music'));


    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1); // Exit with failure
  }
})();
