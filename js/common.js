[...document.querySelectorAll(".slider")].map((sliderEl) => {
  const dotsEl = document.createElement("div");
  dotsEl.className = "slider-dots";
  sliderEl.offsetParent.appendChild(dotsEl);

  const dots = [...sliderEl.querySelectorAll("div")].map((_, i) => {
    const el = document.createElement("span");
    if (i === 0) el.className = "selected";
    dotsEl.appendChild(el);
    return el;
  });

  let offset = -1;
  let timeout;
  const next = () => {
    clearTimeout(timeout);
    offset = (offset + 1) % dots.length;
    dots.forEach((el) => (el.className = ""));
    dots[offset].className = "selected";
    sliderEl.style.marginLeft = offset * -100 + "%";
    timeout = setTimeout(next, 3000);
  };

  dots.forEach((el, i) =>
    el.addEventListener(
      "click",
      () => {
        offset = i - 1;
        next();
      },
      false
    )
  );

  next();
});
