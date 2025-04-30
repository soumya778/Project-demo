import React, { useEffect, useState } from 'react';
import axios from 'axios';

const keywords = ['Action', 'Comedy', 'Drama', 'Thriller', 'Romance', 'Crime', 'Adventure'];

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [activeKeyword, setActiveKeyword] = useState('');

  const fetchMovies = async (search = '') => {
    try {
      const res = await axios.get(`/api/movies?q=${search}`);
      setMovies(res.data);
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveKeyword('');
    fetchMovies(query);
  };

  const handleKeywordClick = (keyword) => {
    setQuery('');
    setActiveKeyword(keyword);
    fetchMovies(keyword);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Movie Recommendations</h2>

      <form className="input-group mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Search movies by title or keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary smallbtn" type="submit">Search</button>
      </form>

      <div className="mb-4 text-center">
        {keywords.map((keyword) => (
          <button
            key={keyword}
            className={`btn btn-outline-secondary me-2 mb-2 smallbtn ${activeKeyword === keyword ? 'active' : ''}`}
            onClick={() => handleKeywordClick(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>

      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={movie.Poster_Url}
                  className="card-img-top"
                  alt={movie.Title}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Overview.slice(0, 100)}...</p>
                  <p><strong>Rating:</strong> {movie.Vote_Average} ({movie.Vote_Count} votes)</p>
                  <p><strong>Release:</strong> {movie.Release_Date}</p>
                  <p><strong>Genre:</strong> {movie.Genre}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>No movies found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
