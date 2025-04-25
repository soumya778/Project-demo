import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="testimonials" className="testimonials-section" data-aos="fade-up">
      <Container>
        <h2 className="text-center mb-4">What Our Users Say</h2>
        <Slider {...settings}>
          <div>
            <p>"Suggestify changed the way I discover new content. Highly recommend!"</p>
            <h5>- 
              KUMARI SHREYA
            </h5>
          </div>
          <div>
            <p>"A fantastic tool that saves me so much time. It's intuitive and smart!"</p>
            <h5>- SOUMYA KHANDELWAL</h5>
          </div>
          <div>
            <p>"Love how easy it is to find exactly what I'm looking for with Suggestify."</p>
            <h5>- SNEHA DARIWAL</h5>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
