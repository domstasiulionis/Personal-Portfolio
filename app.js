// Intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showInter(entry);
    }
  });
});

const showInter = (el) => {
  el.target.classList.add("show");
};

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
