import React from 'react';
import { Link } from 'react-router-dom';
import './Tours.css'; // Create this CSS file

const tours = [
  {
    name: 'Asia Tours',
    description: 'Experience the rich culture and diversity of Asia.',
    image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg',
    link: '/tours/asia'
  },
  {
    name: 'Africa Tours',
    description: 'Discover the wild landscapes and heritage of Africa.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    link: '/tours/africa'
  },
  {
    name: 'Europe Tours',
    description: 'Travel through history and elegance in Europe.',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    link: '/tours/europe'
  }
];

const Tours = () => (
  <section className="tours">
    <h2>Explore Our Tours</h2>
    <div className="tour-cards">
      {tours.map((tour, i) => (
        <Link key={i} to={tour.link} className="tour-card">
          <img src={tour.image} alt={tour.name} />
          <div className="tour-info">
            <h3>{tour.name}</h3>
            <p>{tour.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Tours;
