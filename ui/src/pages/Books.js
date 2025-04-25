import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/databooks?q=${query}') // Your backend endpoint
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);  
      })
      .catch(err => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📚 Recommended Books</h2>
      {loading ? (
        <div className="text-center"><Spinner animation="border" /></div>
      ) : (
        <Row>
          {books.map((book, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{book.Book_title}</Card.Title>
                  <Card.Text><strong>Description:</strong> {book.Description}</Card.Text>
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