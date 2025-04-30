import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Button, Alert } from 'react-bootstrap';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/databooks') // Fixed literal and removed query
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching books:", err);
        setError('There was an error loading the books. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📚 Best Selling Books</h2>
      
      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading books...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Row>
          {books.map((book, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{book["book title"]}</Card.Title>
                  <Card.Text>
                    <strong>Author:</strong> {book.author} <br />
                    <strong>Genre:</strong> {book.genre} <br />
                    <strong>Year:</strong> {book["year of publication"]} <br />
                    <strong>Price:</strong> ${book["book price"]} <br />
                    <strong>Rating:</strong> ⭐ {book.rating}
                  </Card.Text>
                  {book.url && (
                    <Button
                      variant="outline-primary"
                      href={`https://${book.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Amazon
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Books;
