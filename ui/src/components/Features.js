import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Carousel, Button, Modal, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaMusic, FaFilm, FaPodcast, FaRobot, FaMobileAlt } from 'react-icons/fa';
import axios from 'axios';


const Features = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleExploreClick = () => setShowModal(true);

  // const handleOptionSelect = async (option) => {
  //   console.log('Fetching option:', option); // 🔍 check this
  //   setLoading(true);
  //   try {
  //     // const res = await axios.get(`/api/recommend/${option.toLowerCase()}`);
  //     const res = await axios.get(`/api/databooks?search=${option.toLowerCase()}`);

  //     console.log('Fetched data:', res.data);
  //     navigate(`/${option.toLowerCase()}`, { state: { data: res.data } });
  //   } catch (err) {
  //     console.error('Error fetching recommendations:', err);
  //     alert('Oops! Something went wrong while fetching data.');
  //   } finally {
  //     setLoading(false);
  //     setShowModal(false);
  //   }
  // };

  const handleOptionSelect = async (option) => {
    console.log('Fetching option:', option);
    setLoading(true);
    try {
      let endpoint = '';
      switch (option.toLowerCase()) {
        case 'books':
          endpoint = '/api/databooks';
          break;
        case 'music':
          endpoint = '/api/music';
          break;
        case 'movies':
          endpoint = '/api/movies';
          break;
        case 'podcasts':
          endpoint = '/api/podcasts';
          break;
        default:
          throw new Error('Invalid option selected');
      }
  
      const res = await axios.get(endpoint);
      console.log('Fetched data:', res.data);
  
      navigate(`/${option.toLowerCase()}`, { state: { data: res.data } });
  
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      alert('Oops! Something went wrong while fetching data.');
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };
  

  return (
    <section id="features" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-5">Explore Our Features</h2>
        
       

        <Row className="align-items-center">
          {/* Left Carousel */}
          <Col md={6} data-aos="fade-right">
            <Carousel fade interval={3000} pause={false}>
              {/* Slides */}
              {/* ... same carousel code ... */}
            </Carousel>
          </Col>

          {/* Right Feature Cards */}
          <Col md={6}>
            <Row>
              {/* Cards */}
              <Col sm={12} className="mb-4" data-aos="fade-left">
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body>
                    <Card.Title><FaBook className="me-2" />Book Recommendations</Card.Title>
                    <Card.Text>Find the perfect read based on your mood, genre preference, and history.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* ... other cards ... */}
            </Row>

            <div className="text-center mt-4" data-aos="zoom-in">
              <Button
                variant="primary"
                size="lg"
                onClick={handleExploreClick}
                style={{ fontSize: '1.25rem', padding: '0.75rem 2rem' }}
              >
                🚀 Start Exploring
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>What do you want to explore?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <>
              <Button variant="outline-dark" className="m-2" onClick={() => handleOptionSelect('Books')}>
                📚 Books
              </Button>
              <Button variant="outline-dark" className="m-2" onClick={() => handleOptionSelect('Music')}>
                🎵 Music
              </Button>
              <Button variant="outline-dark" className="m-2" onClick={() => handleOptionSelect('Movies')}>
                🎬 Movies
              </Button>
              <Button variant="outline-dark" className="m-2" onClick={() => handleOptionSelect('Podcasts')}>
                🎙️ Podcasts
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Features;

