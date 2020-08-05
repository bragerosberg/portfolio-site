import React from 'react';
import './styles/Techstack.css';

const Techstack = () => {
  return (
    <article>
      <section className="tech__logos">
        <img src="https://i.imgur.com/AkbotMR.png" alt="js"/>
        <img src="https://i.imgur.com/WCwxLaz.png" alt="react"/>
        <img src="https://i.imgur.com/abOnPp4.png" alt="nodejs"/>
        <img src="https://i.imgur.com/vJ8T5i8.png" alt="express"/>
        <img src="https://i.imgur.com/2yH5rFb.png" alt="mongodb"/>
        <img src="https://i.imgur.com/8KVSwvp.png" alt="html5"/>
        <img src="https://i.imgur.com/GsdKN8c.png" alt="css3"/>
      </section>
      <p className="techstack__title">See all technologies and tools I work with under "Portfolio"</p>
    </article>
  )
}

export default Techstack;