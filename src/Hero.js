import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSideMenu, closeSubMenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubMenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure and the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripes software and APIS to accept payments, send payouts and
            manage their businesses online.
          </p>
          <button className='btn' onClick={closeSideMenu}>
            start now
          </button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
