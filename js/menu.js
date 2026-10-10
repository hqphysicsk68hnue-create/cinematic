document.addEventListener("DOMContentLoaded", () => {
  // 1. Mở / đóng Menu
  const toggleMenuBtn = document.querySelector(".toggle-menu");
  const menu = document.querySelector(".menu");
  if (toggleMenuBtn && menu) {
    toggleMenuBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  // 2. Mở / đóng Content
  const toggleContentBtn = document.querySelector(".toggle-content");
  const content = document.querySelector(".content");
  if (toggleContentBtn && content) {
    toggleContentBtn.addEventListener("click", () => {
      content.classList.toggle("show");
    });
  }

  // 3. Mở / đóng Popup
  const openPopupBtn = document.getElementById("open-popup-btn");
  const closePopupBtn = document.getElementById("close-popup-btn");
  const popupOverlay = document.getElementById("popup-overlay");

  if (openPopupBtn && popupOverlay) {
    openPopupBtn.addEventListener("click", () => {
      popupOverlay.classList.add("show");
    });
  }

  if (closePopupBtn && popupOverlay) {
    closePopupBtn.addEventListener("click", () => {
      popupOverlay.classList.remove("show");
    });
  }
});
