import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

const siteProps = {
  name: "Elian Gonzalez",
  title: "Hacker & Content Creator",
  email: "elianjared@studentambassadors.com",
  gitHub: "Elianhardy",
  instagram: "Elianhardy",
  linkedIn: "Elian Jared Gonzalez Moran",
  medium: "Elianhardy",
  twitter: "Elianhardy",
  youTube: "Elianhardy",
};

const App = () => {
  return (
    <>
      <Header {...siteProps} />
      <Home />
      <About />
      <Portfolio />
      <h3>Built using Codespaces! 🥳</h3>
      <p>Follow instructions in README to utilize this template for your site or class.</p>
    </>
  );
};

export default App;
