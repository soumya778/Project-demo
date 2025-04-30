// File: src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos'; //for animation 
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Music from './pages/Music';
import Podcasts from './pages/Podcasts';
import Movie from './pages/Movie';
import Books from './pages/Books';
import axios from 'axios'; //for backend 

function App() {
 const [message, setMessage] = useState('');
   useEffect(() => {
   AOS.init({
      duration: 1000, // animation duration
      once: true      // only animate once
    }); 
    axios.get('/')
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);
  return (

   <div className="SUGGESTIFY">
      <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/feedback" element={<Feedback />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/music" element={<Music/>}/>
         <Route path="/podcasts" element={<Podcasts />} />
         <Route path="/movies" element={<Movie />} />
         <Route path="/books" element={<Books/>}></Route>
       </Routes>
       <Footer />  
    </div>
  );
}

export default App

