const APP = {
  "title": "Unit 6 Review Dashboard",
  "course": "Algebra I - Polynomials"
};

const TOPICS = {
  "polyVocabulary": "Polynomial Vocabulary",
  "factoring": "Factoring Polynomials",
  "polyOperations": "Polynomial Operations"
};

const PROBLEMS = [
  {
    "id": "1A",
    "title": "Polynomial Vocabulary",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Which expression is NOT a polynomial?",
    "answer": "C. 5/x + 2",
    "steps": [
      "A variable in the denominator creates a negative exponent.",
      "Polynomials cannot have variables in denominators."
    ],
    "page": 1,
    "practiceId": "1B"
  },
  {
    "id": "1B",
    "title": "Polynomial Vocabulary",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Which expression is NOT a polynomial?",
    "answer": "B. 4x^(1/2) + 1",
    "steps": [
      "A square-root or fractional exponent on a variable is not allowed in a polynomial."
    ],
    "page": 1,
    "practiceId": "1A"
  },
  {
    "id": "2A",
    "title": "Classifying Polynomials",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Classify 5x⁴ - 3.",
    "answer": "B. quartic binomial",
    "steps": [
      "The highest degree is 4, so it is quartic.",
      "There are two terms, so it is a binomial."
    ],
    "page": 1,
    "practiceId": "2B"
  },
  {
    "id": "2B",
    "title": "Classifying Polynomials",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Classify -7x².",
    "answer": "A. quadratic monomial",
    "steps": [
      "The degree is 2, so it is quadratic.",
      "There is one term, so it is a monomial."
    ],
    "page": 1,
    "practiceId": "2A"
  },
  {
    "id": "3A",
    "title": "Greatest Common Factor",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "What is the GCF of 12x³ + 18x²?",
    "answer": "B. 6x²",
    "steps": [
      "The GCF of 12 and 18 is 6.",
      "The common variable factor is x²."
    ],
    "page": 2,
    "practiceId": "3B"
  },
  {
    "id": "3B",
    "title": "Greatest Common Factor",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "What is the GCF of 15a⁴ - 25a²?",
    "answer": "A. 5a²",
    "steps": [
      "The GCF of 15 and 25 is 5.",
      "The common variable factor is a²."
    ],
    "page": 2,
    "practiceId": "3A"
  },
  {
    "id": "4A",
    "title": "Standard Form",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Which is 4x - 7 + 3x² in standard form?",
    "answer": "B. 3x² + 4x - 7",
    "steps": [
      "Standard form orders terms by descending degree."
    ],
    "page": 2,
    "practiceId": "4B"
  },
  {
    "id": "4B",
    "title": "Standard Form",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Which is 6 - 2x³ + 5x in standard form?",
    "answer": "A. -2x³ + 5x + 6",
    "steps": [
      "Order by degree: cubic, linear, constant."
    ],
    "page": 2,
    "practiceId": "4A"
  },
  {
    "id": "5A",
    "title": "Multiplying Binomials",
    "topic": "polyOperations",
    "practiceType": "polyOperations",
    "prompt": "Expand (x + 4)(x - 3).",
    "answer": "A. x² + x - 12",
    "steps": [
      "Multiply: x² - 3x + 4x - 12.",
      "Combine like terms: x² + x - 12."
    ],
    "page": 3,
    "practiceId": "5B"
  },
  {
    "id": "5B",
    "title": "Multiplying Binomials",
    "topic": "polyOperations",
    "practiceType": "polyOperations",
    "prompt": "Expand (x - 5)(x + 2).",
    "answer": "A. x² - 3x - 10",
    "steps": [
      "Multiply: x² + 2x - 5x - 10.",
      "Combine like terms: x² - 3x - 10."
    ],
    "page": 3,
    "practiceId": "5A"
  },
  {
    "id": "6A",
    "title": "Factoring Trinomials",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor x² + 7x + 12.",
    "answer": "A. (x + 3)(x + 4)",
    "steps": [
      "Find numbers that multiply to 12 and add to 7.",
      "3 and 4 work."
    ],
    "page": 3,
    "practiceId": "6B"
  },
  {
    "id": "6B",
    "title": "Factoring Trinomials",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor x² - 9x + 20.",
    "answer": "A. (x - 4)(x - 5)",
    "steps": [
      "Find numbers that multiply to 20 and add to -9.",
      "-4 and -5 work."
    ],
    "page": 3,
    "practiceId": "6A"
  },
  {
    "id": "7-A",
    "title": "Classifying Polynomials",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Classify 3x³ - 2x + 8 by degree and number of terms.",
    "answer": "cubic trinomial",
    "steps": [
      "Highest degree is 3, so cubic.",
      "There are three terms, so trinomial."
    ],
    "page": 4,
    "practiceId": "7-B"
  },
  {
    "id": "7-B",
    "title": "Classifying Polynomials",
    "topic": "polyVocabulary",
    "practiceType": "polyVocabulary",
    "prompt": "Classify -6x⁴ + 9x² by degree and number of terms.",
    "answer": "quartic binomial",
    "steps": [
      "Highest degree is 4, so quartic.",
      "There are two terms, so binomial."
    ],
    "page": 4,
    "practiceId": "7-A"
  },
  {
    "id": "8-A",
    "title": "Adding Polynomials",
    "topic": "polyOperations",
    "practiceType": "polyOperations",
    "prompt": "Simplify (4x² - 3x + 7) + (2x² + 8x - 5).",
    "answer": "6x² + 5x + 2",
    "steps": [
      "Combine x² terms, x terms, and constants.",
      "4x² + 2x² = 6x²; -3x + 8x = 5x; 7 - 5 = 2."
    ],
    "page": 4,
    "practiceId": "8-B"
  },
  {
    "id": "8-B",
    "title": "Subtracting Polynomials",
    "topic": "polyOperations",
    "practiceType": "polyOperations",
    "prompt": "Simplify (7x² + 2x - 4) - (3x² - 5x + 9).",
    "answer": "4x² + 7x - 13",
    "steps": [
      "Distribute the negative to the second polynomial.",
      "7x² - 3x² = 4x²; 2x + 5x = 7x; -4 - 9 = -13."
    ],
    "page": 4,
    "practiceId": "8-A"
  },
  {
    "id": "9-A",
    "title": "Multiplying Polynomials",
    "topic": "polyOperations",
    "practiceType": "polyOperations",
    "prompt": "Multiply (2x + 3)(x² - 4x + 5).",
    "answer": "2x³ - 5x² - 2x + 15",
    "steps": [
      "Distribute 2x and 3.",
      "2x³ - 8x² + 10x + 3x² - 12x + 15.",
      "Combine like terms."
    ],
    "page": 5,
    "practiceId": "9-B"
  },
  {
    "id": "9-B",
    "title": "Multiplying Polynomials",
    "topic": "polyOperations",
    "practiceType": "polyOperations",
    "prompt": "Multiply (x - 2)(3x² + x - 6).",
    "answer": "3x³ - 5x² - 8x + 12",
    "steps": [
      "Distribute x and -2.",
      "3x³ + x² - 6x - 6x² - 2x + 12.",
      "Combine like terms."
    ],
    "page": 5,
    "practiceId": "9-A"
  },
  {
    "id": "10-A",
    "title": "Factoring GCF",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor 18x³ - 24x² completely.",
    "answer": "6x²(3x - 4)",
    "steps": [
      "The GCF is 6x².",
      "Divide each term by 6x²."
    ],
    "page": 5,
    "practiceId": "10-B"
  },
  {
    "id": "10-B",
    "title": "Factoring GCF",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor 20a⁴ + 35a² completely.",
    "answer": "5a²(4a² + 7)",
    "steps": [
      "The GCF is 5a².",
      "Divide each term by 5a²."
    ],
    "page": 5,
    "practiceId": "10-A"
  },
  {
    "id": "11-A",
    "title": "Factoring Trinomials",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor x² + 2x - 24.",
    "answer": "(x + 6)(x - 4)",
    "steps": [
      "Find factors of -24 that add to 2.",
      "6 and -4 work."
    ],
    "page": 6,
    "practiceId": "11-B"
  },
  {
    "id": "11-B",
    "title": "Factoring Trinomials",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor x² - 5x - 36.",
    "answer": "(x - 9)(x + 4)",
    "steps": [
      "Find factors of -36 that add to -5.",
      "-9 and 4 work."
    ],
    "page": 6,
    "practiceId": "11-A"
  },
  {
    "id": "12-A",
    "title": "Difference of Squares",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor 9x² - 49.",
    "answer": "(3x - 7)(3x + 7)",
    "steps": [
      "Recognize a² - b².",
      "9x² = (3x)² and 49 = 7²."
    ],
    "page": 6,
    "practiceId": "12-B"
  },
  {
    "id": "12-B",
    "title": "Difference of Squares",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor 25x² - 16.",
    "answer": "(5x - 4)(5x + 4)",
    "steps": [
      "Recognize a² - b².",
      "25x² = (5x)² and 16 = 4²."
    ],
    "page": 6,
    "practiceId": "12-A"
  },
  {
    "id": "13-A",
    "title": "Perfect-Square Trinomials",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor x² + 10x + 25.",
    "answer": "(x + 5)²",
    "steps": [
      "25 = 5² and 10x = 2(x)(5).",
      "So the trinomial is a perfect square."
    ],
    "page": 7,
    "practiceId": "13-B"
  },
  {
    "id": "13-B",
    "title": "Perfect-Square Trinomials",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Factor x² - 14x + 49.",
    "answer": "(x - 7)²",
    "steps": [
      "49 = 7² and -14x = 2(x)(-7).",
      "So the trinomial is a perfect square."
    ],
    "page": 7,
    "practiceId": "13-A"
  },
  {
    "id": "14-A",
    "title": "Solving by Factoring",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Solve x² + x - 20 = 0.",
    "answer": "x = -5 or x = 4",
    "steps": [
      "Factor: (x + 5)(x - 4) = 0.",
      "Set each factor equal to zero."
    ],
    "page": 7,
    "practiceId": "14-B"
  },
  {
    "id": "14-B",
    "title": "Solving by Factoring",
    "topic": "factoring",
    "practiceType": "factoring",
    "prompt": "Solve x² - 3x - 28 = 0.",
    "answer": "x = -4 or x = 7",
    "steps": [
      "Factor: (x - 7)(x + 4) = 0.",
      "Set each factor equal to zero."
    ],
    "page": 7,
    "practiceId": "14-A"
  }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit6ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit6ReviewChecked", JSON.stringify(state.checked));
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[ch]));
}

