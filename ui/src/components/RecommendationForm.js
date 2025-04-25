import React, { useState } from 'react';
import axios from 'axios';

const RecommendationForm = () => {
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('https://suggestify-api.onrender.com/api/recommend', { query: input });

    setRecommendations(res.data);
  };
  // Removed redundant await axios.post line
  
    

  return (
    <section id="recommend" className="bg-primary bg-opacity-10 py-5">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-4">Try the Recommendation System</h2>
        <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-3 mb-4">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Type a genre or interest..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button className="btn btn-primary">Recommend</button>
        </form>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ul className="list-group shadow">
              {recommendations.map((item, i) => (
                <li key={i} className="list-group-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationForm;

