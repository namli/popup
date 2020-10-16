window.onload = main;

function main() {
  setInitState();
  let showPopButton = document.querySelector('.show-popup');
  let closePopUp = document.querySelector('.close');
  let selectDisclamer = document.querySelector('.main form');
  let buttonConfirm = document.querySelectorAll('.btn');
  showPopButton.addEventListener('click', showPopUp);
  closePopUp.addEventListener('click', hidePopUp);
  selectDisclamer.addEventListener('change', switchDisclamer);

  for (const btn of buttonConfirm) {
    btn.addEventListener('click', isChecked);
  }

}

function setInitState() {
  let main = document.querySelector('.popup-content .main').classList.remove('hide');
  let forEu = document.querySelector('.popup-content .eu-disclamer').classList.add('hide');
  let forNonEu = document.querySelector('.popup-content .noneu-disclamer').classList.add('hide');
  let allRadio = document.querySelectorAll('input[type=radio]');
  for (const input of allRadio) {
    input.checked = false;
  }

}


function showPopUp(e) {
  let popup = document.querySelector('.popup-wrapper');
  popup.classList.remove('hide');
  setInitState();
}

function hidePopUp(e) {
  let popup = document.querySelector('.popup-wrapper');
  popup.classList.add('hide');
}

function switchDisclamer(e) {
  let main = document.querySelector('.popup-content .main');
  let forEu = document.querySelector('.popup-content .eu-disclamer');
  let forNonEu = document.querySelector('.popup-content .noneu-disclamer');
  if (e.target.value === 'imfrom-eu') {
    main.classList.add('hide');
    forEu.classList.remove('hide');
  } else if (e.target.value === 'imnotfrom-eu') {
    main.classList.add('hide');
    forNonEu.classList.remove('hide');
  }
}

function isChecked(e) {
  if (e.target.parentNode.querySelector('.apruv').checked) {
    let popup = document.querySelector('.popup-wrapper');
    popup.classList.add('hide');
  } else {
    alert('need to agree with rules');
  };
}