import React, { useState, useEffect } from 'react';
import SnakeGame from './SnakeGame'; // Make sure to create/import your SnakeGame component
import config from './config'; // Import your config object
import './css/Home.css'; // Import the CSS file for styling

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (window.innerWidth <= 1024) setIsMobile(true);
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) {
    return null; // You can replace this with a loader component if needed
  }

  return (
    <main id="hello">
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>

      <section className="hero">
        <div className="head">
          <span>Hi all, I am</span>
          <h1>{config.dev.name}</h1>
          <span className="diple flex">
            &nbsp;
            <h2 className="line-1 anim-typewriter max-w-fit">{config.dev.role}</h2>
          </span>
        </div>

        <div id="info">
          <span className="action">// complete the game to continue</span>
          {!isMobile && <span>// you can also see it on my Github page</span>}
          {isMobile && <span>// find my profile on Github:</span>}
          <p className="code">
            <span className="identifier">const</span>&nbsp;
            <span className="variable-name">githubLink</span>&nbsp;
            <span className="operator">=</span>&nbsp;
            <a
              className="string"
              href={`https://github.com/${config.public.dev.contacts.social.github.user}`}
            >
              "https://github.com/{config.public.dev.contacts.social.github.user}"
            </a>
          </p>
        </div>
      </section>

      {!isMobile && (
        <section data-aos="fade-up" className="game">
          <SnakeGame />
        </section>
      )}
    </main>
  );
};

export default Home;
