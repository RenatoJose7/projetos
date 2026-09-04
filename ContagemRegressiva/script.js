const slides = document.querySelectorAll('.slide');
const slideIndex = document.querySelector('.slide-index');
let activeSlide = 0;

if (slides.length) {
  setInterval(() => {
    slides[activeSlide].classList.remove('active');
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add('active');
    slideIndex.textContent = String(activeSlide + 1).padStart(2, '0');
  }, 4200);
}

const targetDate = new Date('2028-07-14T00:00:00-07:00');
const units = {
  years: document.querySelector('#years'),
  days: document.querySelector('#days'),
  hours: document.querySelector('#hours'),
  minutes: document.querySelector('#minutes'),
  seconds: document.querySelector('#seconds')
};

function updateCountdown() {
  const totalSeconds = Math.max(0, Math.floor((targetDate - new Date()) / 1000));
  const totalDays = Math.floor(totalSeconds / 86400);
  const years = Math.floor(totalDays / 365.2425);
  const days = totalDays - Math.floor(years * 365.2425);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  units.years.textContent = String(years).padStart(2, '0');
  units.days.textContent = String(days).padStart(3, '0');
  units.hours.textContent = String(hours).padStart(2, '0');
  units.minutes.textContent = String(minutes).padStart(2, '0');
  units.seconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