function renderFilters() {
  $("topicFilters").innerHTML = [["all", "All Topics"], ...Object.entries(TOPICS)].map(([id, label]) =>
    `<button class="topic-filter ${state.topic === id ? "active" : ""}" data-topic="${id}">${escapeHTML(label)}</button>`
  ).join("");
}

function filteredProblems() {
  const q = state.query.trim().toLowerCase();
  return PROBLEMS.filter((p) => {
    const haystack = `${p.id} ${p.title} ${TOPICS[p.topic]} ${p.answer}`.toLowerCase();
    const matchesTopic = state.topic === "all" || p.topic === state.topic;
    const matchesQuery = !q || haystack.includes(q);
    return matchesTopic && matchesQuery;
  });
}

function tile(p) {
  return `<button class="problem-tile ${state.selected === p.id ? "active" : ""} ${state.checked.includes(p.id) ? "checked" : ""}" data-problem="${p.id}" title="${escapeHTML(TOPICS[p.topic])}">${p.id}</button>`;
}

function renderDashboard() {
  const problems = filteredProblems();
  $("checkedCount").textContent = state.checked.length;
  $("reviewCount").textContent = PROBLEMS.filter(p => p.review).length;
  $("panelTitle").textContent = state.view === "packet" ? "Packet Order" : "Topic View";
  $("panelSubtitle").textContent = state.view === "packet" ? "Click a problem number to check the final answer first." : "Problems are grouped by review topic.";
  if (state.view === "topic") {
    $("problemGrid").className = "";
    $("problemGrid").innerHTML = Object.keys(TOPICS).map(topic => {
      const items = problems.filter(p => p.topic === topic);
      return items.length ? `<section class="topic-group"><h3>${escapeHTML(TOPICS[topic])}</h3><div class="problem-grid">${items.map(tile).join("")}</div></section>` : "";
    }).join("") || "<p>No matching problems.</p>";
  } else {
    $("problemGrid").className = "problem-grid";
    $("problemGrid").innerHTML = problems.map(tile).join("") || "<p>No matching problems.</p>";
  }
}

