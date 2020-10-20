import React from 'react';
import './styles/contact.css';
import Discussion from '../discussion/Discussion';

const Contact = () => {

  return (
    <>
    <div className="contact">
      <div className="contact__wrapper">
        <article className="contact__information">
          <img className="contact__portrait" src="https://i.imgur.com/lAAP2Ve.png" alt="profile"/>
          <h2 className="contact__subheader">Get in touch with me!</h2>
          <section className="contact__icons">
            <a href="mailto:bragecontact@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/1000/1000885.svg" alt="mail"/></a>
            <a href="https://www.github.com/bragerosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="github" /></a>
            <a href="https://www.linkedin.com/in/brage-rosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedin" /></a>
          </section>
        </article>
      </div>
      <Discussion />
    </div>
    </>
  )
}

export default Contact;



