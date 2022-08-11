// const formElement = document.forms["formElement"];

// formElement.onfocus = function (evt) {
//   let activeElement = formElement.querySelector(".focused");
//   if (activeElement) {
//     activeElement.classList.remove("focused");
//   }
//   evt.target.classList.add("focused");
// };

// formElement.onblur = function (evt) {
//   let activeElement = formElement.querySelector(".focused");
//   if (activeElement) {
//     activeElement.classList.remove("focused");
//   }
// };


formElement.addEventListener("focus", (e) => {
  let activeElement = formElement.querySelector(".focused");
  if (activeElement) activeElement.classList.remove("focused");
  e.target.classList.add("focused");
}, true);

formElement.addEventListener("blur", (e) => {
  let activeElement = formElement.querySelector(".focused");
  if (activeElement) activeElement.classList.remove("focused");
}, true);