function renderDetail(id) {
  const p = PROBLEMS.find(item => item.id === id);
  if (!p) return;
  state.selected = id;
  const pagePath = `packet-pages/page-${String(p.page).padStart(2, "0")}.png`;
  $("detailPanel").innerHTML = `
    <div class="detail-kicker">
      <span>${escapeHTML(p.id)} · ${escapeHTML(TOPICS[p.topic])} · Page ${p.page}</span>
      <span class="badge">Answer key</span>
    </div>
    <h2>Problem ${escapeHTML(p.id)}</h2>
    <div class="answer-box">
      <h3>Original Prompt</h3>
      <p class="answer-text">${escapeHTML(p.prompt || p.title)}</p>
    </div>
    <div class="answer-box">
      <h3>Final Answer</h3>
      <p class="answer-text hidden" id="answerText">${escapeHTML(p.answer)}</p>
      <button class="primary" id="showAnswer">Show Final Answer</button>
    </div>
    <div class="steps-box hidden" id="stepsBox">
      <h3>Solution Steps</h3>
      <ol class="step-list">${p.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
    </div>
    <div class="action-row">
      <button class="soft hidden" id="showSteps">Reveal Steps</button>
      <button class="soft" id="markChecked">Mark Checked</button>
      <button class="ghost" id="startPractice">Similar Practice</button>
      <button class="ghost" id="showPacket">View Packet Page</button>
    </div>
    <div class="practice-box hidden" id="practiceBox"></div>
    <div class="packet-box hidden" id="packetBox"><img class="packet-thumb" src="${pagePath}" alt="Packet page ${p.page}"></div>
  `;
  renderDashboard();
}

