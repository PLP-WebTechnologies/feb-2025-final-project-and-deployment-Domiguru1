document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.querySelector('i').classList.toggle('fa-times');
                menuToggle.querySelector('i').classList.toggle('fa-bars');
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            const messageElement = document.getElementById('newsletter-message');
            
            // Simple validation
            if (!email || !email.includes('@')) {
                messageElement.textContent = 'Please enter a valid email address.';
                messageElement.className = 'message error';
                return;
            }
            
            // Simulate form submission
            setTimeout(() => {
                messageElement.textContent = 'Thank you for subscribing!';
                messageElement.className = 'message success';
                newsletterForm.reset();
                
                // Reset message after 5 seconds
                setTimeout(() => {
                    messageElement.textContent = '';
                    messageElement.className = 'message';
                }, 5000);
            }, 1000);
        });
    }
    
    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Reset error messages
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');
            
            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('name-error').textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email');
            if (!email.value.trim()) {
                document.getElementById('email-error').textContent = 'Email is required';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                isValid = false;
            }
            
            // Validate subject
            const subject = document.getElementById('subject');
            if (!subject.value.trim()) {
                document.getElementById('subject-error').textContent = 'Subject is required';
                isValid = false;
            }
            
            // Validate message
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('message-error').textContent = 'Message is required';
                isValid = false;
            }
            
            if (isValid) {
                const formMessage = document.getElementById('form-message');
                
                // Simulate form submission
                setTimeout(() => {
                    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                    formMessage.className = 'message success';
                    contactForm.reset();
                    
                    // Reset message after 5 seconds
                    setTimeout(() => {
                        formMessage.textContent = '';
                        formMessage.className = 'message';
                    }, 5000);
                }, 1000);
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to current section in viewport
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-list a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});