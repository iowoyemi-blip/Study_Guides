const APP = {
  "title": "Unit 7 Quest Review Dashboard",
  "course": "Algebra I - Quadratic Functions"
};

const TOPICS = {
  "quadFeatures": "Quadratic Features",
  "quadSolving": "Solving Quadratics"
};

const PROBLEMS = [
  {
    "id": "1A",
    "title": "Y-Intercepts",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What is the y-intercept of f(x) = 2x² - 3x + 5?",
    "answer": "C. (0, 5)",
    "steps": [
      "The y-intercept occurs when x = 0.",
      "f(0) = 5."
    ],
    "page": 1,
    "practiceId": "1B"
  },
  {
    "id": "1B",
    "title": "Y-Intercepts",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What is the y-intercept of g(x) = -x² + 4x - 7?",
    "answer": "A. (0, -7)",
    "steps": [
      "Set x = 0.",
      "g(0) = -7."
    ],
    "page": 1,
    "practiceId": "1A"
  },
  {
    "id": "2A",
    "title": "Axis of Symmetry",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What is the axis of symmetry of f(x) = x² - 6x + 8?",
    "answer": "B. x = 3",
    "steps": [
      "Use x = -b/(2a).",
      "x = -(-6)/(2(1)) = 3."
    ],
    "page": 1,
    "practiceId": "2B"
  },
  {
    "id": "2B",
    "title": "Axis of Symmetry",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What is the axis of symmetry of f(x) = x² + 10x + 7?",
    "answer": "A. x = -5",
    "steps": [
      "Use x = -b/(2a).",
      "x = -10/2 = -5."
    ],
    "page": 1,
    "practiceId": "2A"
  },
  {
    "id": "3A",
    "title": "Vertex",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What is the vertex of f(x) = (x - 2)² - 9?",
    "answer": "A. (2, -9)",
    "steps": [
      "Vertex form is y = a(x - h)² + k.",
      "The vertex is (h, k)."
    ],
    "page": 2,
    "practiceId": "3B"
  },
  {
    "id": "3B",
    "title": "Vertex",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What is the vertex of f(x) = (x + 4)² + 1?",
    "answer": "B. (-4, 1)",
    "steps": [
      "x + 4 means h = -4.",
      "k = 1."
    ],
    "page": 2,
    "practiceId": "3A"
  },
  {
    "id": "4A",
    "title": "Factoring Roots",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve x² + 9x + 20 = 0.",
    "answer": "B. x = -4, -5",
    "steps": [
      "Factor: (x + 4)(x + 5) = 0.",
      "Set each factor equal to zero."
    ],
    "page": 2,
    "practiceId": "4B"
  },
  {
    "id": "4B",
    "title": "Factoring Roots",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve x² - 8x + 15 = 0.",
    "answer": "A. x = 3, 5",
    "steps": [
      "Factor: (x - 3)(x - 5) = 0.",
      "Set each factor equal to zero."
    ],
    "page": 2,
    "practiceId": "4A"
  },
  {
    "id": "5A",
    "title": "Square Root Property",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve x² = 49.",
    "answer": "C. x = -7 or 7",
    "steps": [
      "Take both positive and negative square roots.",
      "x = ±7."
    ],
    "page": 3,
    "practiceId": "5B"
  },
  {
    "id": "5B",
    "title": "Square Root Property",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve (x - 3)² = 25.",
    "answer": "A. x = -2 or 8",
    "steps": [
      "x - 3 = ±5.",
      "So x = 8 or x = -2."
    ],
    "page": 3,
    "practiceId": "5A"
  },
  {
    "id": "6A",
    "title": "Opening Direction",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "Which function opens downward?",
    "answer": "C. y = -x² + 4x",
    "steps": [
      "A negative leading coefficient makes a parabola open downward."
    ],
    "page": 3,
    "practiceId": "6B"
  },
  {
    "id": "6B",
    "title": "Opening Direction",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "Which function opens upward?",
    "answer": "C. y = 3x² + x - 4",
    "steps": [
      "A positive leading coefficient makes a parabola open upward."
    ],
    "page": 3,
    "practiceId": "6A"
  },
  {
    "id": "7A",
    "title": "X-Intercepts",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What are the x-intercepts of y = (x - 1)(x + 6)?",
    "answer": "A. (1, 0), (-6, 0)",
    "steps": [
      "Set each factor equal to zero.",
      "x = 1 or x = -6."
    ],
    "page": 4,
    "practiceId": "7B"
  },
  {
    "id": "7B",
    "title": "X-Intercepts",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "What are the x-intercepts of y = (x + 2)(x - 7)?",
    "answer": "A. (-2, 0), (7, 0)",
    "steps": [
      "Set each factor equal to zero.",
      "x = -2 or x = 7."
    ],
    "page": 4,
    "practiceId": "7A"
  },
  {
    "id": "8A",
    "title": "Quadratic Formula Setup",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "For x² + 5x - 6 = 0, what are a, b, and c?",
    "answer": "A. a = 1, b = 5, c = -6",
    "steps": [
      "Standard form is ax² + bx + c = 0."
    ],
    "page": 4,
    "practiceId": "8B"
  },
  {
    "id": "8B",
    "title": "Quadratic Formula Setup",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "For 2x² - 3x - 9 = 0, what are a, b, and c?",
    "answer": "B. a = 2, b = -3, c = -9",
    "steps": [
      "Read the coefficients from standard form.",
      "The sign belongs with the term."
    ],
    "page": 4,
    "practiceId": "8A"
  },
  {
    "id": "9-A",
    "title": "Solving by Factoring",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve x² - x - 12 = 0 by factoring.",
    "answer": "x = -3 or x = 4",
    "steps": [
      "Factor: (x - 4)(x + 3) = 0.",
      "Set each factor equal to zero."
    ],
    "page": 5,
    "practiceId": "9-B"
  },
  {
    "id": "9-B",
    "title": "Solving by Factoring",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve x² + 2x - 35 = 0 by factoring.",
    "answer": "x = -7 or x = 5",
    "steps": [
      "Factor: (x + 7)(x - 5) = 0.",
      "Set each factor equal to zero."
    ],
    "page": 5,
    "practiceId": "9-A"
  },
  {
    "id": "10-A",
    "title": "Square Root Property",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve (x + 5)² = 64.",
    "answer": "x = -13 or x = 3",
    "steps": [
      "x + 5 = ±8.",
      "Subtract 5 from both solutions."
    ],
    "page": 5,
    "practiceId": "10-B"
  },
  {
    "id": "10-B",
    "title": "Square Root Property",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve (x - 4)² = 81.",
    "answer": "x = -5 or x = 13",
    "steps": [
      "x - 4 = ±9.",
      "Add 4 to both solutions."
    ],
    "page": 5,
    "practiceId": "10-A"
  },
  {
    "id": "11-A",
    "title": "Quadratic Formula",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve x² + 4x - 5 = 0 using the quadratic formula.",
    "answer": "x = 1 or x = -5",
    "steps": [
      "a = 1, b = 4, c = -5.",
      "x = (-4 ± sqrt(16 + 20))/2 = (-4 ± 6)/2.",
      "So x = 1 or x = -5."
    ],
    "page": 6,
    "practiceId": "11-B"
  },
  {
    "id": "11-B",
    "title": "Quadratic Formula",
    "topic": "quadSolving",
    "practiceType": "quadSolving",
    "prompt": "Solve x² - 6x + 5 = 0 using the quadratic formula.",
    "answer": "x = 1 or x = 5",
    "steps": [
      "a = 1, b = -6, c = 5.",
      "x = (6 ± sqrt(36 - 20))/2 = (6 ± 4)/2.",
      "So x = 1 or x = 5."
    ],
    "page": 6,
    "practiceId": "11-A"
  },
  {
    "id": "12-A",
    "title": "Graphing Quadratics",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "For f(x) = x² - 4x + 1: a. Find the axis of symmetry. b. Find the vertex. c. State whether it opens up or down.",
    "answer": "a. x = 2; b. (2, -3); c. opens up",
    "steps": [
      "Axis: x = -b/(2a) = 4/2 = 2.",
      "f(2) = 4 - 8 + 1 = -3.",
      "a = 1 is positive, so it opens up."
    ],
    "page": 6,
    "practiceId": "12-B"
  },
  {
    "id": "12-B",
    "title": "Graphing Quadratics",
    "topic": "quadFeatures",
    "practiceType": "quadFeatures",
    "prompt": "For f(x) = -x² - 2x + 3: a. Find the axis of symmetry. b. Find the vertex. c. State whether it opens up or down.",
    "answer": "a. x = -1; b. (-1, 4); c. opens down",
    "steps": [
      "Axis: x = -b/(2a) = 2/(-2) = -1.",
      "f(-1) = -1 + 2 + 3 = 4.",
      "a = -1 is negative, so it opens down."
    ],
    "page": 6,
    "practiceId": "12-A"
  }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit7ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit7ReviewChecked", JSON.stringify(state.checked));
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
  yIntercepts: [
    () => practiceResult("What is the y-intercept of f(x) = 3x^2 - 4x + 6?", "(0, 6)", ["0,6", "6"], ["The y-intercept occurs when x = 0.", "f(0) = 6, so the point is (0, 6)."]),
    () => practiceResult("What is the y-intercept of g(x) = -2x^2 + 5x - 9?", "(0, -9)", ["0,-9", "-9"], ["Set x = 0.", "g(0) = -9."]),
    () => practiceResult("What is the y-intercept of h(x) = x^2 + 8x + 10?", "(0, 10)", ["0,10", "10"], ["The constant term is the y-value when x = 0.", "So the y-intercept is (0, 10)."]),
    () => practiceResult("What is the y-intercept of p(x) = -x^2 - 3x + 2?", "(0, 2)", ["0,2", "2"], ["Substitute x = 0.", "p(0) = 2."])
  ],
  axisSymmetry: [
    () => practiceResult("Find the axis of symmetry of f(x) = x^2 - 8x + 3.", "x = 4", ["4"], ["Use x = -b/(2a).", "Here a = 1 and b = -8, so x = 8/2 = 4."]),
    () => practiceResult("Find the axis of symmetry of f(x) = x^2 + 12x - 1.", "x = -6", ["-6"], ["Use x = -b/(2a).", "x = -12/2 = -6."]),
    () => practiceResult("Find the axis of symmetry of f(x) = 2x^2 - 4x + 7.", "x = 1", ["1"], ["Use x = -b/(2a).", "x = -(-4)/(2(2)) = 4/4 = 1."]),
    () => practiceResult("Find the axis of symmetry of f(x) = -x^2 + 6x - 2.", "x = 3", ["3"], ["Use x = -b/(2a).", "x = -6/(2(-1)) = 3."])
  ],
  vertexForm: [
    () => practiceResult("What is the vertex of y = (x - 5)^2 + 3?", "(5, 3)", ["5,3"], ["Vertex form is y = a(x - h)^2 + k.", "The vertex is (h, k), so it is (5, 3)."]),
    () => practiceResult("What is the vertex of y = (x + 2)^2 - 7?", "(-2, -7)", ["-2,-7"], ["x + 2 means h = -2.", "k = -7."]),
    () => practiceResult("What is the vertex of y = -3(x - 1)^2 + 4?", "(1, 4)", ["1,4"], ["The value of a does not change the vertex location.", "h = 1 and k = 4."]),
    () => practiceResult("What is the vertex of y = 2(x + 6)^2 - 9?", "(-6, -9)", ["-6,-9"], ["x + 6 means h = -6.", "k = -9."])
  ],
  openingDirection: [
    () => practiceResult("Does y = -4x^2 + 3x - 1 open up or down?", "opens down", ["down", "opensdown"], ["The leading coefficient is negative.", "A negative a-value makes the parabola open downward."]),
    () => practiceResult("Does y = 1/2x^2 - 5x + 8 open up or down?", "opens up", ["up", "opensup"], ["The leading coefficient is positive.", "A positive a-value makes the parabola open upward."]),
    () => practiceResult("Which function opens downward: y = 2x^2 + 1, y = -x^2 + 6, or y = x^2 - 4x?", "y = -x^2 + 6", ["-x^2+6"], ["Look at the sign of the x^2 coefficient.", "Only y = -x^2 + 6 has a negative leading coefficient."]),
    () => practiceResult("Which function opens upward: y = -3x^2 + x, y = x^2 - 7, or y = -x^2 - 2x?", "y = x^2 - 7", ["x^2-7"], ["A parabola opens upward when a is positive.", "The positive leading coefficient is in y = x^2 - 7."])
  ],
  xIntercepts: [
    () => practiceResult("Find the x-intercepts of y = (x - 4)(x + 1).", "(4, 0) and (-1, 0)", ["4,0;-1,0", "-1,0;4,0"], ["Set each factor equal to zero.", "x = 4 or x = -1, so the intercepts are (4, 0) and (-1, 0)."]),
    () => practiceResult("Find the x-intercepts of y = (x + 5)(x - 2).", "(-5, 0) and (2, 0)", ["-5,0;2,0", "2,0;-5,0"], ["Set x + 5 = 0 and x - 2 = 0.", "x = -5 or x = 2."]),
    () => practiceResult("Find the x-intercepts of y = x(x - 6).", "(0, 0) and (6, 0)", ["0,0;6,0", "6,0;0,0"], ["Set each factor equal to zero.", "x = 0 or x = 6."]),
    () => practiceResult("Find the x-intercepts of y = (x + 3)(x + 8).", "(-3, 0) and (-8, 0)", ["-3,0;-8,0", "-8,0;-3,0"], ["Set x + 3 = 0 and x + 8 = 0.", "x = -3 or x = -8."])
  ],
  factoringRoots: [
    () => practiceResult("Solve x^2 + 6x + 8 = 0.", "x = -2 or x = -4", ["-2,-4", "-4,-2"], ["Factor: (x + 2)(x + 4) = 0.", "Set each factor equal to zero."]),
    () => practiceResult("Solve x^2 - 7x + 12 = 0.", "x = 3 or x = 4", ["3,4", "4,3"], ["Factor: (x - 3)(x - 4) = 0.", "Set each factor equal to zero."]),
    () => practiceResult("Solve x^2 + x - 20 = 0.", "x = -5 or x = 4", ["-5,4", "4,-5"], ["Factor: (x + 5)(x - 4) = 0.", "Set each factor equal to zero."]),
    () => practiceResult("Solve x^2 - 2x - 15 = 0.", "x = -3 or x = 5", ["-3,5", "5,-3"], ["Factor: (x - 5)(x + 3) = 0.", "Set each factor equal to zero."])
  ],
  squareRootProperty: [
    () => practiceResult("Solve x^2 = 64.", "x = -8 or x = 8", ["-8,8", "8,-8"], ["Take both square roots.", "x = +/-8."]),
    () => practiceResult("Solve (x - 2)^2 = 36.", "x = -4 or x = 8", ["-4,8", "8,-4"], ["x - 2 = +/-6.", "Add 2 to both solutions."]),
    () => practiceResult("Solve (x + 1)^2 = 49.", "x = -8 or x = 6", ["-8,6", "6,-8"], ["x + 1 = +/-7.", "Subtract 1 from both solutions."]),
    () => practiceResult("Solve (x + 4)^2 = 25.", "x = -9 or x = 1", ["-9,1", "1,-9"], ["x + 4 = +/-5.", "Subtract 4 from both solutions."])
  ],
  formulaSetup: [
    () => practiceResult("For 3x^2 + 7x - 2 = 0, identify a, b, and c.", "a = 3, b = 7, c = -2", ["3,7,-2"], ["Standard form is ax^2 + bx + c = 0.", "Keep the sign with each coefficient."]),
    () => practiceResult("For -x^2 + 5x + 6 = 0, identify a, b, and c.", "a = -1, b = 5, c = 6", ["-1,5,6"], ["The coefficient of x^2 is -1.", "b = 5 and c = 6."]),
    () => practiceResult("For 2x^2 - 9x + 4 = 0, identify a, b, and c.", "a = 2, b = -9, c = 4", ["2,-9,4"], ["Read coefficients from standard form.", "The sign belongs with the term."]),
    () => practiceResult("For x^2 - 11x - 12 = 0, identify a, b, and c.", "a = 1, b = -11, c = -12", ["1,-11,-12"], ["If no coefficient is written on x^2, a = 1.", "b = -11 and c = -12."])
  ],
  quadraticFormula: [
    () => practiceResult("Solve x^2 + 2x - 8 = 0 using the quadratic formula.", "x = 2 or x = -4", ["2,-4", "-4,2"], ["a = 1, b = 2, c = -8.", "x = (-2 +/- sqrt(4 + 32))/2 = (-2 +/- 6)/2.", "So x = 2 or x = -4."]),
    () => practiceResult("Solve x^2 - 8x + 15 = 0 using the quadratic formula.", "x = 3 or x = 5", ["3,5", "5,3"], ["a = 1, b = -8, c = 15.", "x = (8 +/- sqrt(64 - 60))/2 = (8 +/- 2)/2.", "So x = 3 or x = 5."]),
    () => practiceResult("Solve x^2 + 6x + 5 = 0 using the quadratic formula.", "x = -1 or x = -5", ["-1,-5", "-5,-1"], ["a = 1, b = 6, c = 5.", "x = (-6 +/- sqrt(36 - 20))/2 = (-6 +/- 4)/2.", "So x = -1 or x = -5."]),
    () => practiceResult("Solve x^2 - 4x - 12 = 0 using the quadratic formula.", "x = -2 or x = 6", ["-2,6", "6,-2"], ["a = 1, b = -4, c = -12.", "x = (4 +/- sqrt(16 + 48))/2 = (4 +/- 8)/2.", "So x = -2 or x = 6."])
  ],
  graphingFeatures: [
    () => practiceResult("For f(x) = x^2 - 6x + 5: find the axis, vertex, and opening direction.", "axis x = 3; vertex (3, -4); opens up", ["x=3;3,-4;up"], ["Axis: x = -b/(2a) = 6/2 = 3.", "f(3) = 9 - 18 + 5 = -4.", "a is positive, so it opens up."]),
    () => practiceResult("For f(x) = -x^2 + 4x + 1: find the axis, vertex, and opening direction.", "axis x = 2; vertex (2, 5); opens down", ["x=2;2,5;down"], ["Axis: x = -4/(2(-1)) = 2.", "f(2) = -4 + 8 + 1 = 5.", "a is negative, so it opens down."]),
    () => practiceResult("For f(x) = x^2 + 2x - 3: find the axis, vertex, and opening direction.", "axis x = -1; vertex (-1, -4); opens up", ["x=-1;-1,-4;up"], ["Axis: x = -2/2 = -1.", "f(-1) = 1 - 2 - 3 = -4.", "a is positive, so it opens up."]),
    () => practiceResult("For f(x) = -2x^2 - 8x + 3: find the axis, vertex, and opening direction.", "axis x = -2; vertex (-2, 11); opens down", ["x=-2;-2,11;down"], ["Axis: x = -(-8)/(2(-2)) = -2.", "f(-2) = -8 + 16 + 3 = 11.", "a is negative, so it opens down."])
  ]
};

let practiceCounters = {};

function practiceTypeForProblem(problem) {
  const title = (problem?.title || "").toLowerCase();
  if (title.includes("y-intercepts")) return "yIntercepts";
  if (title.includes("axis")) return "axisSymmetry";
  if (title === "vertex") return "vertexForm";
  if (title.includes("opening")) return "openingDirection";
  if (title.includes("x-intercepts")) return "xIntercepts";
  if (title.includes("factoring roots") || title.includes("solving by factoring")) return "factoringRoots";
  if (title.includes("square root")) return "squareRootProperty";
  if (title.includes("formula setup")) return "formulaSetup";
  if (title === "quadratic formula") return "quadraticFormula";
  if (title.includes("graphing quadratics")) return "graphingFeatures";
  return "axisSymmetry";
}

function nextPractice(type, reset = false) {
  const bank = practiceBanks[type] || practiceBanks.axisSymmetry;
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