function normalize(value) {
  return String(value).toLowerCase()
    .replace(/choice|answer|approximately|approx\.?/g, "")
    .replace(/[\s$]/g, "")
    .replace(/[{}]/g, "")
    .replace(/[.]/g, "")
    .replace(/−/g, "-")
    .replace(/≤/g, "<=")
    .replace(/≥/g, ">=")
    .replace(/∞/g, "infinity")
    .replace(/≈/g, "")
    .replace(/\\/g, "")
    .replace(/\bpercent\b/g, "%");
}

function acceptedAnswers(answer) {
  const text = String(answer || "");
  const items = [text];
  const choice = text.match(/^([A-E])\./i);
  if (choice) {
    items.push(choice[1]);
    items.push(text.replace(/^[A-E]\.\s*/i, ""));
  }
  return items.map(normalize);
}

function practiceResult(prompt, answer, accepted, steps) {
  return { prompt, answer, accepted: accepted || [], steps };
}

const practiceBanks = {
  polynomialVocabulary: [
    () => practiceResult("Which expression is NOT a polynomial: 3x^2 - 4x + 1, 7x^3, 2/x + 5, or -8?", "2/x + 5", ["2/x+5"], ["A polynomial cannot have a variable in the denominator.", "2/x has x in the denominator, so it is not a polynomial."]),
    () => practiceResult("Which expression is NOT a polynomial: x^4 - 2, 5x + 9, sqrt(x) + 1, or 6?", "sqrt(x) + 1", ["sqrt(x)+1"], ["A square root of x means the variable has exponent 1/2.", "Polynomial variable exponents must be whole numbers."]),
    () => practiceResult("Which expression is a polynomial: 4/x, x^-2 + 3, 6x^2 - x + 8, or 5/(x + 1)?", "6x^2 - x + 8", ["6x^2-x+8"], ["Variables in denominators and negative exponents are not allowed.", "6x^2 - x + 8 has whole-number exponents only."]),
    () => practiceResult("Is 9x^3 - 2x + 4 a polynomial? Explain briefly.", "yes, it is a polynomial", ["yes"], ["Each variable exponent is a whole number.", "There are no variables in denominators or radicals."])
  ],
  classifyPolynomial: [
    () => practiceResult("Classify 8x^3 - 5x + 2 by degree and number of terms.", "cubic trinomial", ["cubictrinomial"], ["The highest exponent is 3, so the degree is cubic.", "There are three terms, so it is a trinomial."]),
    () => practiceResult("Classify -4x^2 + 11 by degree and number of terms.", "quadratic binomial", ["quadraticbinomial"], ["The highest exponent is 2, so it is quadratic.", "There are two terms, so it is a binomial."]),
    () => practiceResult("Classify 7x^4 by degree and number of terms.", "quartic monomial", ["quarticmonomial"], ["The highest exponent is 4, so it is quartic.", "There is one term, so it is a monomial."]),
    () => practiceResult("Classify -2x^5 + 3x^2 - 9 by degree and number of terms.", "quintic trinomial", ["quintictrinomial"], ["The highest exponent is 5, so it is quintic.", "There are three terms, so it is a trinomial."])
  ],
  standardForm: [
    () => practiceResult("Write 5 - 3x^3 + 2x in standard form.", "-3x^3 + 2x + 5", ["-3x^3+2x+5"], ["Standard form orders terms from highest degree to lowest degree.", "The cubic term comes first, then the linear term, then the constant."]),
    () => practiceResult("Write 7x - 4 + 6x^2 in standard form.", "6x^2 + 7x - 4", ["6x^2+7x-4"], ["Put the x^2 term first.", "Then write the x term and the constant."]),
    () => practiceResult("Write -9 + x^4 - 2x^2 in standard form.", "x^4 - 2x^2 - 9", ["x^4-2x^2-9"], ["Order by degree: fourth degree, second degree, constant."]),
    () => practiceResult("Write 3x + 8x^3 - x^2 + 1 in standard form.", "8x^3 - x^2 + 3x + 1", ["8x^3-x^2+3x+1"], ["Order terms by descending exponent.", "Keep each term's sign with the term."])
  ],
  gcfOnly: [
    () => practiceResult("Find the GCF of 14x^4 + 21x^2.", "7x^2", ["7x^2"], ["The GCF of 14 and 21 is 7.", "The lowest shared power of x is x^2."]),
    () => practiceResult("Find the GCF of 18a^5 - 12a^3.", "6a^3", ["6a^3"], ["The GCF of 18 and 12 is 6.", "The common variable factor is a^3."]),
    () => practiceResult("Find the GCF of 16m^3 + 24m^2.", "8m^2", ["8m^2"], ["The GCF of 16 and 24 is 8.", "The common variable factor is m^2."]),
    () => practiceResult("Find the GCF of 30p^6 - 45p^4.", "15p^4", ["15p^4"], ["The GCF of 30 and 45 is 15.", "The lowest shared power is p^4."])
  ],
  multiplyBinomials: [
    () => practiceResult("Expand (x + 6)(x - 2).", "x^2 + 4x - 12", ["x^2+4x-12"], ["Multiply: x^2 - 2x + 6x - 12.", "Combine like terms to get x^2 + 4x - 12."]),
    () => practiceResult("Expand (x - 7)(x + 3).", "x^2 - 4x - 21", ["x^2-4x-21"], ["Multiply: x^2 + 3x - 7x - 21.", "Combine like terms."]),
    () => practiceResult("Expand (2x + 1)(x + 5).", "2x^2 + 11x + 5", ["2x^2+11x+5"], ["Multiply each term in the first binomial by each term in the second.", "2x^2 + 10x + x + 5 = 2x^2 + 11x + 5."]),
    () => practiceResult("Expand (3x - 4)(x - 2).", "3x^2 - 10x + 8", ["3x^2-10x+8"], ["Multiply: 3x^2 - 6x - 4x + 8.", "Combine like terms."])
  ],
  factorTrinomials: [
    () => practiceResult("Factor x^2 + 9x + 20.", "(x + 4)(x + 5)", ["(x+4)(x+5)", "(x+5)(x+4)"], ["Find factors of 20 that add to 9.", "4 and 5 work."]),
    () => practiceResult("Factor x^2 - 8x + 15.", "(x - 3)(x - 5)", ["(x-3)(x-5)", "(x-5)(x-3)"], ["Find factors of 15 that add to -8.", "-3 and -5 work."]),
    () => practiceResult("Factor x^2 + x - 30.", "(x + 6)(x - 5)", ["(x+6)(x-5)", "(x-5)(x+6)"], ["Find factors of -30 that add to 1.", "6 and -5 work."]),
    () => practiceResult("Factor x^2 - 4x - 21.", "(x - 7)(x + 3)", ["(x-7)(x+3)", "(x+3)(x-7)"], ["Find factors of -21 that add to -4.", "-7 and 3 work."])
  ],
  addSubtractPolynomials: [
    () => practiceResult("Simplify (3x^2 + 5x - 8) + (4x^2 - 2x + 1).", "7x^2 + 3x - 7", ["7x^2+3x-7"], ["Combine like terms.", "3x^2 + 4x^2 = 7x^2, 5x - 2x = 3x, and -8 + 1 = -7."]),
    () => practiceResult("Simplify (9x^2 - x + 6) - (2x^2 + 4x - 3).", "7x^2 - 5x + 9", ["7x^2-5x+9"], ["Distribute the subtraction to the second polynomial.", "9x^2 - 2x^2 = 7x^2, -x - 4x = -5x, and 6 - (-3) = 9."]),
    () => practiceResult("Simplify (5x^3 - 2x + 4) + (x^3 + 7x - 10).", "6x^3 + 5x - 6", ["6x^3+5x-6"], ["Combine cubic terms, linear terms, and constants.", "5x^3 + x^3 = 6x^3, -2x + 7x = 5x, and 4 - 10 = -6."]),
    () => practiceResult("Simplify (6x^2 + 3x - 1) - (x^2 - 8x + 5).", "5x^2 + 11x - 6", ["5x^2+11x-6"], ["Subtract each term in the second polynomial.", "6x^2 - x^2 = 5x^2, 3x - (-8x) = 11x, and -1 - 5 = -6."])
  ],
  multiplyPolynomials: [
    () => practiceResult("Multiply (x + 4)(2x^2 - x + 3).", "2x^3 + 7x^2 - x + 12", ["2x^3+7x^2-x+12"], ["Distribute x and 4.", "2x^3 - x^2 + 3x + 8x^2 - 4x + 12.", "Combine like terms."]),
    () => practiceResult("Multiply (2x - 1)(x^2 + 3x - 5).", "2x^3 + 5x^2 - 13x + 5", ["2x^3+5x^2-13x+5"], ["Distribute 2x and -1.", "2x^3 + 6x^2 - 10x - x^2 - 3x + 5.", "Combine like terms."]),
    () => practiceResult("Multiply (x - 3)(3x^2 + 2x + 1).", "3x^3 - 7x^2 - 5x - 3", ["3x^3-7x^2-5x-3"], ["Distribute x and -3.", "3x^3 + 2x^2 + x - 9x^2 - 6x - 3.", "Combine like terms."]),
    () => practiceResult("Multiply (3x + 2)(x^2 - 4x + 6).", "3x^3 - 10x^2 + 10x + 12", ["3x^3-10x^2+10x+12"], ["Distribute 3x and 2.", "3x^3 - 12x^2 + 18x + 2x^2 - 8x + 12.", "Combine like terms."])
  ],
  factorGcf: [
    () => practiceResult("Factor 12x^3 + 18x^2 completely.", "6x^2(2x + 3)", ["6x^2(2x+3)"], ["The GCF is 6x^2.", "Divide each term by 6x^2."]),
    () => practiceResult("Factor 15a^4 - 10a^2 completely.", "5a^2(3a^2 - 2)", ["5a^2(3a^2-2)"], ["The GCF is 5a^2.", "Factor it out of each term."]),
    () => practiceResult("Factor 21m^5 + 14m^3 completely.", "7m^3(3m^2 + 2)", ["7m^3(3m^2+2)"], ["The GCF is 7m^3.", "Divide both terms by the GCF."]),
    () => practiceResult("Factor 24p^4 - 36p^2 completely.", "12p^2(2p^2 - 3)", ["12p^2(2p^2-3)"], ["The GCF is 12p^2.", "Factor it out."])
  ],
  differenceSquares: [
    () => practiceResult("Factor 16x^2 - 81.", "(4x - 9)(4x + 9)", ["(4x-9)(4x+9)", "(4x+9)(4x-9)"], ["This is a difference of squares.", "16x^2 = (4x)^2 and 81 = 9^2."]),
    () => practiceResult("Factor 49x^2 - 25.", "(7x - 5)(7x + 5)", ["(7x-5)(7x+5)", "(7x+5)(7x-5)"], ["Use a^2 - b^2 = (a - b)(a + b).", "49x^2 = (7x)^2 and 25 = 5^2."]),
    () => practiceResult("Factor x^2 - 64.", "(x - 8)(x + 8)", ["(x-8)(x+8)", "(x+8)(x-8)"], ["x^2 and 64 are both squares.", "Use the difference-of-squares pattern."]),
    () => practiceResult("Factor 36a^2 - 121.", "(6a - 11)(6a + 11)", ["(6a-11)(6a+11)", "(6a+11)(6a-11)"], ["36a^2 = (6a)^2 and 121 = 11^2.", "Write conjugate factors."])
  ],
  perfectSquare: [
    () => practiceResult("Factor x^2 + 12x + 36.", "(x + 6)^2", ["(x+6)^2", "(x+6)(x+6)"], ["36 = 6^2 and 12x = 2(x)(6).", "The trinomial is a perfect square."]),
    () => practiceResult("Factor x^2 - 18x + 81.", "(x - 9)^2", ["(x-9)^2", "(x-9)(x-9)"], ["81 = 9^2 and -18x = 2(x)(-9).", "The factor is squared."]),
    () => practiceResult("Factor x^2 + 16x + 64.", "(x + 8)^2", ["(x+8)^2", "(x+8)(x+8)"], ["64 = 8^2 and 16x = 2(x)(8).", "So the factors are identical."]),
    () => practiceResult("Factor x^2 - 6x + 9.", "(x - 3)^2", ["(x-3)^2", "(x-3)(x-3)"], ["9 = 3^2 and -6x = 2(x)(-3).", "This is a perfect-square trinomial."])
  ],
  solveFactoring: [
    () => practiceResult("Solve x^2 + 8x + 15 = 0.", "x = -3 or x = -5", ["-3,-5", "-5,-3"], ["Factor: (x + 3)(x + 5) = 0.", "Set each factor equal to zero."]),
    () => practiceResult("Solve x^2 - x - 12 = 0.", "x = -3 or x = 4", ["-3,4", "4,-3"], ["Factor: (x - 4)(x + 3) = 0.", "Set each factor equal to zero."]),
    () => practiceResult("Solve x^2 - 10x + 21 = 0.", "x = 3 or x = 7", ["3,7", "7,3"], ["Factor: (x - 3)(x - 7) = 0.", "Set each factor equal to zero."]),
    () => practiceResult("Solve x^2 + 3x - 28 = 0.", "x = -7 or x = 4", ["-7,4", "4,-7"], ["Factor: (x + 7)(x - 4) = 0.", "Set each factor equal to zero."])
  ]
};

