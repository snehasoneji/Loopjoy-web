function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show-menu");
}


const buttons = document.querySelectorAll('.slider-button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.scroll-box').forEach((box) => {
    let scrollStep = 1;
    let direction = 1;

    function autoScroll() {
      box.scrollTop += scrollStep * direction;

      if (box.scrollTop + box.clientHeight >= box.scrollHeight || box.scrollTop <= 0) {
        direction *= -1;
      }

      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  });
});


  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');

    if (!slider) return;

    let scrollAmount = 0;
    let scrollSpeed = 1; 
    let delay = 20; 

    function autoScroll() {
      scrollAmount += scrollSpeed;
      slider.scrollLeft += scrollSpeed;

      if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
        slider.scrollLeft = 0; 
        scrollAmount = 0;
      }
    }

    let scrollInterval = setInterval(autoScroll, delay);

   
    slider.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    slider.addEventListener('mouseleave', () => {
      scrollInterval = setInterval(autoScroll, delay);
    });
  });


  // folder-card 

  
  document.addEventListener("DOMContentLoaded", function () {
    const folderCards = document.querySelectorAll(".folder-card");

    folderCards.forEach((card, index) => {
    
      card.classList.add("auto-scroll");

      
      const wrapper = document.createElement("div");
      wrapper.classList.add("scroll-wrapper");

      
      const images = Array.from(card.querySelectorAll("img"));
      images.forEach(img => {
        const clone = img.cloneNode(true); 
        wrapper.appendChild(img);
        wrapper.appendChild(clone);
      });

      
      card.innerHTML = '';
      card.appendChild(wrapper);

      
      if (index === 1) {
        card.classList.add("right-scroll");
      }
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    // Get all dots and carousel items
    const dots = document.querySelectorAll('.dot');
    const items = document.querySelectorAll('.carousel-item');
    
    // Add click event listener to each dot
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            
            // Remove active class from all dots and items
            dots.forEach(d => d.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));
            
            // Add active class to current dot and item
            this.classList.add('active');
            items[index].classList.add('active');
        });
    });
    
    // Optional: Auto-rotate carousel every 5 seconds
    let currentIndex = 0;
    setInterval(function() {
        currentIndex = (currentIndex + 1) % items.length;
        
        // Remove active class from all dots and items
        dots.forEach(d => d.classList.remove('active'));
        items.forEach(item => item.classList.remove('active'));
        
        // Add active class to current dot and item
        dots[currentIndex].classList.add('active');
        items[currentIndex].classList.add('active');
    }, 2000);
});
