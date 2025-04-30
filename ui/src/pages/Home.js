// Create separate files in /src/pages/ for:
// - Home.js (combine Hero, Features, Testimonials, RecommendationForm)
// - About.js
// - Feedback.js
// - Faq.js
// - Login.js
// - Signup.js

// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
// import RecommendationForm from '../components/RecommendationForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      {/* <RecommendationForm /> */}
    </>
  );
};

export default Home;
