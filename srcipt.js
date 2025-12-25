// Toggle dropdowns on mobile
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      // Close other open dropdowns
      dropdowns.forEach((otherDropdown) => {
        if (
          otherDropdown !== dropdown &&
          otherDropdown.classList.contains("active")
        ) {
          otherDropdown.classList.remove("active");
          otherDropdown
            .querySelector(".dropdown-toggle")
            .setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("active");
      toggle.setAttribute(
        "aria-expanded",
        dropdown.classList.contains("active")
      );
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown") && window.innerWidth <= 768) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown
        .querySelector(".dropdown-toggle")
        .setAttribute("aria-expanded", "false");
    });
  }
});

// Close dropdowns on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && window.innerWidth <= 768) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown
        .querySelector(".dropdown-toggle")
        .setAttribute("aria-expanded", "false");
    });
  }
});

const services = [
  {
    id: 1,
    title: "E-commerce Operations & Platform Management",
    list: [
      { id: 1, li: "Product Listing & Optimization" },
      { id: 2, li: "Inventory & Stock Management" },
      { id: 3, li: "Basic Store Audits" },
    ],
  },
  {
    id: 2,
    title: "Order Fulfillment & Logistics",
    list: [
      { id: 1, li: "End-to-End Order Processing" },
      { id: 2, li: "Shipping & Tracking Management" },
      { id: 3, li: "Returns, Exchanges, & Refunds (RMA)" },
      { id: 4, li: "Dispute & Chargeback Resolution (High-Value)" },
      { id: 5, li: "Resolution Center and Klarna/Afterpay portals" },
    ],
  },
  {
    id: 3,
    title: "Customer Support & Service",
    list: [
      { id: 1, li: "Multi-Channel Helpdesk Management" },
      { id: 2, li: "Reamaze Automation Setup" },
      { id: 3, li: "Live Chat Support" },
      { id: 4, li: "Proactive Customer Communication" },
    ],
  },
];

function renderServices() {
  const servicesContainer = document.getElementById("services");
  const servicesHTML = services
    .map(
      (service) => `
    <div class="service-card" data-id="${service.id}">
      <h3>${service.title}</h3>
      <ul>
        ${service.list.map((item) => `<li>${item.li}</li>`).join("")}
      </ul>
    </div>
  `
    )
    .join("");

  servicesContainer.innerHTML = servicesHTML;
}

// Improved Typewriter effect with blinking cursor
const text = "Chinyere Omereonye";
const title = document.getElementById("hero-title");
let i = 0;
let isTyping = true;
let cursorVisible = true;

function typeWriter() {
  if (i < text.length) {
    title.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
    i++;
    setTimeout(typeWriter, 150); // Speed: 150ms per character
  } else {
    // Once typing is complete, keep blinking cursor
    isTyping = false;
    blinkCursor();
  }
}

function blinkCursor() {
  const cursor = title.querySelector(".cursor");
  if (cursor) {
    cursorVisible = !cursorVisible;
    cursor.style.opacity = cursorVisible ? "1" : "0";
    setTimeout(blinkCursor, 500); // Blink every 500ms
  }
}

// Initialize everything when page loads
function init() {
  typeWriter();
  renderServices();

  // Add fade-in animation to service cards
  setTimeout(() => {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, 500);

  // Add initial styles for animation
  document.querySelectorAll(".service-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });
}

// Use DOMContentLoaded instead of window.onload for faster loading
document.addEventListener("DOMContentLoaded", init);

// Also trigger on window load for safety
window.addEventListener("load", init);


document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const service = this.querySelector('select').value;
  const message = this.querySelector('textarea').value;
  
  // Create mailto link (for now - you can replace with actual form submission)
  const subject = `New Contact: ${service} - ${name}`;
  const body = `Name: ${name}%0AEmail: ${email}%0AService Interest: ${service}%0A%0AMessage:%0A${message}`;
  
  window.location.href = `mailto:omereonyechinyere@yahoo.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  
  // Optional: Show success message
  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
  
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
    this.reset();
  }, 3000);
});