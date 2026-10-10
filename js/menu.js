document.addEventListener("DOMContentLoaded", () => {
  // Ngăn chặn lưu lại lịch sử di chuyển menu
  const menuStack = ["mainMenu"];

  // 1. Chuyển Menu theo data-target
  document.addEventListener("click", (e) => {
    const targetBtn = e.target.closest("[data-target]");
    if (targetBtn) {
      const targetId = targetBtn.getAttribute("data-target");
      openMenu(targetId);
    }
  });

  // 2. Nút quay lại (Back)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("back") || e.target.closest(".back")) {
      goBack();
    }
  });

  // 3. Mở/đóng Rạp và Ngày chiếu (Accordion .toggle)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("toggle")) {
      const nextContent = e.target.nextElementSibling;
      if (nextContent && nextContent.classList.contains("content")) {
        nextContent.classList.toggle("show");
        e.target.classList.toggle("active");
      }
    }
  });

  // 4. Bấm vào suất chiếu (.time) -> Hiện Popup
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("time")) {
      const popup = document.getElementById("popup");
      if (popup) {
        popup.classList.add("show");
      }
    }
  });

  // Hàm chuyển Menu
  function openMenu(menuId) {
    const targetMenu = document.getElementById(menuId);
    if (!targetMenu) return;

    document.querySelectorAll(".menu").forEach((m) => m.classList.remove("show"));
    targetMenu.classList.add("show");

    if (menuStack[menuStack.length - 1] !== menuId) {
      menuStack.push(menuId);
    }
  }

  // Hàm quay lại
  function goBack() {
    if (menuStack.length > 1) {
      menuStack.pop();
      const previousMenuId = menuStack[menuStack.length - 1];
      
      document.querySelectorAll(".menu").forEach((m) => m.classList.remove("show"));
      const prevMenu = document.getElementById(previousMenuId);
      if (prevMenu) prevMenu.classList.add("show");
    } else {
      openMenu("mainMenu");
    }
  }
});

// 5. Hàm đóng Popup (khớp với onclick="closePopup()" trong index.html)
function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.remove("show");
  }
}
