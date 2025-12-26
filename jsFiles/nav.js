const nav = () => {
  let navigation = document.querySelector(".nav-container");
  navigation.innerHTML = `
   <div class="nav-content">
        <a
          style="
            height: 40px;
            width: 300px;
            margin-left: -50px;
            background-image: url(assets/C.png);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
          "
          href="#"
          class="logo"
        >
        </a>

        <button class="mobile-menu-toggle" aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </button>

        <nav>
          <ul class="nav-links">
            <!-- About -->
            <li class="dropdown">
              <button
                class="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#core-values">Core Values</a></li>
              </ul>
            </li>

            <!-- Services -->
            <li class="dropdown">
              <button
                class="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#services">Services</a></li>
                <li><a href="#platforms">Platforms I Work With</a></li>
              </ul>
            </li>

            <!-- Work -->
            <li class="dropdown">
              <button
                class="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Work
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#samples">Samples</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </li>

            <!-- Contact -->
            <li>
              <a href="#contact" class="contact-btn">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
 
  `;
};
nav();
