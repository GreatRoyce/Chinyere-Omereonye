const services = () => {
  let servicesSection = document.querySelector(".service-section");
  servicesSection.innerHTML = `
       
  <div class="section-header">
        <h2>My Services</h2>
        <p>
          Comprehensive e-commerce solutions tailored to your business needs
        </p>
      </div>
      <div class="services-grid">
        <!-- Services will be inserted by JavaScript -->
      </div>
  
  `;
};

services();
