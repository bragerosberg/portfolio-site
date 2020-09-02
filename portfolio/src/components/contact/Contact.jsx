import React from 'react';
import './style/contact.css';

const contact = () => {
  return (
    <main className="contact__wrapper">
      <img className="contact__image" src="https://i.imgur.com/4x8FktJ.png" alt="9100"/>
      <article className="contact__information">
        <img className="contact__portrait" src="https://i.imgur.com/lAAP2Ve.png" alt="profile"/>
        <h2 className="contact__subheader">Get in touch with me!</h2>
        <section className="contact__icons">
          <a href="mailto:bragecontact@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/1000/1000885.svg" alt="mail"/></a>
          <a href="https://www.github.com/bragerosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="github" /></a>
          <a href="https://www.linkedin.com/in/brage-rosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedin" /></a>
        </section>
      </article>
    </main>
  )
}

export default contact;



