document.addEventListener("DOMContentLoaded", () => {
  const copySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" fill="none">
<rect x="9" y="9" width="13" height="13" rx="2" stroke="#a6adc8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="#a6adc8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const tickSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24" fill="none">
<path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#a6e3a1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.title = "Copy code block"
    button.className = "copy-btn";
    button.innerHTML = copySvg;

    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(codeBlock.innerText);
      button.innerHTML = tickSvg;
      setTimeout(() => (button.innerHTML = copySvg), 1500);
    });

    const pre = codeBlock.parentNode;
    pre.appendChild(button);
  });
});
