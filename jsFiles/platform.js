const platForms = () => {
    let platform = document.querySelector('.platforms-section');

    platform.innerHTML = `
<div class="section-header">
        <h2>Platforms I Work With</h2>
        <p>Experienced with leading e-commerce tools and platforms</p>
      </div>
      <div class="marquee-container">
        <div class="marquee-track">
          <!-- Original items -->
          <div
            class="platform-item"
            title="reamaze"
            style="background-image: url(assets/amaze.png)"
          ></div>
          <div
            class="platform-item"
            title="shopify"
            style="background-image: url(assets/shopify.png)"
          ></div>
          <div
            class="platform-item"
            title="klarna"
            style="background-image: url(assets/klarna.png)"
          ></div>
          <div
            class="platform-item"
            title="parcel"
            style="background-image: url(assets/parcel.png)"
          ></div>
          <div
            class="platform-item"
            title="paypal"
            style="background-image: url(assets/paypal.png)"
          ></div>
          <div
            class="platform-item"
            title="trello"
            style="background-image: url(assets/trello.png)"
          ></div>
          <!-- Duplicated items for seamless loop -->
          <div
            class="platform-item"
            title="reamaze"
            style="background-image: url(assets/amaze.png)"
          ></div>
          <div
            class="platform-item"
            title="shopify"
            style="background-image: url(assets/shopify.png)"
          ></div>
          <div
            class="platform-item"
            title="klarna"
            style="background-image: url(assets/klarna.png)"
          ></div>
          <div
            class="platform-item"
            title="parcel"
            style="background-image: url(assets/parcel.png)"
          ></div>
          <div
            class="platform-item"
            title="paypal"
            style="background-image: url(assets/paypal.png)"
          ></div>
          <div
            class="platform-item"
            title="trello"
            style="background-image: url(assets/trello.png)"
          ></div>
        </div>
      </div>
  
    
    
    `;
}

platForms()