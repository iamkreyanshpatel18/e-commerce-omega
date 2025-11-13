document.querySelectorAll('.scrollbox').forEach(scrollbox => {
  const scro = scrollbox.querySelector('.images');
  const nextBtn = scrollbox.querySelector('.arrow-btn.right');
  const prevBtn = scrollbox.querySelector('.arrow-btn.left');

  let currentIndex = 0;
  const totalImages = scro.children.length;
  const visible = 4;

  function updateTransform() {
    const cardWidth = scro.children[0].offsetWidth + 15;
    scro.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const cardWidth = scro.children[0].offsetWidth + 15;
    currentIndex++;

    scro.style.transition = "transform 0.6s ease";
    scro.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    if (currentIndex >= totalImages - visible) {
      setTimeout(() => {
        scro.style.transition = "none";
        currentIndex = 0;
        updateTransform();
      }, 600);
    }
  });

  prevBtn.addEventListener("click", () => {
    const cardWidth = scro.children[0].offsetWidth + 15;
    if (currentIndex <= 0) {
      scro.style.transition = "none";
      currentIndex = totalImages - visible;
      updateTransform();
      setTimeout(() => {
        scro.style.transition = "transform 0.6s ease";
        currentIndex--;
        updateTransform();
      }, 20);
    } else {
      currentIndex--;
      scro.style.transition = "transform 0.6s ease";
      updateTransform();
    }
  });

  window.addEventListener("resize", updateTransform);
});
