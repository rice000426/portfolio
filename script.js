window.addEventListener('scroll', () => {
  const nav = document.querySelector('header');
  const skillsSec = document.getElementById('skillsSec');

  if (!skillsSec) return;

  const rect = skillsSec.getBoundingClientRect();
  const navHeight = nav.offsetHeight;

  if (rect.top <= navHeight && rect.bottom >= navHeight) {
    nav.classList.add('white-text');
  } else {
    nav.classList.remove('white-text');
  }
});

const fadeElems = document.querySelectorAll('.fade-in');

const showOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
};

const observer = new IntersectionObserver(showOnScroll, {
  threshold: 0.2
});

fadeElems.forEach(elem => {
  observer.observe(elem);
});

const loading = document.getElementById('loading');

window.onload = function() {
  setTimeout(() => {
    loading.classList.add('loaded');
  }, 2000); 
};