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

