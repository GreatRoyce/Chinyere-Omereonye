const aboutme = () => {
    let about = document.querySelector(".aboutme")
    about.innerHTML=`
    <div class="aboutme-container">
        <!-- Intro Content -->
        <div class="intro-card">
          <h2>Shopify <span>E-commerce</span> Specialist</h2>

          <p>
            I am Chinyere Omereonye, a dedicated Shopify e-commerce specialist
            with over 5 years of experience in strengthening customer retention
            and optimizing day-to-day online store operations for businesses of
            all sizes.
          </p>

          <p>
            My journey in e-commerce began with managing small boutique stores
            and has evolved into supporting established brands with
            multi-million dollar annual revenue. I've worked with over 50
            Shopify stores across various industries including fashion,
            electronics, health & wellness, and digital products.
          </p>

          <div class="highlight-box">
            <p>
              My ultimate focus is on operational efficiency, customer
              satisfaction, and driving long-term business growth for every
              client I work with.
            </p>
          </div>

          <div class="expertise-section">
            <h3>What I Bring to Your Business:</h3>
            <div class="expertise-grid">
              <div class="expertise-item">
                <h4>Operational Excellence</h4>
                <p>
                  Streamlining processes to handle high sales volumes while
                  maintaining efficiency
                </p>
              </div>
              <div class="expertise-item">
                <h4>Customer Experience</h4>
                <p>
                  Building lasting customer relationships through exceptional
                  support
                </p>
              </div>
              <div class="expertise-item">
                <h4>Technical Proficiency</h4>
                <p>Deep understanding of Shopify ecosystem and integrations</p>
              </div>
            </div>
          </div>

          <p>
            I provide reliable, expert-level support that enables e-commerce
            brands to scale sustainably, manage high sales volumes, and maintain
            a consistent 5-star customer experience. My approach combines
            technical expertise with a deep understanding of consumer behavior
            and e-commerce trends.
          </p>

          <a
            href="resume.html"
            target="_blank"
            rel="noopener"
            class="secondary-btn"
          >
            View Resume
          </a>
        </div>

        <!-- Profile Image & Quick Facts -->
        <div class="profile-section">
          <div class="profile-card">
            <div class="profile-highlights">
              <div class="highlight-item">
                <span class="highlight-number">20+</span>
                <span class="highlight-text">Shopify Stores Supported</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">6+</span>
                <span class="highlight-text">Years Experience</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">75%</span>
                <span class="highlight-text">Client Satisfaction</span>
              </div>
            </div>
            <div class="personal-note">
              <h3>A Personal Note</h3>
              <p>
                Outside of work, I'm passionate about mentoring aspiring
                e-commerce professionals and staying updated with the latest
                digital commerce trends. I believe in building partnerships, not
                just client relationships.
              </p>
              <div class="cta-buttons">
                <a href="#contact" class="primary-btn">Let's Work Together</a>
                <a href="#services" class="secondary-btn">View My Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
}
aboutme();