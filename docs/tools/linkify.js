// Link terms (enclosed in <em>) to definitions (enclosed in <dfn>)

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
  // report missing terms
  // because the spec uses italics for other reasons (besides linking terms)
  // not all of these are errors
  // (leave out sort if you want it in file order)
  if (missing.size > 0) {
      console.log("Potentially missing definitions:");
      Array.from(missing).sort().forEach((item)=> {
          console.log(item);
      });
  }

  if (terms.size === used.size) return;
  console.log("Some definitions were not used:");
  // report definitions that are never used in the specification
  Array.from(terms).forEach(item)=> {
      if (used.has(item)) continue;
      console.log(item);
  }
}

function findTerms() {
  const terms = new Set();
  var duplicateCount = 0;
  document.querySelectorAll("dfn").forEach((item) => {
    // console.log(index + ": " + item.textContent);
    const term = generateId(item.textContent);
    // warn about duplicate definitions in the spec
    if (terms.has(term)) {
        console.log(term);
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
  const id = term.toLowerCase().replaceAll(" ", "-");
  if (id.endsWith("rategies")) {
    // found in the bidi isolation strategies
    return id.slice(0, -3) + "y";
  } else if (id.endsWith("s") && id !== "status") {
    // regular English plurals
    return id.slice(0, -1);
  }
  return id;
}
