const progress = document.querySelector('.scroll-progress');
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

function updateProgress(){
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Gentle pointer parallax on the hero artwork; disabled for touch/reduced motion. */
const art = document.querySelector('.hero-art');
if (art && matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches) {
  art.addEventListener('pointermove', e => {
    const r = art.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    art.style.setProperty('--mx', `${x * 12}px`);
    art.style.setProperty('--my', `${y * 12}px`);
    art.querySelectorAll('.art-orbit').forEach((el,i) => {
      el.style.translate = `${x * (i+1) * 10}px ${y * (i+1) * 10}px`;
    });
  });
  art.addEventListener('pointerleave', () => art.querySelectorAll('.art-orbit').forEach(el => el.style.translate = '0 0'));
}

/* Project preview modal. Add a matching image file to the path in data-image to show it. */
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalImage = document.querySelector('.modal-image');
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
document.querySelectorAll('.work-card').forEach(card => card.addEventListener('click', () => {
  modalTitle.textContent = card.dataset.title;
  modalDescription.textContent = card.dataset.description;
  const path = card.dataset.image;
  modalImage.style.backgroundImage = `linear-gradient(135deg,#263e4b,#718c91)`;
  if(path) {
    const img = new Image();
    img.onload = () => { modalImage.style.backgroundImage = `url("${path}")`; };
    img.src = path;
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}));
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown',e => { if(e.key === 'Escape') closeModal(); });
