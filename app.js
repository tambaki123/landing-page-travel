const btn = document.querySelector(".btn-log");
const close = document.querySelector(".close-icon");
const modal = document.querySelector(".modal");
const nav = document.querySelector("nav");
const bars = document.querySelector(".bars");
const closeMobile = document.querySelector(".close");
const topBtn = document.querySelector(".topbtn");
const user = document.getElementById("user");
const password = document.getElementById("password");
const userSign = document.getElementById("user-signin");
const passSign = document.getElementById("pass-signin");
const rePass = document.getElementById("re-pass");
const loginBtn = document.querySelector(".login-btn");
const signinBtn = document.querySelector(".signin-btn");
const sign = document.querySelector(".sign");
const signContainer = document.querySelector(".sign-container");
const closeSignIn = document.querySelector(".close-sign");
const eyeShow = document.querySelector(".eye-show");
// mobile menu
bars.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  nav.style.transition = "all 0.5s ease";
});
closeMobile.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
});
// modal
const toogleHandle = () => {
  modal.classList.toggle("hide");
};
btn.addEventListener("click", toogleHandle);

close.addEventListener("click", toogleHandle);

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    toogleHandle();
  }
});
// signin
sign.addEventListener("click", (e) => {
  e.preventDefault();
  signContainer.classList.toggle("hide");
});
closeSignIn.addEventListener("click", () => {
  signContainer.classList.toggle("hide");
  modal.classList.toggle("hide");
});
signinBtn.addEventListener("click", (e) => {
  if (userSign.value === "" || passSign.value == "") {
    document.getElementById("error3").innerHTML = "không được để user trống!";
    document.getElementById("error4").innerHTML =
      "không được để password trống!";
  } else {
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
  }
  if (passSign.value != rePass.value) {
    document.getElementById("error5").innerHTML = "nhập lại mật khẩu!";
  }
});
// srcoll to top
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
// login
loginBtn.addEventListener("click", () => {
  if (user.value === "" || password.value === "") {
    document.getElementById("error1").innerHTML = "nhập user để đăng nhập!";
    document.getElementById("error2").innerHTML = "nhập password để đăng nhập!";
  } else {
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    alert("đăng nhập thành công");
  }
});
// hide show password
let isChecked = true;
eyeShow.addEventListener("click", () => {
  if (isChecked) {
    password.type = "text";
    isChecked = false;
  } else {
    password.type = "password";
    isChecked = true;
  }
});
// slider
$(".slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
