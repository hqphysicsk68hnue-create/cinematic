document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll("button");
  let history = [];

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // đi tới menu
      if (btn.dataset.target) {
        const current = btn.closest(".menu");
        const next = document.getElementById(btn.dataset.target);

        history.push(current.id);

        current.classList.remove("show");
        next.classList.add("show");
      }

      // quay lại
      if (btn.classList.contains("back")) {
        const current = btn.closest(".menu");
        const prev = history.pop();

        current.classList.remove("show");
        document.getElementById(prev).classList.add("show");
      }

    });
  });

});

// mở rộng menu
document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const next = btn.nextElementSibling;
    if (next) {
      next.classList.toggle("show");
    }
  });
});

// click giờ → popup
document.querySelectorAll(".time").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("popup").style.display = "block";
  });
});
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

#secret-zone {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 30px;
}

#note {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 9px;
  color: #888;
  background: rgba(255,255,255,0.9);
  padding: 5px;
  max-width: 220px;
}

#secret-zone:hover #note {
  display: block;
}

