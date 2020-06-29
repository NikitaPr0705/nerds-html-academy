const button = document.querySelector(".write-us-button");
const popup = document.querySelector(".modal-write-us");
const close = document.querySelector(".modal-close");
const name = document.getElementById("name-surname-field");
const form = popup.querySelector(".modal-form");
const email = popup.querySelector("[name=email-value]");
const storage = localStorage.getItem("name");
const sliderButton = document.getElementsByClassName('radio');
const sliderButtonsArea = document.getElementsByClassName('radio-slider-buttons')[0];
const sliderList = document.querySelector('.slider-list');
const sliderItem = document.querySelectorAll('.slider-item');
let slideIndex = 1;
let isStorageSupport = true;
// let storage = "";



console.log(sliderButton)
console.log(sliderButtonsArea)
console.log(sliderList)
console.log(sliderItem)



//
// try {
//   storage = localStorage.getItem("name")
// } catch (err) {
//   isStorageSupport = false;
// }
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  console.log('Modal opened');
});

close.addEventListener("click", function(evt) {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  console.log('Modal closed');
});

// sliderButton.forEach(function (e) {
//   e.addEventListener('click', function () {
//     console.log('Listener added');
//     // toggleClass();
//   });
// });


  // if(sliderItem.classList.contains('hidden')) {
  //   sliderItem.classList.add('active');
  //   console.log(`class hidden removed`);
  // } else if(sliderItem.classList.contains('active')) {
  //   sliderItem.classList.add('hidden');
  //   console.log(`class active removed`);
  // }




// form.addEventListener("submit", function(evt) {
//   if (!login.value || !email.value) {
//     evt.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("name", name.value);
//     }
//   }
// });

// window.addEventListener("keydown", function(evt) {
//   if (evt.keyCode === 27) {
//     if (popup.classList.contains("modal-show")) {
//       popup.classList.remove("modal-show");
//       popup.classList.remove("modal-error");
//     }
//   }
// });
