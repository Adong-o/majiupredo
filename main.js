const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('show-menu');
});

//for the faqs

function toggleAnswer(question) {
  const answer = question.querySelector('.faq-answer');
  answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}