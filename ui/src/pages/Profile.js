// src/pages/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Welcome Back, [User]</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <img src="https://source.unsplash.com/150x150/?person" className="card-img-top rounded-circle mx-auto mt-4" style={{ width: '100px' }} />
            <div className="card-body">
              <h5 className="card-title">Username</h5>
              <p className="card-text">Email: user@example.com</p>
              <button className="btn btn-outline-dark">Edit Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h4>History</h4>
          <ul className="list-group">
            <li className="list-group-item">Liked: "Bohemian Rhapsody"</li>
            <li className="list-group-item">Searched: "Comedy Movies"</li>
            <li className="list-group-item">Filtered: "Top 2024 Recommendations"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
