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


document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.scroll-box-2');
  if (box && window.innerWidth <= 767) {
    let index = 0;
    const images = box.querySelectorAll('img');
    const total = images.length;

    setInterval(() => {
      index = (index + 1) % total;
      box.scrollTo({
        left: box.offsetWidth * index,
        behavior: 'smooth'
      });
    }, 3000); 
  }
});


// window.addEventListener('load', function () {
//   const carousel = document.querySelector('.idea-grid-desktop');

//   if (window.innerWidth <= 768 && carousel) {
//     let scrollDirection = 1;
//     const speed = 1.5; 
//     let lastTime = null;

//     function autoScroll(time) {
//       if (lastTime === null) lastTime = time;
//       const delta = time - lastTime;
//       lastTime = time;

//       carousel.scrollLeft += scrollDirection * speed * (delta / 16.67);

      
//       if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1) {
//         scrollDirection = -1;
//       } else if (carousel.scrollLeft <= 1) {
//         scrollDirection = 1;
//       }

//       requestAnimationFrame(autoScroll);
//     }

//     requestAnimationFrame(autoScroll);
//   }
// });


function waitForImages(callback) {
  const images = document.querySelectorAll('.idea-card img');
  let loadedCount = 0;

  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener('load', () => {
        loadedCount++;
        if (loadedCount === images.length) callback();
      });
    }
  });

  if (loadedCount === images.length) callback();
}

window.addEventListener('load', function () {
  const carousel = document.querySelector('.idea-grid-desktop');

  if (window.innerWidth <= 768 && carousel) {
    waitForImages(() => {
      let scrollDirection = 1;
      const speed = 1.5;
      let lastTime = null;

      function autoScroll(time) {
        if (lastTime === null) lastTime = time;
        const delta = time - lastTime;
        lastTime = time;

        carousel.scrollLeft += scrollDirection * speed * (delta / 16.67);

        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1) {
          scrollDirection = -1;
        } else if (carousel.scrollLeft <= 1) {
          scrollDirection = 1;
        }

        requestAnimationFrame(autoScroll);
      }

      requestAnimationFrame(autoScroll);
    });
  }
});