let practiceCounters = {};

function practiceTypeForProblem(problem) {
  const title = (problem?.title || "").toLowerCase();
  if (title === "polynomial vocabulary") return "polynomialVocabulary";
  if (title.includes("classifying")) return "classifyPolynomial";
  if (title.includes("standard form")) return "standardForm";
  if (title === "greatest common factor") return "gcfOnly";
  if (title.includes("multiplying binomials")) return "multiplyBinomials";
  if (title.includes("adding") || title.includes("subtracting")) return "addSubtractPolynomials";
  if (title.includes("multiplying polynomials")) return "multiplyPolynomials";
  if (title.includes("factoring gcf")) return "factorGcf";
  if (title.includes("difference of squares")) return "differenceSquares";
  if (title.includes("perfect-square")) return "perfectSquare";
  if (title.includes("solving by factoring")) return "solveFactoring";
  if (title.includes("factoring trinomials")) return "factorTrinomials";
  return "classifyPolynomial";
}

function nextPractice(type, reset = false) {
  const bank = practiceBanks[type] || practiceBanks.classifyPolynomial;
  const key = `${state.selected || "none"}:${type}`;
  if (reset) practiceCounters[key] = 0;
  const index = practiceCounters[key] || 0;
  practiceCounters[key] = index + 1;
  return bank[index % bank.length]();
}

