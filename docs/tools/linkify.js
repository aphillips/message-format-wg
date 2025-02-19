function linkify() {
  const terms = findTerms();
  const missing = new Set();
  const used = new Set();
  const links = document.querySelectorAll("em");

  links.forEach((item) => {
    const target = generateId(item.textContent);
    if (terms.has(target)) {
      const el = item.lastElementChild ?? item;
      el.innerHTML = `<a href="#${target}">${item.textContent}</a>`;

      used.add(target);
    } else {
      missing.add(target);
    }
  });

  if (missing.size > 0) {
    console.log("Potentially missing definitions:");
    Array.from(missing).sort().forEach((item) => {
      console.log(item);
    });
  }

  if (terms.size === used.size) return;
  console.log("Some definitions were not used:");
  Array.from(terms).forEach((item) => {
    if (!used.has(item)) {
      console.log(item);
    }
  });
}

function findTerms() {
  const terms = new Set();
  let duplicateCount = 0;
  document.querySelectorAll("dfn").forEach((item) => {
    const term = generateId(item.textContent);
    if (term.length === 0) return; // skip empty terms
    if (terms.has(term)) {
      console.log(`Duplicate term: ${term}`);
      duplicateCount++;
    }
    terms.add(term);
    item.setAttribute("id", term);
  });

  if (duplicateCount > 0) {
    console.log("Duplicate Terms: " + duplicateCount);
  }
  return terms;
}

function generateId(term) {
  const id = term.toLowerCase().replace(/\s+/g, "-"); // Replaces spaces safely
  if (id.endsWith("rategies")) {
    return id.slice(0, -3) + "y";
  } else if (id.endsWith("s") && id !== "status") {
    return id.slice(0, -1);
  }
  return id;
}
