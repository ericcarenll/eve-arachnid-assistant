document.addEventListener('DOMContentLoaded', () => {
  const screen = document.querySelector('.screen');
  const readout = document.querySelector('.readout-value');
  const bannerText = document.querySelector('.bottom-banner span');

  const values = [
    '[ 293.68.1 1 . 42 ]',
    '[ 294.13.8 4 . 21 ]',
    '[ 291.92.6 8 . 09 ]',
    '[ 292.48.9 1 . 35 ]'
  ];

  let index = 0;
  setInterval(() => {
    index = (index + 1) % values.length;
    readout.textContent = values[index];
  }, 2200);

  const labels = [
    'Connecting to global information network',
    'Synchronizing neural web nodes',
    'Tracking swarm intelligence vectors',
    'Spider-grid online and stable'
  ];

  let labelIndex = 0;
  setInterval(() => {
    labelIndex = (labelIndex + 1) % labels.length;
    bannerText.textContent = labels[labelIndex];
  }, 2800);

  screen.addEventListener('pointermove', (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 12;
    const y = (event.clientY / innerHeight - 0.5) * 12;
    screen.style.transform = `perspective(1200px) rotateX(${(-y).toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
  });

  screen.addEventListener('pointerleave', () => {
    screen.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  });
});