function renderPractice(type, reset = false) {
  const item = nextPractice(type, reset);
  if (!item) return;
  $("practiceBox").classList.remove("hidden");
  $("practiceBox").innerHTML = `
    <h3>Similar Practice</h3>
    <p class="practice-prompt"><strong>New practice for this same skill.</strong> ${escapeHTML(item.prompt)}</p>
    <div class="answer-line"><input id="practiceInput" placeholder="Type your answer"><button class="primary" id="checkPractice">Check</button></div>
    <p class="practice-feedback" id="practiceFeedback"></p>
    <div class="action-row"><button class="soft" id="showPracticeAnswer">Show Answer</button><button class="ghost" id="newPractice">New Similar Problem</button></div>
    <div class="steps-box hidden" id="practiceSteps"><p class="answer-text">Answer: ${escapeHTML(item.answer)}</p><ol class="step-list">${item.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol></div>
  `;
  $("checkPractice").addEventListener("click", () => {
    const response = normalize($("practiceInput").value);
    const accepted = [...acceptedAnswers(item.answer), ...item.accepted.map(normalize)];
    const ok = accepted.includes(response);
    $("practiceFeedback").textContent = ok ? "Correct. Your answer matches this practice problem." : "Not yet. Compare notation, signs, coordinates, and units, then try again.";
    $("practiceFeedback").className = `practice-feedback ${ok ? "ok" : "no"}`;
  });
  $("showPracticeAnswer").addEventListener("click", () => $("practiceSteps").classList.remove("hidden"));
  $("newPractice").addEventListener("click", () => {
    renderPractice(type);
  });
}

