const bottonOpenModal = document.getElementById('openModal');

const modalWrapper = document.querySelector(".modal-wrapper")

bottonOpenModal.onclick = function () {
  modalWrapper.classList.remove('invisible');
}

document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape'

  if (isEscKey) {
    modalWrapper.classList.add('invisible');
  }
})