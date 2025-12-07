// Sayfa yüklendiğinde skill bar'ların animasyonla dolmasını sağlar
document.addEventListener("DOMContentLoaded", () => {
  // Tüm skill-fill elemanlarını seç
  const fills = document.querySelectorAll(".skill-fill");

  fills.forEach((fill) => {
    // HTML içindeki data-percent değerini oku
    const hedefYuzde = fill.dataset.percent;

    // Güvenlik için: değer yoksa işlemi geç
    if (!hedefYuzde) return;

    // Başlangıçta 0 genişlik
    fill.style.width = "0%";

    // Küçük bir gecikmeden sonra hedef yüzdeye git
    setTimeout(() => {
      fill.style.width = hedefYuzde + "%";
    }, 400);
  });
});
