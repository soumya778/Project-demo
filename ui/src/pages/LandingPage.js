import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'; // Import external CSS

function Landing() {
  return (
    <div className="landing-container">
      {/* Animated Background Blobs */}
      <div className="background-blobs">
        <div className="blob blob-pink"></div>
        <div className="blob blob-purple"></div>
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="landing-card"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="landing-title"
        > 
          Explore. Discover. Enjoy! Only at  <span className="highlight"> SUGGESTIFY </span> 🚀
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="landing-subtitle"
        >
          Discover your next favorite <span className="highlight-pink">Book</span>, <span className="highlight-blue">Song</span>, or <span className="highlight-green">Movie</span> with our smart recommendations!
        </motion.p>
        <div className="landing-buttons">
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn login-btn"
            >
              Login
            </motion.button>
          </Link>
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn signup-btn"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;