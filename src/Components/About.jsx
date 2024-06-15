import React from 'react';
import image from '../images/programming.jpg';

const About = () => {
  const description = "Soy Elian González, un apasionado del hacking ético y la personalización de sistemas.";
  const detailOrQuote = "Mi misión es compartir conocimiento y ayudar a otros a mejorar su productividad a través de la personalización de sus entornos de desarrollo. Me especializo en herramientas como TMUX y ZSH, y disfruto explorando nuevas tecnologías. Una de mis frases favoritas es: 'El conocimiento no es poder hasta que se aplica.'";

  return (
    <section style={{ backgroundImage: `url(${image})`, padding: '50px', backgroundSize: 'cover' }}>
      <h2>About Me</h2>
      <p>{description}</p>
      <blockquote>{detailOrQuote}</blockquote>
    </section>
  );
};

export default About;
