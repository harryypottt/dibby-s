// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Set active link and close mobile menu
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked <a>
        e.currentTarget.classList.add('active');
        
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open (using both systems for compatibility)
            document.querySelector('nav').classList.remove('active');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});


// Mobile menu toggle (alternative method - you might want to remove this if using hamburger)
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if(!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.menu-item, .service-card, .about-content');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .menu-item, .service-card, .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .menu-item.animate-in, .service-card.animate-in, .about-content.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .menu-item:nth-child(2) {
        transition-delay: 0.2s;
    }
    
    .menu-item:nth-child(3) {
        transition-delay: 0.4s;
    }
    
    .service-card:nth-child(2) {
        transition-delay: 0.2s;
    }
    
    .service-card:nth-child(3) {
        transition-delay: 0.4s;
    }
    
    /* Hamburger menu animation styles */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Form validation for future forms
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

/*
// Add to cart functionality
document.querySelectorAll('.btn[href="#order"]').forEach(button => {x
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const menuItem = this.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').textContent;
        const itemPrice = menuItem.querySelector('.price').textContent;
        
        // In a real implementation, this would add to a shopping cart
        alert(`Added ${itemName} (${itemPrice}) to your cart!`);
        
        // Animation feedback
        this.textContent = 'Added!';
        this.style.backgroundColor = 'green';
        
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = '';
        }, 1500);
    });
});
*/

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dibby\'s Wings website loaded successfully!');
});
 
 
 /* menu sorter*/
 function filterMenu(category) {
      const items = document.querySelectorAll('.menu-item');    
      const buttons = document.querySelectorAll('.filter-buttons button');

      // Remove active highlight
      buttons.forEach(btn => btn.classList.remove('active'));

      // Highlight selected button
      event.target.classList.add('active');

      // Filter logic
      items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
