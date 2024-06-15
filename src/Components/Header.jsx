import React from "react";

const Header = ({ name, title, email, gitHub, instagram, linkedIn, medium, twitter, youTube }) => {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <ul>
        <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
        <li>GitHub: <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">{gitHub}</a></li>
        <li>Instagram: <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">{instagram}</a></li>
        <li>LinkedIn: <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">{linkedIn}</a></li>
        <li>Medium: <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">{medium}</a></li>
        <li>Twitter: <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">{twitter}</a></li>
        <li>YouTube: <a href={`https://www.youtube.com/c/${youTube}`} target="_blank" rel="noopener noreferrer">{youTube}</a></li>
      </ul>
    </header>
  );
};

export default Header;
