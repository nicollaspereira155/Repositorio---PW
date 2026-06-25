
// navbar

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach((section) => {
  observer.observe(section);
});


// botão voltar ao topo

const voltarBtn = document.querySelector("#btn-voltar");

voltarBtn.onclick = () =>
    document.documentElement.scroll({
        top: 0,
        behavior: "smooth"
    });
    window.onscroll = () => {
        voltarBtn.hidden = !(document.documentElement.scrollTop > 200)
}
