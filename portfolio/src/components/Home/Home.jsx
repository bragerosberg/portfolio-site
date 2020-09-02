import React from 'react';
import Techstack from '../Home/Techstack';
import './styles/Home.css';


class Home extends React.Component {
  render () {
    return (
     <main>
       <section className="homepage__wrapper">
        <img className="portrait" src="https://i.imgur.com/r7TD3K2.jpg" alt="portrait"/>
        <div>
          <h1 className="homepage__name">Brage Røsberg</h1>
          <h1 className="homepage__title">Full Stack JavaScript Developer</h1>
          <p className="homepage__development">Page is currently under development, feel free to contact!.</p>
          <a href="mailto:bragecontact@gmail.com"><img className="homepage__contact" alt="gmail" src="https://i.imgur.com/K9UHWV1.png"/></a>  
        </div>
       </section>
       <Techstack />
     </main>
    )
  }
}

export default Home;