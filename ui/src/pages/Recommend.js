// src/pages/Recommend.js
import React from 'react';

const Recommend = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Personalized Recommendations</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="inputQuery" className="form-label">What are you looking for?</label>
              <input type="text" className="form-control" id="inputQuery" placeholder="Enter genre, product, topic..." />
            </div>
            <button className="btn btn-primary w-100">Get Suggestions</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
