// src/pages/Music.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Music = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtist, setSelectedArtist] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/music');
        setSongs(res.data);
      } catch (err) {
        console.error('Error fetching songs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  // useEffect(() => {
  //   const fetchSongs = async () => {
  //     try {
  //       const endpoint = selectedArtist
  //         ? `http://localhost:5000/api/music?artist=${encodeURIComponent(selectedArtist)}`
  //         : `http://localhost:5000/api/music`;
  
  //       const res = await axios.get(endpoint);
  //       setSongs(res.data);
  //     } catch (err) {
  //       console.error('Error fetching songs:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchSongs();
  // }, [selectedArtist]); // ← 🔥 important!
  

  // Hardcoded artist names
  const artists = ['Shreya Ghoshal', 'Pink Floyd', 'Pritam', 'Kishore Kumar'];

  // Handle artist dropdown change
  const handleArtistChange = (e) => {
    setSelectedArtist(e.target.value);
  };

  // Filter songs based on selected artist
  const filteredSongs = selectedArtist === ''
    ? songs
    : songs.filter(song => song.Artist === selectedArtist);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Tune into Your Mood 🎧</h2>

     

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {/* Display content based on selected artist */}
          <h3 className="text-center mb-4">
            {selectedArtist ? `Songs by ${selectedArtist}` : 'All Songs'}
          </h3>

          <div className="row">
            {filteredSongs.length === 0 ? (
              <div className="col-12 text-center">
                <p>No songs found for this artist.</p>
              </div>
            ) : (
              filteredSongs.map((song, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card shadow-sm">
                    <img
                      src={`https://img.youtube.com/vi/${song.Url_youtube?.split("v=")[1]?.substring(0, 11)}/0.jpg`}
                      className="card-img-top"
                      alt={song.Track}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{song.Track}</h5>
                      <p className="card-text">
                        <strong>Artist:</strong> {song.Artist} <br />
                        <strong>Album:</strong> {song.Album}
                      </p>
                      <a
                        href={song.Url_youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary"
                      >
                        ▶ Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;
