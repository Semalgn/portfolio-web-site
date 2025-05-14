/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, .skills",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img, .skill-left", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content, .skill-right", {
  origin: "right",
});

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "SEO Optimization",
    "UI/UX Designer",
    "Graphics Designer",
  ],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 1000,
  loop: true,
});

/*==================== All buttons response ====================*/
function toggleText(button) {
  const moreText = button.previousElementSibling.querySelector(".more-text");
  // Toggle the display of the "more-text" span
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    button.innerHTML = "Read Less"; // Change button text to 'Read Less'
  } else {
    moreText.style.display = "none";
    button.innerHTML = "Read More"; // Change button text back to 'Read More'
  }
}

// ===== circle skills =====
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  let dots = elem.getAttribute("data-dots");
  let marked = elem.getAttribute("data-percent");
  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// ====== Email js =========
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

// emailjs.sendForm(serviceID, - templateID, - #form, - publicKey)
  emailjs.sendForm(
      "service_vqq5c6d",
      "template_a01p3rm",
      "#contact-form",
      "UoPuFPSdPmrM12tHZ"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = "Message sent successfully";
        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        // Clear input fields
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = "Message not sent (service error)";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
