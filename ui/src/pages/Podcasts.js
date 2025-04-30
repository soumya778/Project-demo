import React, { useEffect, useState } from 'react';
import axios from 'axios';

const categories = ['Technology', 'Health', 'Business', 'News', 'Education', 'Entertainment'];

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const fetchPodcasts = async (search = '') => {
    try {
      const res = await axios.get(`/api/podcasts?q=${search}`);
      setPodcasts(res.data);
    } catch (err) {
      console.error('Error fetching podcasts:', err);
    }
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveCategory('');
    fetchPodcasts(query);
  };

  const handleCategoryClick = (category) => {
    setQuery('');
    setActiveCategory(category);
    fetchPodcasts(category);
  };

  const handleClear = () => {
    setQuery('');
    setActiveCategory('');
    fetchPodcasts('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Discover Podcasts</h2>

      <form className="input-group mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Search podcasts by title, category or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn smallbtn btn-primary" type="submit">Search</button>
        <button className="btn smallbtn btn-outline-secondary ms-2" type="button" onClick={handleClear}>Clear</button>
      </form>

      <div className="mb-4 text-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn smallbtn btn-outline-info me-2 mb-2 ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
  {podcasts.length > 0 ? (
    podcasts.map((podcast) => (
      <div key={podcast._id} className="col-md-4 mb-4">
        <div className="card h-100">
          <img
            src={podcast.image}
            className="card-img-top"
            alt={podcast.title}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">{podcast.title}</h5>
            <p className="card-text">{podcast.summary?.slice(0, 100)}...</p>
            <p><strong>Category:</strong> {podcast.category}</p>
            <p><strong>Subcategory:</strong> {podcast.subcategory}</p>
            <a href={podcast.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center">
      <p>No podcasts found. Try a different search or category.</p>
    </div>
  )}
</div>

    </div>
  );
};

export default Podcast;
