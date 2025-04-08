import DOMPurify from 'dompurify';

export const truncateHTML = (html, limit) => {
  const div = document.createElement("div");
  div.innerHTML = DOMPurify.sanitize(html); // clean the HTML first

  let text = div.textContent || div.innerText || "";
  text = text.trim().substring(0, limit) + (text.length > limit ? "..." : "");

  return text;
};