document.addEventListener("DOMContentLoaded", function () {
  const prgs = document.querySelector(".circle-progress");

  const docBody = document.body;

  const parent = document.querySelector(".parent-container");

  const currentDot1 = document.querySelector(".dot-1");
  const currentDot2 = document.querySelector(".dot-2");
  const currentDot3 = document.querySelector(".dot-3");
  const currentDot4 = document.querySelector(".dot-4");
  const currentDot5 = document.querySelector(".dot-5");
  const currentDot6 = document.querySelector(".dot-6");
  const currentDot7 = document.querySelector(".dot-7");

  const sticky_section = document.querySelector(".sticky-section");
  const sec_sticky_section = document.querySelector(".sec-sticky-section");
  const thi_sticky_section = document.querySelector(".thi-sticky-section");
  const for_sticky_section = document.querySelector(".for-sticky-section");
  const fif_sticky_section = document.querySelector(".fif-sticky-section");
  const six_sticky_section = document.querySelector(".six-sticky-section");

  const img_container = document.querySelector(".img_container");

  const poster_mobile_1 = document.querySelector(".poster-mobile_1");
  const poster_mobile_2 = document.querySelector(".poster-mobile_2");

  const poster_movie_sec = document.querySelector(".poster-movie_sec");
  const poster_block_sec = document.querySelector(".poster-block_sec");

  const poster_movie_thi = document.querySelector(".poster-movie_thi");
  const poster_block_thi = document.querySelector(".poster-block_thi");

  const domi_box = document.querySelector(".domi_box");
  const domi_app = document.querySelector(".domi_app");
  const domi_bread = document.querySelector(".domi_bread");
  const domi_brds = document.querySelector(".domi_brds");
  const domi_app_home = document.querySelector(".domi_app_home");

  const upper_1_img = document.querySelector(".upper_1_img");
  const upper_2_img = document.querySelector(".upper_2_img");
  const bottom_1_img = document.querySelector(".bottom_1_img");
  const bottom_2_img = document.querySelector(".bottom_2_img");
  const right_feed = document.querySelector(".right_feed");

  const poster_block_fif = document.querySelector(".poster-block_fif");

  const poster_block_fin = document.querySelector(".poster-block_fin");
  const poster_movie_fin = document.querySelector(".poster-movie_fin");

  const final_sticky_section = document.querySelector(".final-sticky-section");

  const heading = document.getElementById("circle-heading");
  const subHeading = document.getElementById("circle-subhead");
  const optionalHeading = document.getElementById("circle-optional-txt");

  const svg = document.querySelector("#transring");
  const path1 = document.querySelector(".transrgwht");
  const path2 = document.querySelector(".dotsstro1");

  const dotPath = document.querySelector("dotsstro1");

  svgLength = path1.getTotalLength();
  svgLength2 = path2.getTotalLength();

  svg.style.backgroundColor = "transparent";

  path1.style.strokeDasharray = svgLength;

  path1.style.strokeDashoffset = svgLength;

  let i = 0,
    j = 0,
    k = 0,
    m = 0,
    n = 0,
    o = 0,
    p = 0;

  window.addEventListener("scroll", function () {
    const scrollPercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    console.log("working this");
    var draw = svgLength * scrollPercent;

    console.log("im working gays");

    path1.style.strokeDashoffset = svgLength - draw;
  });

  // Function to handle intersection changes
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.target === sticky_section && entry.isIntersecting) {
        // Sticky Section is fully visible
        prgs.style.backgroundColor = "#6213a3";
        // svg.style.backgroundColor = "#6213a3";
        heading.innerText = "25M+ Downloads";
        subHeading.innerText = "on appstore & google playstore";
        heading.style.fontSize = "3rem";
        subHeading.style.fontSize = "1.2rem";
        subHeading.style.lineHeight = "3rem";
        currentDot1.classList.add("dot-active");
        currentDot2.classList.remove("dot-active");
        currentDot3.classList.remove("dot-active");
        currentDot4.classList.remove("dot-active");
        currentDot5.classList.remove("dot-active");
        currentDot6.classList.remove("dot-active");
        currentDot7.classList.remove("dot-active");

        i = i + 1;

        if (i > 1) {
          heading.style.animationPlayState = "paused";
          heading.style.animation = "none";
          heading.offsetHeight;

          subHeading.style.animationPlayState = "paused";
          subHeading.style.animation = "none";
          subHeading.offsetHeight;

          heading.style.animation = "risedown 900ms ease forwards";
          heading.style.animationPlayState = "running";

          subHeading.style.animation = "risedown 900ms ease forwards";
          subHeading.style.animationPlayState = "running";

          img_container.style.animationPlayState = "paused";
          img_container.style.animation = "none";
          img_container.offsetHeight;
          // img_container.style.transform = "translateY(100%)";
          img_container.style.animation = "riseup 1500ms ease forwards";
          img_container.style.animationPlayState = "running";
        }
      } else if (entry.target === sec_sticky_section && entry.isIntersecting) {
        // Second Sticky Section is fully visible
        // transform: translateY(50%);

        img_container.style.transform = "translateY(100%)";

        img_container.style.animationPlayState = "paused";
        optionalHeading.style.width = "50%";
        optionalHeading.style.marginLeft = "auto";
        optionalHeading.style.textAlign = "left";
        optionalHeading.innerText = "The Next Big";
        prgs.style.backgroundColor = "#4c27cc";
        heading.innerText = "Blockchain";
        subHeading.innerText = "Revolution";
        heading.style.fontSize = "3rem";
        subHeading.style.fontSize = "1.2rem";
        subHeading.style.lineHeight = "3rem";

        currentDot1.classList.remove("dot-active");
        currentDot2.classList.add("dot-active");
        currentDot3.classList.remove("dot-active");
        currentDot4.classList.remove("dot-active");
        currentDot5.classList.remove("dot-active");
        currentDot6.classList.remove("dot-active");
        currentDot7.classList.remove("dot-active");

        j = j + 1;

        if (j > 0) {
          heading.style.animationPlayState = "paused";
          heading.style.animation = "none";
          heading.offsetHeight;

          subHeading.style.animationPlayState = "paused";
          subHeading.style.animation = "none";
          subHeading.offsetHeight;

          heading.style.animation = "risedown 900ms ease forwards";
          heading.style.animationPlayState = "running";

          subHeading.style.animation = "risedown 900ms ease forwards";
          subHeading.style.animationPlayState = "running";

          poster_block_sec.style.animationPlayState = "paused";
          poster_movie_sec.style.animationPlayState = "paused";
          poster_block_sec.style.animation = "none";
          poster_movie_sec.style.animation = "none";
          poster_block_sec.offsetHeight;
          poster_movie_sec.offsetHeight;
          // img_container.style.transform = "translateY(100%)";
          poster_block_sec.style.animation = "riseMobile 2500ms ease forwards";
          poster_block_sec.animationPlayState = "running";
          poster_movie_sec.style.animation = "risedown 2500ms ease forwards";
          poster_movie_sec.animationPlayState = "running";
        }
      } else if (entry.target === thi_sticky_section && entry.isIntersecting) {
        // Third Sticky Section is fully visible
        // heading.style.transform = "translateY(0%)";
        img_container.style.transform = "translateY(100%)";

        optionalHeading.style.width = "50%";
        optionalHeading.style.marginLeft = "auto";
        optionalHeading.style.textAlign = "left";
        optionalHeading.innerText = "Powered by advance";
        prgs.style.backgroundColor = "#10123d";
        prgs.style.zIndex = 10;
        heading.innerText = "NASA";
        heading.style.fontFamily = "'MuseoModerno', cursive";
        subHeading.innerText = "algorithms";
        heading.style.fontSize = "5.5rem";
        heading.style.lineHeight = "5.5rem";
        subHeading.style.fontSize = "1.2rem";
        subHeading.style.lineHeight = "3rem";

        currentDot1.classList.remove("dot-active");
        currentDot2.classList.remove("dot-active");
        currentDot3.classList.add("dot-active");
        currentDot4.classList.remove("dot-active");
        currentDot5.classList.remove("dot-active");
        currentDot6.classList.remove("dot-active");
        currentDot7.classList.remove("dot-active");

        k = k + 1;

        if (k > 0) {
          heading.style.animationPlayState = "paused";
          heading.style.animation = "none";
          heading.offsetHeight;

          subHeading.style.animationPlayState = "paused";
          subHeading.style.animation = "none";
          subHeading.offsetHeight;

          heading.style.animation = "risedown 900ms ease forwards";
          heading.style.animationPlayState = "running";

          subHeading.style.animation = "risedown 900ms ease forwards";
          subHeading.style.animationPlayState = "running";

          poster_block_thi.style.animationPlayState = "paused";
          poster_movie_thi.style.animationPlayState = "paused";
          poster_block_thi.style.animation = "none";
          poster_movie_thi.style.animation = "none";
          poster_block_thi.offsetHeight;
          poster_movie_thi.offsetHeight;
          // img_container.style.transform = "translateY(100%)";
          poster_block_thi.style.animation = "riseMobile 2500ms ease forwards";
          poster_block_thi.animationPlayState = "running";
          poster_movie_thi.style.animation = "risedown 2500ms ease forwards";
          poster_movie_thi.animationPlayState = "running";
        }
      } else if (entry.target === for_sticky_section && entry.isIntersecting) {
        // Third Sticky Section is fully visible
        heading.style.transform = "translateY(0%)";

        optionalHeading.style.width = "50%";
        optionalHeading.style.marginLeft = "auto";
        optionalHeading.style.textAlign = "left";
        optionalHeading.innerText = "Redefining";
        prgs.style.backgroundColor = "#16263b";
        prgs.style.zIndex = 10;
        heading.innerText = "UX Strategy";
        heading.style.fontFamily = "sans-serif";
        subHeading.innerText = "and UI design";
        heading.style.fontSize = "3rem";
        heading.style.lineHeight = "3rem";
        subHeading.style.fontSize = "1.2rem";
        subHeading.style.lineHeight = "3rem";

        currentDot1.classList.remove("dot-active");
        currentDot2.classList.remove("dot-active");
        currentDot3.classList.remove("dot-active");
        currentDot4.classList.add("dot-active");
        currentDot5.classList.remove("dot-active");
        currentDot6.classList.remove("dot-active");
        currentDot7.classList.remove("dot-active");

        m = m + 1;

        if (m > 0) {
          heading.style.animationPlayState = "paused";
          heading.style.animation = "none";
          heading.offsetHeight;

          subHeading.style.animationPlayState = "paused";
          subHeading.style.animation = "none";
          subHeading.offsetHeight;

          heading.style.animation = "risedown 900ms ease forwards";
          heading.style.animationPlayState = "running";

          subHeading.style.animation = "risedown 900ms ease forwards";
          subHeading.style.animationPlayState = "running";

          domi_box.style.animationPlayState = "paused";
          domi_app.style.animationPlayState = "paused";
          domi_app_home.style.animationPlayState = "paused";
          domi_bread.style.animationPlayState = "paused";
          domi_brds.style.animationPlayState = "paused";
          poster_movie_thi.style.animationPlayState = "paused";
          domi_box.style.animation = "none";
          domi_app.style.animation = "none";
          domi_app_home.style.animation = "none";
          domi_bread.style.animation = "none";
          domi_brds.style.animation = "none";

          poster_movie_thi.style.animation = "none";
          domi_box.offsetHeight;
          domi_app.offsetHeight;
          domi_app_home.offsetHeight;
          domi_bread.offsetHeight;
          domi_brds.offsetHeight;
          poster_movie_thi.offsetHeight;
          // img_container.style.transform = "translateY(100%)";
          domi_box.style.animation = "risedown 2000ms ease forwards";
          domi_box.animationPlayState = "running";
          domi_bread.style.animation = "risedown 1400ms ease forwards";
          domi_bread.animationPlayState = "running";
          domi_brds.style.animation = "riseMobile 2000ms ease forwards";
          domi_brds.animationPlayState = "running";
          domi_app.style.animation = "riseMobile 1800ms ease forwards";
          domi_app.animationPlayState = "running";
          domi_app_home.style.animation = "risedown 2000ms ease forwards";
          domi_app_home.animationPlayState = "running";
          poster_movie_thi.style.animation = "risedown 2500ms ease forwards";
          poster_movie_thi.animationPlayState = "running";
        }
      } else if (entry.target === fif_sticky_section && entry.isIntersecting) {
        // Third Sticky Section is fully visible
        heading.style.transform = "translateY(0%)";

        optionalHeading.style.width = "60%";
        optionalHeading.style.marginLeft = "auto";
        optionalHeading.style.textAlign = "left";
        optionalHeading.innerText = "Developing ERP Solution for";
        prgs.style.backgroundColor = "#012c91";
        prgs.style.zIndex = 10;
        heading.innerText = "Text Headline";
        heading.style.fontFamily = "sans-serif";
        subHeading.innerText = "in furniture industry";
        heading.style.fontSize = "3rem";
        heading.style.lineHeight = "3rem";
        subHeading.style.fontSize = "1.2rem";
        subHeading.style.lineHeight = "3rem";

        currentDot1.classList.remove("dot-active");
        currentDot2.classList.remove("dot-active");
        currentDot3.classList.remove("dot-active");
        currentDot4.classList.remove("dot-active");
        currentDot5.classList.remove("dot-active");
        currentDot6.classList.add("dot-active");
        currentDot7.classList.remove("dot-active");

        o = o + 1;

        if (o > 1) {
          heading.style.animationPlayState = "paused";
          heading.style.animation = "none";
          heading.offsetHeight;

          subHeading.style.animationPlayState = "paused";
          subHeading.style.animation = "none";
          subHeading.offsetHeight;

          heading.style.animation = "risedown 900ms ease forwards";
          heading.style.animationPlayState = "running";

          subHeading.style.animation = "risedown 900ms ease forwards";
          subHeading.style.animationPlayState = "running";

          poster_block_fif.style.animationPlayState = "paused";
          poster_block_fif.style.animation = "none";
          poster_block_fif.offsetHeight;
          // img_container.style.transform = "translateY(100%)";
          poster_block_fif.style.animation = "riseMobile 1700ms ease forwards";
          poster_block_fif.style.animationPlayState = "running";
        }
      } else if (entry.target === six_sticky_section && entry.isIntersecting) {
        // Third Sticky Section is fully visible
        heading.style.transform = "translateY(0%)";

        optionalHeading.style.width = "60%";
        optionalHeading.style.marginLeft = "auto";
        optionalHeading.style.textAlign = "left";
        optionalHeading.innerText = "Text Headline";
        prgs.style.backgroundColor = "#124ca0";
        prgs.style.zIndex = 10;
        heading.innerText = "Text Headline";
        heading.style.fontFamily = "sans-serif";
        subHeading.innerText = "Footer headline";
        heading.style.fontSize = "3rem";
        heading.style.lineHeight = "3rem";
        subHeading.style.fontSize = "1.2rem";
        subHeading.style.lineHeight = "3rem";

        currentDot1.classList.remove("dot-active");
        currentDot2.classList.remove("dot-active");
        currentDot3.classList.remove("dot-active");
        currentDot4.classList.remove("dot-active");
        currentDot5.classList.add("dot-active");
        currentDot6.classList.remove("dot-active");
        currentDot7.classList.remove("dot-active");

        n = n + 1;

        if (n > 0) {
          heading.style.animationPlayState = "paused";
          heading.style.animation = "none";
          heading.offsetHeight;

          subHeading.style.animationPlayState = "paused";
          subHeading.style.animation = "none";
          subHeading.offsetHeight;

          heading.style.animation = "risedown 900ms ease forwards";
          heading.style.animationPlayState = "running";

          subHeading.style.animation = "risedown 900ms ease forwards";
          subHeading.style.animationPlayState = "running";

          upper_1_img.style.animationPlayState = "paused";
          upper_2_img.style.animationPlayState = "paused";
          bottom_1_img.style.animationPlayState = "paused";
          bottom_2_img.style.animationPlayState = "paused";
          right_feed.style.animationPlayState = "paused";
          upper_1_img.style.animation = "none";
          upper_2_img.style.animation = "none";

          bottom_1_img.style.animation = "none";
          bottom_2_img.style.animation = "none";
          right_feed.style.animation = "none";
          upper_1_img.offsetHeight;
          upper_2_img.offsetHeight;
          bottom_1_img.offsetHeight;
          bottom_2_img.offsetHeight;
          upper_2_img.offsetHeight;
          // img_container.style.transform = "translateY(100%)";
          upper_1_img.style.animation = "risedown 1700ms ease forwards";
          upper_1_img.animationPlayState = "running";
          upper_2_img.style.animation = "risedown 1700ms ease forwards";
          upper_2_img.animationPlayState = "running";
          bottom_1_img.style.animation = "riseMobile 1700ms ease forwards";
          bottom_1_img.animationPlayState = "running";
          bottom_2_img.style.animation = "riseMobile 1700ms ease forwards";
          bottom_2_img.animationPlayState = "running";
          right_feed.style.animation = "riseRight 1700ms ease forwards";
          right_feed.animationPlayState = "running";
        }
      } else if (
        entry.target === final_sticky_section &&
        entry.isIntersecting
      ) {
        // Third Sticky Section is fully visible
        optionalHeading.style.width = "45%";
        optionalHeading.style.marginLeft = "auto";
        optionalHeading.style.textAlign = "left";
        optionalHeading.innerText = "Biggest Classifieds";
        prgs.style.backgroundColor = "#00824c";
        prgs.style.zIndex = 10;
        heading.innerText = "East Asia";
        heading.style.fontFamily = "sans-serif";
        subHeading.innerText = "Countries";
        heading.style.fontSize = "3rem";
        heading.style.lineHeight = "3rem";
        subHeading.style.fontSize = "1.2rem";
        subHeading.style.lineHeight = "3rem";

        currentDot1.classList.remove("dot-active");
        currentDot2.classList.remove("dot-active");
        currentDot3.classList.remove("dot-active");
        currentDot4.classList.remove("dot-active");
        currentDot5.classList.remove("dot-active");
        currentDot6.classList.remove("dot-active");
        currentDot7.classList.add("dot-active");

        p = p + 1;

        if (p > 1) {
          heading.style.animationPlayState = "paused";
          heading.style.animation = "none";
          heading.offsetHeight;

          subHeading.style.animationPlayState = "paused";
          subHeading.style.animation = "none";
          subHeading.offsetHeight;

          heading.style.animation = "risedown 900ms ease forwards";
          heading.style.animationPlayState = "running";

          subHeading.style.animation = "risedown 900ms ease forwards";
          subHeading.style.animationPlayState = "running";

          poster_movie_fin.style.animationPlayState = "paused";
          poster_block_fin.style.animationPlayState = "paused";
          poster_block_fin.style.animation = "none";
          poster_movie_fin.style.animation = "none";
          poster_block_fin.offsetHeight;
          poster_movie_fin.offsetHeight;
          // img_container.style.transform = "translateY(100%)";
          poster_block_fin.style.animation = "riseMobile 1500ms ease forwards";
          poster_block_fin.style.animationPlayState = "running";
          poster_movie_fin.style.animation = "riseMobile 1500ms ease forwards";
          poster_movie_fin.style.animationPlayState = "running";
        }
      }
    });
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Adjust the threshold as needed
  });

  // Observe the elements
  observer.observe(sticky_section);
  observer.observe(sec_sticky_section);
  observer.observe(thi_sticky_section);
  observer.observe(for_sticky_section);
  observer.observe(fif_sticky_section);
  observer.observe(six_sticky_section);
  observer.observe(final_sticky_section);
});

