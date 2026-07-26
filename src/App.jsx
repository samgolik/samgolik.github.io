import { useEffect } from 'react';
import './styles.css';

const CONTACT_URL = 'https://twitter.com/samgolik';
const GITHUB_URL = 'https://github.com/samgolik';

function ExternalLink({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Wordmark() {
  return <a className="wordmark" href="/">SG<span>.</span></a>;
}

function HomePage() {
  useEffect(() => { document.title = 'Sam Golik — Software Engineer'; }, []);
  const year = new Date().getFullYear();

  return <main className="site-shell">
    <nav className="site-nav" aria-label="Primary navigation">
      <Wordmark />
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <ExternalLink className="nav-contact" href={CONTACT_URL}>Say hello <span>↗</span></ExternalLink>
      </div>
    </nav>

    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow"><span></span> Available for a good conversation</p>
        <h1 id="hero-heading">Hi, I’m <em>Sam.</em><br />I build things for people.</h1>
        <p className="hero-intro">Software engineer, curious maker, and lifelong learner currently based in Washington, D.C.</p>
        <div className="hero-actions">
          <ExternalLink className="button button-primary" href={CONTACT_URL}>Get in touch <span>↗</span></ExternalLink>
          <a className="text-link" href="#projects">See my work <span>↓</span></a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <div className="image-doodle doodle-one">✦</div>
        <div className="image-doodle doodle-two">let’s make<br />something</div>
        <img src="/headshot.jpg" alt="Sam Golik smiling outdoors" className="hero-image" />
        <div className="image-caption">Washington, D.C.<br /><span>38.9072° N, 77.0369° W</span></div>
      </div>
    </section>

    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="section-heading"><p className="section-number">01 / ABOUT</p><h2 id="about-heading">A little bit<br />about me.</h2></div>
      <div className="about-content">
        <p className="about-lede">I’m a Computer Science &amp; Engineering student at The Ohio State University, with a focus on artificial intelligence and a minor in mathematics.</p>
        <div className="about-details">
          <p>My background is in object-oriented programming and web development. More recently, I’ve been exploring Flutter/Dart, artificial intelligence, and machine learning. I love learning new things and talking tech, so feel free to reach out.</p>
          <p>When I’m away from a screen, you’ll usually find me making music, climbing, running a trail, or attempting a respectable disc golf throw. I play violin with the Ohio State Symphony Orchestra and have two older brothers and a golden retriever named Rigby.</p>
        </div>
        <div className="currently-card"><p className="card-label">RIGHT NOW</p><p>Working in the Technology Internship Program at <strong>Capital One</strong>.</p></div>
      </div>
    </section>

    <div className="skills-strip" aria-label="Interests and specialties"><span>Software engineering</span><i>✦</i><span>AI &amp; machine learning</span><i>✦</i><span>Web development</span><i>✦</i><span>Music maker</span><i>✦</i></div>

    <section className="projects section" id="projects" aria-labelledby="projects-heading">
      <div className="projects-heading"><div><p className="section-number">02 / SELECTED WORK</p><h2 id="projects-heading">Projects I’ve<br />loved making.</h2></div><ExternalLink className="text-link" href={GITHUB_URL}>More on GitHub <span>↗</span></ExternalLink></div>
      <div className="project-grid">
        <a className="project-card die-up-card" href="/projects/die-up/">
          <div className="project-topline"><span>01</span><span>iOS APP</span></div>
          <div className="project-art"><img src="/die-up-logo.png" alt="Die Up app logo" /></div>
          <div className="project-meta"><div><h3>Die Up!</h3><p>A new way to track scores.</p></div><span className="circle-arrow">↗</span></div>
        </a>
        <ComingCard number="02" description="Something good is in the works." symbol="?" />
        <ComingCard number="03" description="Check back soon." symbol="✦" alternate />
      </div>
    </section>

    <section className="contact-panel"><p className="section-number">03 / GET IN TOUCH</p><h2>Have an idea?<br /><em>Let’s talk.</em></h2><ExternalLink className="button button-light" href={CONTACT_URL}>Send a message <span>↗</span></ExternalLink></section>
    <footer><Wordmark /><p>Made with care and a little curiosity.</p><p>© {year} Sam Golik</p></footer>
  </main>;
}

function ComingCard({ number, description, symbol, alternate = false }) {
  return <div className={`project-card coming-card${alternate ? ' alternate' : ''}`} aria-label="Future project coming soon">
    <div className="project-topline"><span>{number}</span><span>IN PROGRESS</span></div>
    <div className="coming-art"><span>{symbol}</span></div>
    <div className="project-meta"><div><h3>Next up</h3><p>{description}</p></div></div>
  </div>;
}

function DieUpPage() {
  useEffect(() => { document.title = 'Die Up! — Sam Golik'; }, []);
  const year = new Date().getFullYear();
  return <main className="die-up-page">
    <nav className="site-nav"><a className="back-link" href="/"><span>←</span> Back to Sam’s site</a><Wordmark /></nav>
    <section className="die-hero">
      <div className="hero-copy"><p className="eyebrow">CASE STUDY / 01</p><h1>Keep the game.<br /><em>Not the math.</em></h1><p className="intro">Die Up is a friendly scorekeeping app that lets you stay present at the table, then keeps every great game on record.</p><a className="button" href="#support">Get support <span>↓</span></a></div>
      <div className="hero-logo"><span className="burst burst-one">✦</span><img src="/die-up-logo.png" alt="Die Up app logo" /><span className="burst burst-two">✦</span></div>
    </section>
    <section className="phones"><img src="/dieintro-removebg-preview.png" alt="Two Die Up app screens showing a score list and player scores" /></section>
    <section className="overview"><p className="eyebrow">THE IDEA</p><h2>Game night is for<br />playing together.</h2><p>Die Up makes it effortless to track scores as you play, and saves each game for whenever the friendly debate about who won starts again.</p></section>
    <section className="support" id="support"><div><p className="eyebrow">NEED A HAND?</p><h2>Support info.</h2></div><address><div><span>EMAIL</span><a href="mailto:beattheclockstudios@gmail.com">beattheclockstudios@gmail.com</a></div><div><span>PHONE</span><a href="tel:+14404203843">440-420-3843</a></div><div><span>MAIL</span><p>450 Massachusetts Ave NW #729<br />Washington, D.C.</p></div></address></section>
    <footer><Wordmark /><p>© {year} Sam Golik</p></footer>
  </main>;
}

function App() {
  return window.location.pathname.startsWith('/projects/die-up') ? <DieUpPage /> : <HomePage />;
}

export default App;
