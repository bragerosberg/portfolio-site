import React from 'react';
import './style/contact.css';

const contact = () => {
  return (
    <main className="contact__wrapper">
      <img className="contact__image" src="https://i.imgur.com/4x8FktJ.png" alt="9100"/>
      <section>
        <img className="contact__portrait" src="https://i.imgur.com/lAAP2Ve.png" alt="profile"/>
        <h2 className="contact__subheader">Get in touch with me!</h2>
        <img src="https://image.flaticon.com/icons/svg/1000/1000885.svg" alt="mail"/>
        <img src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="github" />
        <img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedin" />
      </section>
    </main>
  )
}

export default contact;



