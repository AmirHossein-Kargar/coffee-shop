let nav = document.querySelector(".header .navbar");

document.querySelector('#menu').addEventListener('click', () => {
    nav.classList.add('active')
})
document.querySelector('#close').addEventListener('click', () => {
    nav.classList.remove('active')
})

// ? mouse move
document.addEventListener("mousemove", move);

function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerWidth - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

// ? Animation
gsap.from(".logo", { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from(".navbar .nav_item", {
  opacity: 0,
  duration: 1,
  delay: 2 - 1,
  y: 30,
  stagger: 0.2,
});

gsap.from(".title", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from(".description", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from(".btn", { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from(".image", { opacity: 0, duration: 1, delay: 2.6, y: 30 });

// ! SPA ADDED
function router() {
  const routes = [
    { path: "/", view: () => console.log("dashboard page") },
    { path: "/about", view: () => console.log("about page") },
    { path: "/menu", view: () => console.log("menu page") },
    { path: "/contact", view: () => console.log("contact page") },
  ];

  const potentialRoutes = routes.map((item) => {
    return { route: item, isMatch: location.pathname == item.path };
  });
  //   console.log(potentialRoutes);

  let match = potentialRoutes.find((route) => route.isMatch);
  if (!match) {
    match = {
      route: { path: "/404", view: () => console.log("not found page") },
      isMatch: true,
    };
  }
  console.log(match.route.view());
}

// ? push user to new URL
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener('popstate', router)

// ? when DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
