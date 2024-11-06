document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('ratingCard');
  const thankYouCard = document.getElementById('thankYouCard');
  const submitBtn = document.getElementById('submitBtn');
  const ratingBtns = document.querySelectorAll('.rating-btn');
  const ratingValue = document.getElementById('ratingValue');
  let selectedRating = 0;

  for (const btn of ratingBtns) {
  btn.addEventListener('click', () => {
    for (const b of ratingBtns) {
      b.classList.remove('active');
    }
    btn.classList.add('active');
    selectedRating = btn.dataset.rating;
  });
  }


});