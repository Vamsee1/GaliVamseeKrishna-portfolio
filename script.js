function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
  }
  
  function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
  }
  
  // Typewriter Effect
  const texts = [
    "DEVELOPER",
    "DESIGNER",
    "INNOVATOR"
  ];
  
  let speed = 100;
  const textElements = document.querySelector(".typewriter-text");
  
  let textIndex = 0;
  let charcterIndex = 0;
  
  function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, 1000);
    }
  }
  
  function eraseText() {
    if (textElements.innerHTML.length > 0) {
      textElements.innerHTML = textElements.innerHTML.slice(0, -1);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500);
    }
  }

  //about
  document.querySelector('.download-btn').addEventListener('click', function() {
    alert("Your CV is being downloaded!");
  });
  //Contact
  document.querySelector('.contact-form button').addEventListener('click', function() {
    alert("Your message has been sent!");
  });
  
  window.onload = typeWriter;

  // Project Section

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projectsContainer');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Scroll amount for each button click (width of one project card plus gap)
    const scrollAmount = 320; // 300px card width + 20px gap

    scrollLeftBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowRight') {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});

// Timeline Section
// Timeline Section
 // Intersection Observer for scroll animations
 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, {
  threshold: 0.1
});

// Observe all timeline items
document.querySelectorAll('.timeline-item').forEach((item) => {
  observer.observe(item);
});

// Add touch/click ripple effect
document.querySelectorAll('.timeline-content').forEach(content => {
  content.addEventListener('click', function(e) {
      this.classList.add('ripple');
      setTimeout(() => {
          this.classList.remove('ripple');
      }, 500);
  });
});

// Arrow Functions
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const scrollUp = document.querySelector('.scroll-up');
  const scrollDown = document.querySelector('.scroll-down');

  // Initially hide the scroll up button
  scrollUp.style.display = 'none';

  // Scroll Functions
  window.scrollToTop = function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  window.scrollToBottom = function() {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
      });
  };

  // Show/Hide scroll arrows based on scroll position
  window.addEventListener('scroll', function() {
      // Get scroll position and page heights
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show/hide up arrow
      if (scrollPosition > windowHeight * 0.3) {
          scrollUp.style.display = 'flex';
      } else {
          scrollUp.style.display = 'none';
      }
      
      // Show/hide down arrow
      if (scrollPosition + windowHeight >= documentHeight - 100) {
          scrollDown.style.display = 'none';
      } else {
          scrollDown.style.display = 'flex';
      }
  });

  // Add hover effects
  [scrollUp, scrollDown].forEach(arrow => {
      arrow.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.1)';
      });
      
      arrow.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
      });
  });
});

// Project Section
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
      // Core settings
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      
      // Auto-scrolling
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
      },
      
      // Speed and effects
      speed: 800,
      effect: 'slide',
      
      // Pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
      },
      
      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      
      // Responsive breakpoints
      breakpoints: {
          // Mobile
          320: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          // Tablet
          768: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          // Desktop
          1024: {
              slidesPerView: 3,
              spaceBetween: 40
          }
      }
  });
});

// Certificate Section
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const downloadBtn = document.getElementById('downloadBtn');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    // Open modal when view button is clicked
    viewButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get certificate image path from data attribute
        const certificatePath = this.getAttribute('data-certificate');
        
        // Set modal image source
        modalImage.src = certificatePath;
        
        // Set download button href
        downloadBtn.setAttribute('href', certificatePath);
        
        // Display modal
        modal.style.display = 'block';
        
        // Prevent scrolling on body
        document.body.style.overflow = 'hidden';
      });
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
      }
    });
  });






  