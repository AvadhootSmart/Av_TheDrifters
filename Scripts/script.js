document.addEventListener("DOMContentLoaded", function () {
  let logo = document.getElementsByClassName("icon");
  let about = document.getElementsByClassName("links");

  gsap.to(logo, {
    x: 50,
  });

  gsap.to(about, {
    x: -50,
  });

  let heading = document.getElementById("heroHeading");
  let span = heading.getElementsByTagName("span");
  console.log(span);
  gsap.to(span, {
    y: -5,
    stagger: {
      each: 0.1,
      from: "start",
    },
    duration: 0.4,
    ease: "power5.in",
  });
});

let contentHeading = document.getElementById("heading");

let content = document.getElementById("content");

gsap.to(contentHeading, {
  y: -10,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 40% ",
    end: "top 80%",
    markers: false,
    scrub: 1,
    once: true,
  },
});

gsap.to(content, {
  y: -10,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 40% ",
    end: "top 80%",
    markers: false,
    scrub: 2,
    once: true,
  },
});

let driftHeading = document.getElementById("driftHeading");

let driftSpan = document.getElementById("driftSpan");

gsap.to(driftHeading, {
  opacity: 1,
  y: 10,
  scrollTrigger: {
    trigger: "#Drifters",
    scroller: "body",
    start: "top 60%",
    end: "top 80%",
    // markers: true,
    scrub: 2,
    once: true,
  },
});

gsap.to(driftSpan, {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: "#Drifters",
    scroller: "body",
    start: "top 60%",
    end: "top 80%",
    // markers: true,
    scrub: 2,
    once: true,
  },
});

let carCards = document.querySelectorAll('.cards')

gsap.to(carCards, {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#Drifters",
      scroller: "body",
      start: "top 60%",
      end: "top 80%",
      // markers: true,
      scrub: 4,
      once: true,
      ease:'expo.in(1.7)',
    },
  });
  