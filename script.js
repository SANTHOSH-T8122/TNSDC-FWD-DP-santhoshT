document.getElementById('see-more').addEventListener('click', function() {
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent! (form action not implemented)');
});