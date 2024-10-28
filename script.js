// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle FAQ Answers
document.querySelectorAll('.faq-item h4').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Detect Device and Update Download Links
const userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
    document.querySelector('.download-buttons .app-store').style.display = 'none';
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.querySelector('.download-buttons .google-play').style.display = 'none';
}

// Scroll-Based Animation
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing after animation plays
        }
    });
}, { threshold: 0.1 });

hiddenElements.forEach(element => {
    observer.observe(element);
});
