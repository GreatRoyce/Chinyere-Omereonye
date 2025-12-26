// // Toggle dropdowns on mobile
// const dropdowns = document.querySelectorAll(".dropdown");

// dropdowns.forEach((dropdown) => {
//   const toggle = dropdown.querySelector(".dropdown-toggle");
//   const menu = dropdown.querySelector(".dropdown-menu");

//   toggle.addEventListener("click", (e) => {
//     if (window.innerWidth <= 768) {
//       e.preventDefault();
//       // Close other open dropdowns
//       dropdowns.forEach((otherDropdown) => {
//         if (
//           otherDropdown !== dropdown &&
//           otherDropdown.classList.contains("active")
//         ) {
//           otherDropdown.classList.remove("active");
//           otherDropdown
//             .querySelector(".dropdown-toggle")
//             .setAttribute("aria-expanded", "false");
//         }
//       });

//       // Toggle current dropdown
//       dropdown.classList.toggle("active");
//       toggle.setAttribute(
//         "aria-expanded",
//         dropdown.classList.contains("active")
//       );
//     }
//   });
// });

// // Close dropdowns when clicking outside
// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".dropdown") && window.innerWidth <= 768) {
//     dropdowns.forEach((dropdown) => {
//       dropdown.classList.remove("active");
//       dropdown
//         .querySelector(".dropdown-toggle")
//         .setAttribute("aria-expanded", "false");
//     });
//   }
// });

