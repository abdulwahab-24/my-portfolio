// =============================
// DHAT Reveal + Stagger Animations
// =============================
document.addEventListener("DOMContentLoaded", () => {

  // 1) Stagger: 3 kart
  const cardsWrap = document.querySelector(".reveal-stagger");
  if(cardsWrap){
    // تحميل بسيط قبل الظهور عشان يعطي إحساس احترافي
    setTimeout(() => cardsWrap.classList.add("is-visible"), 120);
  }

  // 2) Scroll reveal للأجزاء الثانية (palette)
  const revealTargets = document.querySelectorAll(".reveal-up");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");

        // لو كان palette، فعل pills مع تأخير حسب data-delay
        if(entry.target.classList.contains("dhat-palette")){
          const pills = entry.target.querySelectorAll(".pill");
          pills.forEach(p => {
            const d = Number(p.dataset.delay || 0);
            p.style.transitionDelay = d + "ms";
          });
        }

        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealTargets.forEach(el => io.observe(el));
});
