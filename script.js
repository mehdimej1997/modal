'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const button = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');

// button.addEventListener('click', function () {
//   console.log('show button');
// });

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener('click', openModal);
}

close.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

overlay.addEventListener('mousedown', function (e) {
  if (e.isTrusted && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
