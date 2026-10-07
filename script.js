document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.action, .menu-item');
  const statusSub = document.querySelector('.status-sub');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const text = button.textContent.replace(/\s+/g, ' ').trim();
      if (text) {
        statusSub.textContent = text.toLowerCase() + ' // active';
      }

      if (button.classList.contains('menu-item')) {
        document.querySelectorAll('.menu-item').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
      }
    });
  });
});