// // Close dropdowns on escape key
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && window.innerWidth <= 768) {
//     dropdowns.forEach((dropdown) => {
//       dropdown.classList.remove("active");
//       dropdown
//         .querySelector(".dropdown-toggle")
//         .setAttribute("aria-expanded", "false");
//     });
//   }
// });

// const services = [
//   {
//     id: 1,
//     title: "E-commerce Operations & Platform Management",
//     list: [
//       { id: 1, li: "Product Listing & Optimization" },
//       { id: 2, li: "Inventory & Stock Management" },
//       { id: 3, li: "Basic Store Audits" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Order Fulfillment & Logistics",
//     list: [
//       { id: 1, li: "End-to-End Order Processing" },
//       { id: 2, li: "Shipping & Tracking Management" },
//       { id: 3, li: "Returns, Exchanges, & Refunds (RMA)" },
//       { id: 4, li: "Dispute & Chargeback Resolution (High-Value)" },
//       { id: 5, li: "Resolution Center and Klarna/Afterpay portals" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Customer Support & Service",
//     list: [
//       { id: 1, li: "Multi-Channel Helpdesk Management" },
//       { id: 2, li: "Reamaze Automation Setup" },
//       { id: 3, li: "Live Chat Support" },
//       { id: 4, li: "Proactive Customer Communication" },
//     ],
//   },
// ];

// function renderServices() {
//   const servicesContainer = document.getElementById("services");
//   const servicesHTML = services
//     .map(
//       (service) => `
//     <div class="service-card" data-id="${service.id}">
//       <h3>${service.title}</h3>
//       <ul>
//         ${service.list.map((item) => `<li>${item.li}</li>`).join("")}
//       </ul>
//     </div>
//   `
//     )
//     .join("");

//   servicesContainer.innerHTML = servicesHTML;
// }

// // Improved Typewriter effect with blinking cursor
// const text = "Chinyere Omereonye";
// const title = document.getElementById("hero-title");
// let i = 0;
// let isTyping = true;
// let cursorVisible = true;

// function typeWriter() {
//   if (i < text.length) {
//     title.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
//     i++;
//     setTimeout(typeWriter, 150); // Speed: 150ms per character
//   } else {
//     // Once typing is complete, keep blinking cursor
//     isTyping = false;
//     blinkCursor();
//   }
// }

// function blinkCursor() {
//   const cursor = title.querySelector(".cursor");
//   if (cursor) {
//     cursorVisible = !cursorVisible;
//     cursor.style.opacity = cursorVisible ? "1" : "0";
//     setTimeout(blinkCursor, 500); // Blink every 500ms
//   }
// }

// // Initialize everything when page loads
// function init() {
//   typeWriter();
//   renderServices();

//   // Add fade-in animation to service cards
//   setTimeout(() => {
//     const cards = document.querySelectorAll(".service-card");
//     cards.forEach((card, index) => {
//       setTimeout(() => {
//         card.style.opacity = "1";
//         card.style.transform = "translateY(0)";
//       }, index * 200);
//     });
//   }, 500);

//   // Add initial styles for animation
//   document.querySelectorAll(".service-card").forEach((card) => {
//     card.style.opacity = "0";
//     card.style.transform = "translateY(20px)";
//     card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
//   });
// }

// // Use DOMContentLoaded instead of window.onload for faster loading
// document.addEventListener("DOMContentLoaded", init);

// // Also trigger on window load for safety
// window.addEventListener("load", init);


// document.getElementById('contactForm')?.addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   // Get form values
//   const name = this.querySelector('input[type="text"]').value;
//   const email = this.querySelector('input[type="email"]').value;
//   const service = this.querySelector('select').value;
//   const message = this.querySelector('textarea').value;
  
//   // Create mailto link (for now - you can replace with actual form submission)
//   const subject = `New Contact: ${service} - ${name}`;
//   const body = `Name: ${name}%0AEmail: ${email}%0AService Interest: ${service}%0A%0AMessage:%0A${message}`;
  
//   window.location.href = `mailto:omereonyechinyere@yahoo.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  
//   // Optional: Show success message
//   const submitBtn = this.querySelector('.submit-btn');
//   const originalText = submitBtn.innerHTML;
//   submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
//   submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
  
//   setTimeout(() => {
//     submitBtn.innerHTML = originalText;
//     submitBtn.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
//     this.reset();
//   }, 3000);
// });


  
      // Initialize when DOM is loaded
      document.addEventListener("DOMContentLoaded", function () {
        // Navigation scroll effect
        const navbar = document.getElementById("navbar");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        });

        // Mobile Navigation
        const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
        const navLinks = document.querySelector(".nav-links");
        const dropdowns = document.querySelectorAll(".dropdown");

        mobileMenuToggle?.addEventListener("click", () => {
          navLinks.classList.toggle("active");
          const icon = mobileMenuToggle.querySelector("i");
          icon.classList.toggle("fa-bars");
          icon.classList.toggle("fa-times");
        });

        // Close mobile menu when clicking outside
        document.addEventListener("click", (e) => {
          if (
            !e.target.closest(".nav-links") &&
            !e.target.closest(".mobile-menu-toggle")
          ) {
            navLinks.classList.remove("active");
            const icon = mobileMenuToggle?.querySelector("i");
            if (icon) {
              icon.classList.add("fa-bars");
              icon.classList.remove("fa-times");
            }
          }
        });

        // Toggle dropdowns on mobile
        dropdowns.forEach((dropdown) => {
          const toggle = dropdown.querySelector(".dropdown-toggle");

          toggle.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
              e.preventDefault();
              e.stopPropagation();

              // Close other dropdowns
              dropdowns.forEach((otherDropdown) => {
                if (
                  otherDropdown !== dropdown &&
                  otherDropdown.classList.contains("active")
                ) {
                  otherDropdown.classList.remove("active");
                }
              });

              // Toggle current dropdown
              dropdown.classList.toggle("active");
            }
          });
        });

        // Close dropdowns when clicking outside on mobile
        document.addEventListener("click", (e) => {
          if (!e.target.closest(".dropdown") && window.innerWidth <= 768) {
            dropdowns.forEach((dropdown) => {
              dropdown.classList.remove("active");
            });
          }
        });

        // Services data
        const services = [
          {
            id: 1,
            title: "E-commerce Operations & Platform Management",
            list: [
              "Product Listing & Optimization",
              "Inventory & Stock Management",
              "Basic Store Audits",
            ],
          },
          {
            id: 2,
            title: "Order Fulfillment & Logistics",
            list: [
              "End-to-End Order Processing",
              "Shipping & Tracking Management",
              "Returns, Exchanges, & Refunds (RMA)",
              "Dispute & Chargeback Resolution",
              "Resolution Center and Klarna/Afterpay portals",
            ],
          },
          {
            id: 3,
            title: "Customer Support & Service",
            list: [
              "Multi-Channel Helpdesk Management",
              "Reamaze Automation Setup",
              "Live Chat Support",
              "Proactive Customer Communication",
            ],
          },
        ];

        // Render services
        function renderServices() {
          const servicesContainer = document.querySelector(".services-grid");
          if (!servicesContainer) return;

          const servicesHTML = services
            .map(
              (service) => `
            <div class="service-card animate-fade-in-up">
              <h3>${service.title}</h3>
              <ul>
                ${service.list.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("");

          servicesContainer.innerHTML = servicesHTML;
        }

        // Typewriter effect
        const text = "Chinyere Omereonye";
        const title = document.getElementById("hero-title");
        let i = 0;
        let blinkTimer;
        let blinkCounter = 0;

        function typeWriter() {
          if (i < text.length) {
            title.innerHTML =
              text.substring(0, i + 1) + '<span class="cursor"></span>';
            i++;
            setTimeout(typeWriter, 150);
          } else {
            // Start blinking process
            blinkCursorAndHide();
          }
        }

        function blinkCursorAndHide() {
          const cursor = title.querySelector(".cursor");
          if (!cursor) return;

          blinkCounter++;

          if (blinkCounter <= 6) {
            cursor.style.opacity = cursor.style.opacity === "1" ? "0" : "1";
            setTimeout(blinkCursorAndHide, 200);
          } else {
            cursor.style.display = "none";
          }
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              // Close mobile menu if open
              navLinks.classList.remove("active");
              const icon = mobileMenuToggle?.querySelector("i");
              if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
              }

              window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
              });
            }
          });
        });

        // Initialize everything
        typeWriter();
        renderServices();

        // Animate elements on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up");
            }
          });
        }, observerOptions);

        // Observe elements for animation
        document
          .querySelectorAll(".service-card, .expertise-item, .testimonial-card")
          .forEach((el) => {
            observer.observe(el);
          });
      });
    