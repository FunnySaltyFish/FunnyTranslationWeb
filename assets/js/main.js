(function () {
  "use strict";
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };
  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }
  window.onscroll = function () {
    const header_navbar = document.getElementById("header_navbar");
    const sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }
    const backToTo = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "block";
    } else {
      backToTo.style.display = "none";
    }
  };
  const pageLink = document.querySelectorAll(".page-scroll");
  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(elem.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth", offsetTop: 1 - 60 });
    });
  });
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }
  window.document.addEventListener("scroll", onScroll);
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });
  const cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: "k",
  });
  cu.start();
//   GLightbox({
//     selector: ".glightbox",
//     href: "assets/video/Screenrecorder.mp4",
//     type: "video",
//     source: "youtube",
//     width: 900,
//     autoplayVideos: true,
//   });
  GLightbox({
    selector: ".glightbox2",
    href: "assets/video/Screenrecorder.mp4",
    type: "video",
    source: "youtube",
    width: 900,
    autoplayVideos: true,
  });
  new tns({
    container: ".testimonial-slider",
    items: 2.4,
    slideBy: "page",
    autoplay: false,
    mouseDrag: true,
    gutter: 60,
    nav: false,
    controlsText: [
      '<i class="lni lni-arrow-left"></i>',
      '<i class="lni lni-arrow-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      992: { items: 1.8, gutter: 30 },
      1200: { items: 2, gutter: 100 },
      1400: { items: 2.4 },
    },
  });
  new Swiper(".swiper-container", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    speed: 1000,
    loop: true,
    centeredSlides: true,
    slidesPerView: 5,
    breakpoints: {
      0: { slidesPerView: 2 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  });
  const wow = new WOW({ mobile: false });
  wow.init();
})();