document.addEventListener("click", (event) => {
  const problemButton = event.target.closest("[data-problem]");
  if (problemButton) return renderDetail(problemButton.dataset.problem);
  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) { state.topic = topicButton.dataset.topic; renderFilters(); renderDashboard(); return; }
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) { state.view = viewButton.dataset.view; document.querySelectorAll("[data-view]").forEach(btn => btn.classList.toggle("active", btn === viewButton)); renderDashboard(); return; }
  if (event.target.id === "showAnswer") { $("answerText").classList.remove("hidden"); $("showAnswer").classList.add("hidden"); $("showSteps").classList.remove("hidden"); }
  if (event.target.id === "showSteps") { $("stepsBox").classList.remove("hidden"); $("showSteps").classList.add("hidden"); }
  if (event.target.id === "markChecked" && state.selected) { if (!state.checked.includes(state.selected)) state.checked.push(state.selected); saveProgress(); renderDashboard(); }
  if (event.target.id === "startPractice" && state.selected) { renderPractice(practiceTypeForProblem(PROBLEMS.find(p => p.id === state.selected)), true); }
  if (event.target.id === "showPacket") $("packetBox").classList.toggle("hidden");
  if (event.target.id === "resetProgress") { state.checked = []; saveProgress(); renderDashboard(); }
});

$("searchBox").addEventListener("input", (event) => { state.query = event.target.value; renderDashboard(); });
$("appTitle").textContent = APP.title;
$("courseName").textContent = APP.course;
renderFilters();
renderDashboard();
