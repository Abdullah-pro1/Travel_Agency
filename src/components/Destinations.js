import React from 'react';

const destinations = [
  { name: 'Paris', description: 'The city of lights and love.', image: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Maldives', description: 'Tropical paradise with crystal waters.', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Tokyo', description: 'Modern city with rich culture.', image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

const Destinations = () => (
  <section className="destinations">
    <h2>Popular Destinations</h2>
    <div className="destination-cards">
      {destinations.map((d, i) => (
        <div key={i} className="card">
          <img src={d.image} alt={d.name} />
          <h3>{d.name}</h3>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Destinations;
