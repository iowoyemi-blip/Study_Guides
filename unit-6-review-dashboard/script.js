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

function practiceCandidate(selected) {
  if (selected.practiceId) return PROBLEMS.find(p => p.id === selected.practiceId);
  const sameTopic = PROBLEMS.filter(p => p.topic === selected.topic && p.id !== selected.id);
  return sameTopic[0] || selected;
}

function renderPractice(type, overrideId) {
  const selected = PROBLEMS.find(p => p.id === state.selected);
  const item = overrideId ? PROBLEMS.find(p => p.id === overrideId) : practiceCandidate(selected);
  if (!item) return;
  $("practiceBox").classList.remove("hidden");
  $("practiceBox").innerHTML = `
    <h3>Similar Practice</h3>
    <p class="practice-prompt"><strong>Try companion problem ${escapeHTML(item.id)}.</strong> ${escapeHTML(item.prompt || item.title)}</p>
    <p class="practice-prompt">This problem appears on packet page ${item.page}.</p>
    <div class="answer-line"><input id="practiceInput" placeholder="Type your answer"><button class="primary" id="checkPractice">Check</button></div>
    <p class="practice-feedback" id="practiceFeedback"></p>
    <div class="action-row"><button class="soft" id="showPracticeAnswer">Show Answer</button><button class="ghost" id="newPractice">New Similar Problem</button></div>
    <div class="steps-box hidden" id="practiceSteps"><p class="answer-text">Answer: ${escapeHTML(item.answer)}</p><ol class="step-list">${item.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol></div>
  `;
  $("checkPractice").addEventListener("click", () => {
    const response = normalize($("practiceInput").value);
    const ok = acceptedAnswers(item.answer).includes(response);
    $("practiceFeedback").textContent = ok ? "Correct. Your answer matches this practice problem." : "Not yet. Compare notation, signs, coordinates, and units, then try again.";
    $("practiceFeedback").className = `practice-feedback ${ok ? "ok" : "no"}`;
  });
  $("showPracticeAnswer").addEventListener("click", () => $("practiceSteps").classList.remove("hidden"));
  $("newPractice").addEventListener("click", () => {
    const sameTopic = PROBLEMS.filter(p => p.topic === selected.topic && p.id !== selected.id && p.id !== item.id);
    const next = sameTopic[0] || practiceCandidate(selected);
    renderPractice(type, next.id);
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
  if (event.target.id === "startPractice" && state.selected) { renderPractice(PROBLEMS.find(p => p.id === state.selected).practiceType); }
  if (event.target.id === "showPacket") $("packetBox").classList.toggle("hidden");
  if (event.target.id === "resetProgress") { state.checked = []; saveProgress(); renderDashboard(); }
});

$("searchBox").addEventListener("input", (event) => { state.query = event.target.value; renderDashboard(); });
$("appTitle").textContent = APP.title;
$("courseName").textContent = APP.course;
renderFilters();
renderDashboard();
