window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

const container = document.querySelector(".container");

for (let i = 0; i < 6; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = "https://source.unsplash.com/random/300x200";
  card.appendChild(img);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const h2 = document.createElement("h2");
  h2.textContent = "Card";
  cardContent.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = "Deskripsi singkat card";
  cardContent.appendChild(p);

  const button = document.createElement("a");
  button.classList.add("button");
  button.textContent = "Baca selengkapnya";
  button.href = "https://github.com/SanH16";
  cardContent.appendChild(button);

  card.appendChild(cardContent);
  container.appendChild(card);
}
