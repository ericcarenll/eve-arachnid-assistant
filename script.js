document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('.scene');
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('pointermove', (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 12;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 10;
    scene.style.transform = `perspective(1200px) rotateX(${(-mouseY).toFixed(2)}deg) rotateY(${mouseX.toFixed(2)}deg)`;
  });

  window.addEventListener('pointerleave', () => {
    scene.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  });
});
