(function initModal() {
  const modalId = 'callback-modal';
  const modal = document.querySelector('#' + modalId);
  const modalContainer = document.querySelector('.modal-container');
  if (!modal || !modalContainer) {
    return;
  }

  const modalButtons = document.querySelectorAll(`a[href="#${modalId}"]`);
  const closeModal = document.querySelectorAll('[data-modal="close"]');
  function toggleModal(visible) {
    document.body.classList.toggle('modal-opened', visible);
    modalContainer.classList.toggle('hidden', !visible);
    modal.classList.toggle('hidden', !visible);
  }

  modalButtons.forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault();
      toggleModal(true);
    })
  );

  closeModal.forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault();
      toggleModal(false);
    })
  );
})();

(function initInputMask() {
  if (typeof Inputmask !== 'function') {
    console.warn('Err');
    return;
  }
  new Inputmask().mask(document.querySelectorAll('[data-inputmask]'));
})();