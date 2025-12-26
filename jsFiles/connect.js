const connect = () => {
  let connect = document.querySelector(".connect-section");
  connect.innerHTML = `
    
      <div class="connect-container">
        <div class="section-header">
          <h2>Connect With Me</h2>
          <p class="section-subtitle">
            Let's discuss how I can help grow your e-commerce business
          </p>
        </div>

        <div class="connect-grid">
          <!-- Profile & Contact Card -->
          <div class="profile-contact-card">
            <div class="profile-header">
              <div class="avatar">
                <div class="avatar-image"></div>
              </div>
              <h3>Chinyere Omereonye</h3>
              <p class="title">Shopify E-commerce Specialist</p>
            </div>

            <div class="contact-details-grid">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-info">
                  <span class="contact-label">Email</span>
                  <a
                    href="mailto:omereonyechinyere@yahoo.com"
                    class="contact-value"
                  >
                    omereonyechinyere@yahoo.com
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-info">
                  <span class="contact-label">Phone / WhatsApp</span>
                  <a href="tel:+2347035451100" class="contact-value">
                    +234 703 545 1100
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-info">
                  <span class="contact-label">Location</span>
                  <span class="contact-value">Nigeria (GMT+1)</span>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-info">
                  <span class="contact-label">Availability</span>
                  <span class="contact-value">Mon - Fri, 9 AM - 6 PM</span>
                </div>
              </div>
            </div>

           <div class="quick-actions"> 
  <a
    href="https://wa.me/2347035451100?text=Hi%2C%20Chinyere%2C%20this%20is%20from%20your%20portfolio%20website"
    class="whatsapp-btn"
    target="_blank"
  >
    <i class="fab fa-whatsapp"></i> Message on WhatsApp
  </a>
</div>
          </div>

          <!-- Social & Stats Card -->
          <div class="social-stats-card">
            <h3>Professional Networks</h3>
            <p>Connect with me for collaborations and opportunities</p>

            <div class="social-links-grid">
              <a
                href="http://linkedin.com/in/chinyere-omereonye-27a82a57"
                class="social-link"
                target="_blank"
                title="LinkedIn"
              >
                <i class="fab fa-linkedin-in"></i>
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div class="quick-stats-grid">
              <div class="stat-box">
                <span class="stat-number">20+</span>
                <span class="stat-label">Stores Supported</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">75%</span>
                <span class="stat-label">Satisfaction</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">6+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Availability</span>
              </div>
            </div>

            <div class="response-note">
              <i class="fas fa-comment-dots"></i>
              <p>Quickest response on WhatsApp - usually within 1-2 hours</p>
            </div>
          </div>

          <!-- Call-to-Action Card -->
          <div class="cta-card">
            <h3>Ready to Grow Your Store?</h3>
            <p>Let's discuss how I can help you achieve:</p>

            <ul class="benefits-list">
              <li>
                <i class="fas fa-check-circle"></i> Increase conversion rates
              </li>
              <li><i class="fas fa-check-circle"></i> Streamline operations</li>
              <li>
                <i class="fas fa-check-circle"></i> Improve customer
                satisfaction
              </li>
              <li>
                <i class="fas fa-check-circle"></i> Reduce operational costs
              </li>
              <li><i class="fas fa-check-circle"></i> Scale your business</li>
            </ul>

            <div class="cta-buttons-vertical">
              <a
                href="https://wa.me/2347035451100"
                class="primary-btn"
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i> Schedule a Call
              </a>

              <a href="resume.html" class="outline-btn" target="_blank">
                <i class="fas fa-file-alt"></i> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
};
connect();
