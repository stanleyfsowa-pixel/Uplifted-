// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Reviews carousel functionality
let currentReview = 0;
const reviewCards = document.querySelectorAll('.review-card');
const totalReviews = reviewCards.length;

function showReview(index) {
    reviewCards.forEach(card => card.classList.remove('active'));
    reviewCards[index].classList.add('active');
}

function nextReview() {
    currentReview = (currentReview + 1) % totalReviews;
    showReview(currentReview);
}

// Auto-rotate reviews every 5 seconds
setInterval(nextReview, 5000);


// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const contactData = Object.fromEntries(formData);
    
    // Format the contact message
    const contactDetails = `
        New Contact Message:
        
        Name: ${contactData.name}
        Email: ${contactData.email}
        Phone: ${contactData.phone || 'Not provided'}
        Message: ${contactData.message}
    `;
    
    // Create email mailto link
    const emailSubject = encodeURIComponent('Website Contact Form - Uplifted Beauty Boutique');
    const emailBody = encodeURIComponent(contactDetails);
    const mailtoLink = `mailto:K10dandra@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your message has been prepared! Please send the email that just opened.');
    
    // Reset form
    this.reset();
});

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt;
            
            // Create modal for image viewing
            const imageModal = document.createElement('div');
            imageModal.className = 'image-modal';
            imageModal.innerHTML = `
                <div class="image-modal-content">
                    <span class="image-modal-close">&times;</span>
                    <img src="${imgSrc}" alt="${imgAlt}">
                </div>
            `;
            
            document.body.appendChild(imageModal);
            imageModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Close modal functionality
            const closeBtn = imageModal.querySelector('.image-modal-close');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(imageModal);
                document.body.style.overflow = 'auto';
            });
            
            imageModal.addEventListener('click', function(e) {
                if (e.target === imageModal) {
                    document.body.removeChild(imageModal);
                    document.body.style.overflow = 'auto';
                }
            });
        });
    });
});

// Add CSS for image modal
const imageModalCSS = `
.image-modal {
    display: none;
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    backdrop-filter: blur(5px);
}

.image-modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    padding: 2rem;
}

.image-modal-content img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.image-modal-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
    z-index: 3001;
    transition: color 0.3s ease;
}

.image-modal-close:hover {
    color: #ccc;
}

@media (max-width: 768px) {
    .image-modal-content {
        padding: 1rem;
    }
    
    .image-modal-close {
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
    }
}
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = imageModalCSS;
document.head.appendChild(style);

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .team-member, .review-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Add animation CSS
const animationCSS = `
.service-card,
.team-member {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.service-card.animate,
.team-member.animate {
    opacity: 1;
    transform: translateY(0);
}
`;

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = animationCSS;
document.head.appendChild(animationStyle);

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check
animateOnScroll();