const svg = document.querySelector("#transring");
const path1 = document.querySelector(".transrgwht");
const path2 = document.querySelector(".dotsstro1");

const dotPath = document.querySelector("dotsstro1");

svgLength = path1.getTotalLength();
svgLength2 = path2.getTotalLength();

svg.style.backgroundColor = "transparent";

path1.style.strokeDasharray = svgLength;

path1.style.strokeDashoffset = svgLength;

window.addEventListener("scroll", function () {
  const scrollPercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  console.log("working this");
  var draw = svgLength + scrollPercent;

  console.log(scrollPercent);

  path1.style.strokeDashoffset = svgLength - draw;
});

function clickthis(para) {
  const first_section = document.querySelector(".first-section-sticky");
  const sec_sticky_section = document.querySelector(".sec-sticky-section");
  const thi_sticky_section = document.querySelector(".thi-sticky-section");
  const for_sticky_section = document.querySelector(".for-sticky-section");
  const fif_sticky_section = document.querySelector(".fif-sticky-section");
  const six_sticky_section = document.querySelector(".six-sticky-section");
  const final_sticky_section = document.querySelector(".final-section-sticky");

  if (para == 1) {
    first_section.scrollIntoView({ behavior: "smooth" });
  } else if (para == 2) {
    sec_sticky_section.scrollIntoView({ behavior: "smooth" });
  } else if (para == 3) {
    thi_sticky_section.scrollIntoView({ behavior: "smooth" });
  } else if (para == 4) {
    for_sticky_section.scrollIntoView({ behavior: "smooth" });
  } else if (para == 5) {
    six_sticky_section.scrollIntoView({ behavior: "smooth" });
  } else if (para == 6) {
    fif_sticky_section.scrollIntoView({ behavior: "smooth" });
  } else if (para == 7) {
    final_sticky_section.scrollIntoView({ behavior: "smooth" });
  }
}
