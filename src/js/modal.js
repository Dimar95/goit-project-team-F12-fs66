(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  for (let i = 0; i < refs.openModalBtn.length; i++) {
    refs.openModalBtn[i].addEventListener('click', toggleModal);
  }

  for (let i = 0; i < refs.closeModalBtn.length; i++) {
    refs.closeModalBtn[i].addEventListener('click', toggleModal);
  }

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();


