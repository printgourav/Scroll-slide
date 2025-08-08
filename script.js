  const slideIns = document.querySelectorAll('.slide-in');
  const triggerOffset = 400;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    slideIns.forEach((el) => {
      const elementTop = el.offsetTop;
      const distance = elementTop - scrollY;
      
      if (distance <= triggerOffset && !el.classList.contains('show')) {
        el.classList.add('active');
      }
    });
   });
