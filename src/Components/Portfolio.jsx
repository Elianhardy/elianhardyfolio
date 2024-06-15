import React from 'react';
import image from '../images/ai.jpg';

const projectList = [
  {
    title: "Tutorial: Instalar TMUX + Oh My TMUX",
    description: "Guía detallada para personalizar y mejorar la productividad en la terminal con TMUX.",
    url: "http://blog.elianhardy.com/?p=453",
  },
  {
    title: "Personalización de la terminal con ZSH y Powerlevel10k",
    description: "Paso a paso para transformar la terminal con ZSH y el tema Powerlevel10k en Ubuntu WSL.",
    url: "http://blog.elianhardy.com/?p=421",
  },
  {
    title: "Hack The Box: Registrarse en 2020",
    description: "Guía para registrarse y comenzar a explorar desafíos de hacking en Hack The Box.",
    url: "http://blog.elianhardy.com/?p=305",
  },
  {
    title: "Escanear cuentas de usuario con Sherlock",
    description: "Tutorial sobre cómo usar Sherlock para escanear cuentas de usuario en múltiples plataformas.",
    url: "http://blog.elianhardy.com/?p=175",
  },
];

const Portfolio = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: '1' }}>
        <img src={image} alt="Design Desk" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={{ flex: '1', padding: '20px' }}>
        <h2>My Portfolio</h2>
        <ul>
          {projectList.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">Learn more</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
