fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const mainContainer = document.querySelector(".product-card");
    products.forEach((products) => {
      const card = document.createElement("div");
      card.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
      card.innerHTML = `
        <div class="card h-100">
          <img src="${products.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${products.title}</h5>
            <p class="card-text">${products.description.slice(0, 100)}...</p>
            <p class="card-text">$ ${products.price}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      `;
      mainContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
