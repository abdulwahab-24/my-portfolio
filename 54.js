document.addEventListener("DOMContentLoaded", () => {

  // Scroll reveal
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });
  items.forEach(el => io.observe(el));

  // Tilt (خفيف)
  const tiltEls = document.querySelectorAll("[data-tilt]");
  const isTouch = matchMedia("(pointer: coarse)").matches;
  if (!isTouch) {
    tiltEls.forEach(card => {
      let rect;
      const onMove = (ev) => {
        rect = rect || card.getBoundingClientRect();
        const x = (ev.clientX - rect.left) / rect.width;
        const y = (ev.clientY - rect.top) / rect.height;
        const rotY = (x - 0.5) * 10;
        const rotX = (0.5 - y) * 8;
        card.style.transform =
          `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
      };
      const onLeave = () => { rect = null; card.style.transform = ""; };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
  }

  // Lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  const shots = document.querySelectorAll(".shot");

  const openLB = (src, alt="") => {
    lbImg.src = src;
    lbImg.alt = alt;
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
  };
  const closeLB = () => {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  };

  shots.forEach(btn => {
    btn.addEventListener("click", () => {
      openLB(btn.dataset.full, btn.querySelector("img")?.alt || "");
    });
  });

  lbClose.addEventListener("click", closeLB);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLB();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLB();
  });
});
