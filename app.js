const faqContainer = document.querySelector(".faq-container");

faqContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-arrow-down")) {
    open(e.target);
  } else if (e.target.classList.contains("fa-times")) {
    close(e.target);
  } else if (e.target.classList !== undefined) {
    return;
  }
});

function open(el) {
  el.style.display = "none";
  el.parentElement.nextElementSibling.children[0].style.display = "block";
  el.closest(".faq-wrapper").classList.toggle("bg");
  el.closest(".buttons").previousElementSibling.lastElementChild.style.display =
    "block";
}

function close(el) {
  el.style.display = "none";
  el.parentElement.previousElementSibling.children[0].style.display = "block";
  el.closest(".faq-wrapper").classList.toggle("bg");
  el.closest(".buttons").previousElementSibling.lastElementChild.style.display =
    "none";
}

// const faqWrapper = document.querySelectorAll(".faq-wrapper");
// const times = document.querySelectorAll(".fa-times");
// const open = document.querySelector(".fa-arrow-down");
// const para = document.querySelectorAll(".para");

// faqWrapper.forEach((faq) => {
//   faq.addEventListener("click", function (e) {
//     const open = faq.querySelector(".fa-arrow-down");
//     const times = faq.querySelector(".fa-times");
//     const para = faq.querySelector(".para");

//     console.log(e.target);
//     if (e.target.classList.contains("fa-arrow-down")) {
//       e.target.style.display = "none";
//       times.style.display = "block";
//       para.style.display = "block";
//       faq.classList.toggle("bg");
//     } else if (e.target.classList.contains("fa-times")) {
//       e.target.style.display = "none";
//       para.style.display = "none";
//       open.style.display = "block";
//       faq.classList.toggle("bg");
//     }
//   });
// });

// faqContainer.addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target.classList.contains("fa-arrow-down")) {
//     e.target.style.display = "none";
//     times.forEach((time) => (time.style.display = "block"));
//     para.style.display = "block";
//     faqWrapper.forEach((faq) => {
//       console.log(faq);
//       faq.classList.toggle("bg");
//     });
//   } else if (e.target.classList.contains("fa-times")) {
//     e.target.style.display = "none";
//     para.style.display = "none";
//     open.style.display = "block";
//     faqWrapper.forEach((faq) => faq.classList.toggle("bg"));
//   }
// });
