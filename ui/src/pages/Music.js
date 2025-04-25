// // src/pages/Music.js
// import React from 'react';

// const Music = () => {
//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Tune into Your Mood 🎧</h2>
//       <div className="text-center mb-4">
//         <select className="form-select w-50 mx-auto">
//           <option>Chill</option>
//           <option>Workout</option>
//           <option>Focus</option>
//           <option>Party</option>
//         </select>
//       </div>
//       <div className="row">
//         {/* Sample song cards */}
//         {[1, 2, 3].map((_, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card shadow-sm">
//               <img src={`https://source.unsplash.com/400x250/?music,${index}`} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">Suggested Song</h5>
//                 <p className="card-text">Genre: Chill | Artist: Unknown</p>
//                 <a href="#" className="btn btn-outline-primary">Listen</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Music;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Music = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get('/api/music'); // Ensure this endpoint is working
        setSongs(res.data);
      } catch (err) {
        console.error('Error fetching songs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Tune into Your Mood 🎧</h2>

      <div className="text-center mb-4">
        <select className="form-select w-50 mx-auto">
          <option>Chill</option>
          <option>Workout</option>
          <option>Focus</option>
          <option>Party</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {songs.map((song, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={`https://source.unsplash.com/400x250/?music,${encodeURIComponent(song.Genre || 'song')}`}
                  className="card-img-top"
                  alt={song.Track_Name}
                />
                <div className="card-body">
                  <h5 className="card-title">{song.Track_Name}</h5>
                  <p className="card-text">
                    Artist: {song.Artist_Name} <br />
                    Genre: {song.Genre}
                  </p>
                  <button className="btn btn-outline-primary" disabled>
                    🎧 Listen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Music;
