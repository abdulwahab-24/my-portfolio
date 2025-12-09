// ---------------- YETENEK BARI ANİMASYONU ----------------

// Sayfa tamamen yüklendikten sonra kodların çalışması için
document.addEventListener("DOMContentLoaded", () => {

  // Tüm skill-fill elemanlarını seç (yüzde barlarının dolu kısmı)
  const skillFills = document.querySelectorAll(".skill-fill");

  // IntersectionObserver: eleman ekranda görünür hale geldiğinde tetiklenecek
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Eleman görünür mü?
      if (entry.isIntersecting) {
        const bar = entry.target;

        // Eğer bu bara daha önce animasyon uygulanmışsa tekrar etme
        if (bar.dataset.animated === "true") return;

        // HTML tarafındaki data-percent değerini oku (örn. 60, 70...)
        const targetPercent = bar.dataset.percent;

        // Genişliği hedef yüzdeye ayarla -> CSS'teki transition devreye girer
        bar.style.width = targetPercent + "%";

        // Bir daha animasyon çalışmasın diye işaret koy
        bar.dataset.animated = "true";

        // Bu elemanı artık gözlemlemeye gerek yok
        observer.unobserve(bar);
      }
    });
  }, {
    // Elemanın yaklaşık %40'ı görünür olduğunda animasyon başlasın
    threshold: 0.4
  });

  // Her skill bar için gözlem başlat
  skillFills.forEach(bar => skillsObserver.observe(bar));


  // ---------------- FADE ANİMASYONU (KARTLAR / ABOUT vb.) ----------------

  // .fade-item sınıfına sahip tüm elemanları seç
  const fadeItems = document.querySelectorAll(".fade-item");

  // Bu observer, eleman ekranda göründüğünde fade-in animasyonu başlatır
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Eleman görünür hale geldiyse
      if (entry.isIntersecting) {
        // .visible sınıfı ekle -> CSS tarafında opacity/translate animasyonunu tetikler
        entry.target.classList.add("visible");

        // Aynı eleman için animasyon sadece bir kere çalışsın
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Elemanın küçük bir kısmı bile görünse yeterli (%20)
    threshold: 0.2
  });

  // Her fade-item için gözlem başlat
  fadeItems.forEach(item => fadeObserver.observe(item));

});

// ---------------- YETENEK BARI ANİMASYONU ----------------
document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");

  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        if (bar.dataset.animated === "true") return;

        const targetPercent = bar.dataset.percent;
        bar.style.width = targetPercent + "%";
        bar.dataset.animated = "true";
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.4
  });

  skillFills.forEach(bar => skillsObserver.observe(bar));

  // ---------------- FADE ANİMASYONLARI ----------------
  const fadeItems = document.querySelectorAll(".fade-item");

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeItems.forEach(item => fadeObserver.observe(item));
});


