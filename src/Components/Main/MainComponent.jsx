import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import sparkle from '../../assets/sparkle_gif_transparent.gif';
import classNames from 'classnames';

import './styles.scss';

const Main = () => {
  const [runAnimation, setRunAnimation] = useState(true);
  const [sparkleClasses, setSparkleClasses] = useState(
    classNames('sparkle', 'animateSparkle')
  );

  const animationLength = 21000;

  const endAnimationTimer = () => {
    setTimeout(
      () => setSparkleClasses(classNames('sparkle', 'animateNone')),
      animationLength + 2000
    );
    setTimeout(() => setRunAnimation(false), animationLength);
  };

  useEffect(() => {
    endAnimationTimer();
  }, []);

  return (
    <div className='Main'>
      <div className='headline'>
        <h2>Full-stack web development with</h2>
        <h2 className='typist-text'>
          {runAnimation ? (
            <Typist
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={100}
              startDelay={1000}
            >
              spark
              <Typist.Backspace count={5} delay={1000} />
              vision
              <Typist.Backspace count={6} delay={1000} />
              attention to detail
              <Typist.Backspace count={4} delay={1000} />
              <Typist.Backspace count={0} delay={1200} /> ... hey look ma I'm
              typing!
              <Typist.Backspace count={43} delay={1200} />
              spark
            </Typist>
          ) : (
            <div>spark</div>
          )}
        </h2>
        <img
          className={sparkleClasses}
          src={sparkle}
          alt='sparkle - tenor gif post-id 14091652'
        />
      </div>
      <p>
        I am a full-stack web developer specialised in Javascript, React,
        Node.js, and Express.js
      </p>
      <p>
        In my previous life, I was a project manager and science communications
        specialist
      </p>
      <p>
        I love building high-quality digital products tailored to users' and
        clients' needs
      </p>
      <button>Contact</button>
      <button>Reference projects</button>
    </div>
  );
};

export default Main;
