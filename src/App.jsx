import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">NEXTplore</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#careers">Careers</a>
          <a href="#saved">Saved</a>
        </nav>

        <button className="profile-button">Profile</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR FUTURE STARTS HERE</p>

            <h1>
              Explore careers.
              <br />
              Discover <span>your path.</span>
            </h1>

            <p className="hero-description">
              NEXTplore helps you discover careers that match your
              interests, strengths, and ambitions.
            </p>

            <div className="hero-actions">
              <button className="primary-button">
                Start Exploring
              </button>

              <button className="secondary-button">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="explore-section" id="explore">
          <p className="eyebrow">DISCOVER</p>

          <h2>Where could you go next?</h2>

          <div className="career-grid">
            <div className="career-card">
              <div className="card-icon">💻</div>
              <h3>Technology</h3>
              <p>Build the tools and technologies of tomorrow.</p>
            </div>

            <div className="career-card">
              <div className="card-icon">🧠</div>
              <h3>Science</h3>
              <p>Explore questions, solve problems, and discover.</p>
            </div>

            <div className="career-card">
              <div className="card-icon">🎨</div>
              <h3>Creative</h3>
              <p>Turn ideas into experiences that inspire people.</p>
            </div>

            <div className="career-card">
              <div className="card-icon">🌍</div>
              <h3>Business</h3>
              <p>Create opportunities and make an impact.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
