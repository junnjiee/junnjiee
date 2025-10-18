document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector("article");
  const text = article.innerText;
  const words = text.trim().split(/\s+/).filter(Boolean);
  const estReadTime = Math.ceil(words.length / 150);

  const readTimeElement = document.getElementById("read-time");
  readTimeElement.textContent = estReadTime;
});
