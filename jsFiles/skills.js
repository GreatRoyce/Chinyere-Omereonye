const skillsandcore = () =>{
    let snc = document.querySelector(".skills-section");
    snc.innerHTML= `

    <div class="section-header">
        <h2>Skills & Core Values</h2>
        <p>
          Technical expertise and professional principles that drive success
        </p>
      </div>
      <div class="skills-grid">
        <div class="skills-column">
          <h2>Skills</h2>
          <ul class="skills-list">
            <li class="skill"><span class="core">Shopify</span></li>
            <li class="skill"><span class="core">Data Entry</span></li>
            <li class="skill"><span class="core">Order Fulfillment</span></li>
            <li class="skill"><span class="core">Dispute Resolution</span></li>
            <li class="skill">
              <span class="core">Administrative Support</span>
            </li>
            <li class="skill"><span class="core">Virtual Assistant</span></li>
            <li class="skill"><span class="core">Email Handling</span></li>
            <li class="skill"><span class="core">Customer Support</span></li>
            <li class="skill">
              <span class="core">Inventory Management</span>
            </li>
            <li class="skill">
              <span class="core">E-commerce Specialist</span>
            </li>
            <li class="skill"><span class="core">Executive Assistant</span></li>
            <li class="skill"><span class="core">Paypal</span></li>
          </ul>
        </div>

        <div class="skills-column" id="core-values">
          <h2>Core Values</h2>
          <ul class="skills-list">
            <li class="skill">
              <span class="core">Precision & Accuracy (Data Integrity)</span>
            </li>
            <li class="skill">
              <span class="core">Proactive Ownership (Problem Prevention)</span>
            </li>
            <li class="skill"><span class="core">Revenue Protection</span></li>
            <li class="skill">
              <span class="core">Clear & Timely Communication</span>
            </li>
            <li class="skill">
              <span class="core">Adaptability & Learning</span>
            </li>
            <li class="skill"><span class="core">Accountability</span></li>
            <li class="skill">
              <span class="core">Consistency & Process Discipline</span>
            </li>
            <li class="skill">
              <span class="core"
                >Continuous Optimization (Efficiency Focus)</span
              >
            </li>
            <li class="skill">
              <span class="core">Insight-Driven Decisions</span>
            </li>
            <li class="skill">
              <span class="core">Risk Awareness & Compliance</span>
            </li>
            <li class="skill">
              <span class="core">Customer-Centric Execution</span>
            </li>
            <li class="skill">
              <span class="core"
                >Ethical Judgment & Professional Integrity</span
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section" id="testimonials">
      <div class="section-header">
        <h2>Client Testimonials</h2>
        <p>What my clients say about working with me</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p>
            "Chinyere transformed our Shopify store! Her expertise in e-commerce
            and customer support boosted our sales and improved our customer
            satisfaction. Highly recommend!"
          </p>
          <h4>- Alex Johnson, CEO of TrendyTech</h4>
        </div>
        <div class="testimonial-card">
          <p>
            "Working with Chinyere was a game-changer for our online business.
            Her attention to detail and proactive approach ensured smooth
            operations and happy customers."
          </p>
          <h4>- Maria Rodriguez, Founder of StyleHive</h4>
        </div>
        <div class="testimonial-card">
          <p>
            "Chinyere managed our PayPal and Klarna disputes, implementing a
            system that helped us successfully overturn costly chargebacks."
          </p>
          <h4>- Abdul</h4>
        </div>
      </div>
    
    `
}
skillsandcore();