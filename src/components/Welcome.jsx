

const Welcome = () => {
    return (
      <div className="welcome-container" style={{marginTop: '50px'}}>
        {/* Background decoration for modern feel */}
        <div className="bg-glow"></div>
      
        <section className="hero-section">
          <div className="badge">OFFICIAL COURSE WORKBENCH</div>
          <h1 className="course-title">
            Mastering <span className="js-yellow">JavaScript</span>
          </h1>
          <p className="author-name">by <strong>Edin Causevic</strong></p>
          
          <div className="welcome-card">
            <h3>Ready to practice?</h3>
            <p>Select a video from the sidebar to begin your coding drills. Each section contains interactive quizzes and coding challenges designed to reinforce what you just watched.</p>
            
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <p>Instant Feedback</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💻</span>
                <p>Console Drills</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <p>Job Ready Prep</p>
              </div>
            </div>
          </div>
        <footer className="welcome-footer">
          <a 
            href="https://www.youtube.com/@learntocodewithedin/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="yt-link"
          >
            <svg className="yt-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Watch tutorials on YouTube</span>
          </a>
        </footer>
        </section>
      </div>
    )
}

export default Welcome;
