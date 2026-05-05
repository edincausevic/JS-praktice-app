

const Welcome = () => {
    return (
      <div className="welcome-container">
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
        </section>
      </div>
    )
}

export default Welcome;
