// Initialize Swiper
const swiper = new Swiper('.main-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Gallery thumbnails click
document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        swiper.slideTo(parseInt(index) + 1);
    });
});

// Tab navigation
document.querySelectorAll('.tab-nav-item').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-nav-item').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show corresponding tab content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// FAQ accordion
document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', function() {
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('rotate-180');
    });
});

// Filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        const parentSet = this.parentElement.querySelectorAll('.filter-button');
        parentSet.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});