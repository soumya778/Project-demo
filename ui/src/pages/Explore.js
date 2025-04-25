// src/pages/Explore.js
import React from 'react';

const Explore = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Explore Top Picks 🔍</h2>
      <div className="row">
        {[1, 2, 3, 4].map((_, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card h-100">
              <img src={`https://source.unsplash.com/300x200/?explore,${i}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Popular Item {i + 1}</h5>
                <p className="card-text">Recommended based on user trends.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
