import React from 'react';
import image from '../images/woman.jpg';

const Home = () => {
  return (
    <section style={{ backgroundImage: `url(${image})`, height: '100vh', backgroundSize: 'cover' }}>
      <h1>Welcome to My Portfolio</h1>
    </section>
  );
};

export default Home;
