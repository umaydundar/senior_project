// Init animations
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
