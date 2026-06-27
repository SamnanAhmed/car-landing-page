// Show Menu

const navmenu = document.getElementById('nav-menu'),
    navtoggle = document.getElementById('nav-toggle'),
    navclose = document.getElementById('nav-close');

if (navtoggle) {
    navtoggle.addEventListener('click', () => {
        navmenu.classList.add('show-menu');
    })
}

if (navclose) {
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu');
    })
}

// Remove show when any link is clicked (for mobile view)

const navlink = document.querySelectorAll('.nav-link');

const linkaction = () => {
    navmenu.classList.remove('show-menu');
}

navlink.forEach(element => element.addEventListener('click', linkaction));


// Swiper Home

const homeswiper = new Swiper('.home-swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
            return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
    },
    autoplay: {
        delay: 5000,
    }
});

// Change Background of header

const changeHeader = () => {
    const header = document.getElementById('header');
    // condtion using turnary operator
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', changeHeader);


//Show Scroll UP

const showScrollUp = () => {
    let scrollup = document.getElementById('scroll-up');
    this.scrollY >= 450 ? scrollup.classList.add('scroll-up-show') : scrollup.classList.remove('scroll-up-show');
}
window.addEventListener('scroll', showScrollUp);

// Active Section

const sections = document.querySelectorAll('section[id]');

const activeSection = () => {
    const scrolldown = window.scrollY;

    sections.forEach(element => {
        const sectionHeight = element.offsetHeight,
            sectionTop = element.offsetTop - 55,
            sectionId = element.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrolldown > sectionTop && scrolldown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        }
        else {
            sectionClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', activeSection);

// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: true, // Animation repeat
})

sr.reveal(`.home-bg`, { scale: 1.1, opacity: 1 });
sr.reveal(`.home-swiper`, { origin: 'right', distance: '300px', delay: 800 });
sr.reveal(`.home-data`, { origin: 'bottom', distance: '120px', delay: 1600 });
sr.reveal(`.swiper-pagination-bullet`, { origin: 'top', opacity: 0, delay: 1800 });
sr.reveal(`.home-btn`, { origin: 'top', delay: 2200 });
sr.reveal(`.about-data, .contact-content`, { origin: 'left' });
sr.reveal(`.about-video, .contact-img`, { origin: 'right' });
sr.reveal(`.models-card`, { interval: 100 });
sr.reveal(`.info-img`, { distance: '150px' });
sr.reveal(`.info-number`, { origin: 'bottom', delay: 800, distance: '80px' });
sr.reveal(`.info-group`, { interval: 100, delay: 1300 });
sr.reveal(`.footer-container`);