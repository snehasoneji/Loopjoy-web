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
   
    const dots = document.querySelectorAll('.dot');
    const items = document.querySelectorAll('.carousel-item');
    
   
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            
           
            dots.forEach(d => d.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));
            
          
            this.classList.add('active');
            items[index].classList.add('active');
        });
    });
    
   
    let currentIndex = 0;
    setInterval(function() {
        currentIndex = (currentIndex + 1) % items.length;
        
       
        dots.forEach(d => d.classList.remove('active'));
        items.forEach(item => item.classList.remove('active'));
        
       
        dots[currentIndex].classList.add('active');
        items[currentIndex].classList.add('active');
    }, 2000);
});


// stepper


const totalSteps = 4;
let currentStep = 1;

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    updateStepper();
    updateStepContent();
  }
}

function updateStepper() {
  const stepperBar = document.getElementById('topStepperBar');
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
  stepperBar.style.width = progressPercent + '%';
}

function updateStepContent() {
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    step.style.display = index === (currentStep - 1) ? 'block' : 'none';
  });
}

// Initialize first step display
updateStepContent();
