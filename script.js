const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
// ============
function newQuote() {
  loading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (!quote.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = quote.author;
  }
  if (quote.text.length > 120) {
    author.classList.add("long-quote");
  } else {
    author.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  complete();
}
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}
function twittThis() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}
twitterBtn.addEventListener("click", twittThis);
newQuoteBtn.addEventListener("click", newQuote);
// ===== on load ======
newQuote();
