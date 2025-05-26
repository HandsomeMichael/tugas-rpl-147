// Animated counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 10000;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Run when visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.5});

document.querySelectorAll('.stats-container').forEach(container => {
    observer.observe(container);
});