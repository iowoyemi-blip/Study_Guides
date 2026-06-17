const APP = {
  "title": "Unit 5 Review Dashboard",
  "course": "Algebra I - Systems of Equations and Inequalities"
};

const TOPICS = {
  "systemsBasics": "Systems Basics",
  "solvingSystems": "Solving Systems",
  "contextSystems": "Context Systems",
  "systemsInequalities": "Systems of Inequalities"
};

const PROBLEMS = [
  {
    "id": "1A",
    "title": "Checking Solutions",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "Is (2, 5) a solution to y = 2x + 1 and x + y = 7?",
    "answer": "A. Yes",
    "steps": [
      "Check y = 2(2) + 1 = 5.",
      "Check 2 + 5 = 7."
    ],
    "page": 1,
    "practiceId": "1B"
  },
  {
    "id": "1B",
    "title": "Checking Solutions",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "Is (-1, 4) a solution to y = -3x + 1 and 2x + y = 2?",
    "answer": "A. Yes",
    "steps": [
      "Check y = -3(-1) + 1 = 4.",
      "Check 2(-1) + 4 = 2."
    ],
    "page": 1,
    "practiceId": "1A"
  },
  {
    "id": "2A",
    "title": "Solving by Inspection",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "What is the solution of y = x + 3 and y = -x + 7?",
    "answer": "A. (2, 5)",
    "steps": [
      "Set x + 3 = -x + 7.",
      "2x = 4, so x = 2 and y = 5."
    ],
    "page": 1,
    "practiceId": "2B"
  },
  {
    "id": "2B",
    "title": "Solving by Inspection",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "What is the solution of y = 2x - 1 and y = -x + 8?",
    "answer": "B. (3, 5)",
    "steps": [
      "Set 2x - 1 = -x + 8.",
      "3x = 9, so x = 3 and y = 5."
    ],
    "page": 1,
    "practiceId": "2A"
  },
  {
    "id": "3A",
    "title": "Number of Solutions",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "How many solutions does y = 3x + 2 and y = 3x - 5 have?",
    "answer": "C. none",
    "steps": [
      "The slopes are the same but the y-intercepts are different.",
      "Parallel lines do not intersect."
    ],
    "page": 2,
    "practiceId": "3B"
  },
  {
    "id": "3B",
    "title": "Number of Solutions",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "How many solutions does y = -2x + 4 and 2x + y = 4 have?",
    "answer": "C. infinitely many",
    "steps": [
      "Rewrite 2x + y = 4 as y = -2x + 4.",
      "Both equations describe the same line."
    ],
    "page": 2,
    "practiceId": "3A"
  },
  {
    "id": "4A",
    "title": "Substitution Step",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "For y = 2x - 3 and x + y = 12, which substitution equation is valid?",
    "answer": "A. x + 2x - 3 = 12",
    "steps": [
      "Replace y in x + y = 12 with 2x - 3.",
      "That gives x + 2x - 3 = 12."
    ],
    "page": 2,
    "practiceId": "4B"
  },
  {
    "id": "4B",
    "title": "Substitution Step",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "For x = y + 4 and 3x - y = 10, which substitution equation is valid?",
    "answer": "A. 3(y + 4) - y = 10",
    "steps": [
      "Replace x with y + 4.",
      "The equation becomes 3(y + 4) - y = 10."
    ],
    "page": 2,
    "practiceId": "4A"
  },
  {
    "id": "5A",
    "title": "Elimination",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Which variable is eliminated if you add 4x + 3y = 20 and -4x + y = -8?",
    "answer": "A. x",
    "steps": [
      "4x and -4x are opposites.",
      "Adding eliminates x."
    ],
    "page": 3,
    "practiceId": "5B"
  },
  {
    "id": "5B",
    "title": "Elimination",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Which variable is eliminated if you add 2x - 5y = 1 and 3x + 5y = 14?",
    "answer": "B. y",
    "steps": [
      "-5y and 5y are opposites.",
      "Adding eliminates y."
    ],
    "page": 3,
    "practiceId": "5A"
  },
  {
    "id": "6A",
    "title": "Systems from Context",
    "topic": "contextSystems",
    "practiceType": "contextSystems",
    "prompt": "Adult tickets cost $8, student tickets cost $5, and 40 tickets cost $260. Which system fits?",
    "answer": "A. a + s = 40; 8a + 5s = 260",
    "steps": [
      "The count equation is a + s = 40.",
      "The money equation is 8a + 5s = 260."
    ],
    "page": 3,
    "practiceId": "6B"
  },
  {
    "id": "6B",
    "title": "Systems from Context",
    "topic": "contextSystems",
    "practiceType": "contextSystems",
    "prompt": "A shelter has cats and dogs. Cats are 4 more than twice dogs, and there are 34 animals. Which system fits?",
    "answer": "A. c = 2d + 4; c + d = 34",
    "steps": [
      "Cats are 4 more than twice dogs: c = 2d + 4.",
      "Total animals: c + d = 34."
    ],
    "page": 3,
    "practiceId": "6A"
  },
  {
    "id": "7A",
    "title": "Testing Inequality Systems",
    "topic": "systemsInequalities",
    "practiceType": "systemsInequalities",
    "prompt": "Does (3, 2) satisfy y ≤ x and y > -x + 1?",
    "answer": "A. Yes",
    "steps": [
      "2 ≤ 3 is true.",
      "2 > -3 + 1 is also true."
    ],
    "page": 4,
    "practiceId": "7B"
  },
  {
    "id": "7B",
    "title": "Testing Inequality Systems",
    "topic": "systemsInequalities",
    "practiceType": "systemsInequalities",
    "prompt": "Does (0, -1) satisfy y ≥ 2x - 3 and y < x + 2?",
    "answer": "A. Yes",
    "steps": [
      "-1 ≥ -3 is true.",
      "-1 < 2 is true."
    ],
    "page": 4,
    "practiceId": "7A"
  },
  {
    "id": "8A",
    "title": "Solution Region",
    "topic": "systemsInequalities",
    "practiceType": "systemsInequalities",
    "prompt": "For y > x + 1 and y ≤ -2x + 7, which point is in the solution set?",
    "answer": "B. (1, 4)",
    "steps": [
      "For (1, 4): 4 > 2 is true.",
      "4 ≤ 5 is true."
    ],
    "page": 4,
    "practiceId": "8B"
  },
  {
    "id": "8B",
    "title": "Solution Region",
    "topic": "systemsInequalities",
    "practiceType": "systemsInequalities",
    "prompt": "For y ≥ -x + 2 and y < 3x + 1, which point is in the solution set?",
    "answer": "C. (2, 3)",
    "steps": [
      "For (2, 3): 3 ≥ 0 is true.",
      "3 < 7 is true."
    ],
    "page": 4,
    "practiceId": "8A"
  },
  {
    "id": "9A",
    "title": "Classifying Systems",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "A system has slopes 2 and -1. How many solutions does it have?",
    "answer": "B. exactly one",
    "steps": [
      "Different slopes mean the lines intersect once.",
      "So the system has exactly one solution."
    ],
    "page": 5,
    "practiceId": "9B"
  },
  {
    "id": "9B",
    "title": "Classifying Systems",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "A system has the same slope and same y-intercept. How many solutions does it have?",
    "answer": "C. infinitely many",
    "steps": [
      "Same slope and same intercept means same line.",
      "All points on the line solve both equations."
    ],
    "page": 5,
    "practiceId": "9A"
  },
  {
    "id": "10A",
    "title": "Interpreting Solutions",
    "topic": "contextSystems",
    "practiceType": "contextSystems",
    "prompt": "If a system solution is (6, 14) where x is notebooks and y is total cost, what does 14 represent?",
    "answer": "B. $14 total cost",
    "steps": [
      "The y-variable represents total cost.",
      "The y-coordinate is 14."
    ],
    "page": 5,
    "practiceId": "10B"
  },
  {
    "id": "10B",
    "title": "Interpreting Solutions",
    "topic": "contextSystems",
    "practiceType": "contextSystems",
    "prompt": "If a system solution is (5, 11) where x is hours and y is money earned, what does 5 represent?",
    "answer": "A. 5 hours",
    "steps": [
      "The x-variable represents hours.",
      "The x-coordinate is 5."
    ],
    "page": 5,
    "practiceId": "10A"
  },
  {
    "id": "11-A",
    "title": "Graphing Systems",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Solve by graphing or substitution: y = x + 2 and y = -x + 8.",
    "answer": "(3, 5)",
    "steps": [
      "Set x + 2 = -x + 8.",
      "2x = 6, so x = 3.",
      "Then y = 5."
    ],
    "page": 6,
    "practiceId": "11-B"
  },
  {
    "id": "11-B",
    "title": "Graphing Systems",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Solve by graphing or substitution: y = 2x - 1 and y = -x + 11.",
    "answer": "(4, 7)",
    "steps": [
      "Set 2x - 1 = -x + 11.",
      "3x = 12, so x = 4.",
      "Then y = 7."
    ],
    "page": 6,
    "practiceId": "11-A"
  },
  {
    "id": "12-A",
    "title": "Substitution",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Solve using substitution: y = 3x - 4 and x + y = 12.",
    "answer": "(4, 8)",
    "steps": [
      "Substitute: x + 3x - 4 = 12.",
      "4x = 16, so x = 4.",
      "y = 3(4) - 4 = 8."
    ],
    "page": 6,
    "practiceId": "12-B"
  },
  {
    "id": "12-B",
    "title": "Substitution",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Solve using substitution: x = y - 1 and 2x + y = 14.",
    "answer": "(4, 5)",
    "steps": [
      "Substitute: 2(y - 1) + y = 14.",
      "3y - 2 = 14, so y = 5.",
      "x = 4."
    ],
    "page": 6,
    "practiceId": "12-A"
  },
  {
    "id": "13-A",
    "title": "Elimination",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Solve using elimination: 2x + 3y = 19 and 2x - y = 7.",
    "answer": "(5, 3)",
    "steps": [
      "Subtract the second equation from the first: 4y = 12.",
      "y = 3.",
      "Substitute into 2x - y = 7: 2x - 3 = 7, so x = 5."
    ],
    "page": 7,
    "practiceId": "13-B"
  },
  {
    "id": "13-B",
    "title": "Elimination",
    "topic": "solvingSystems",
    "practiceType": "solvingSystems",
    "prompt": "Solve using elimination: 3x + 2y = 24 and x - 2y = -4.",
    "answer": "(5, 4.5)",
    "steps": [
      "Add the equations: 4x = 20.",
      "x = 5.",
      "Substitute: 5 - 2y = -4, so y = 4.5."
    ],
    "page": 7,
    "practiceId": "13-A"
  },
  {
    "id": "14-A",
    "title": "Systems of Inequalities",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "Describe the graph of y ≥ x - 2 and y < -2x + 7.",
    "answer": "Solid y = x - 2 shaded above; dashed y = -2x + 7 shaded below; overlap is solution",
    "steps": [
      "The ≥ boundary is solid and shaded above.",
      "The < boundary is dashed and shaded below.",
      "The solution is where the shaded regions overlap."
    ],
    "page": 7,
    "practiceId": "14-B"
  },
  {
    "id": "14-B",
    "title": "Systems of Inequalities",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "Describe the graph of y > -x + 3 and y ≤ 2x - 1.",
    "answer": "Dashed y = -x + 3 shaded above; solid y = 2x - 1 shaded below; overlap is solution",
    "steps": [
      "The > boundary is dashed and shaded above.",
      "The ≤ boundary is solid and shaded below.",
      "The solution is the overlap."
    ],
    "page": 7,
    "practiceId": "14-A"
  },
  {
    "id": "15-A",
    "title": "Context System",
    "topic": "contextSystems",
    "practiceType": "contextSystems",
    "prompt": "Coffee costs $1.50 and doughnuts cost $0.75. On Monday, 10 coffees and 5 doughnuts cost $18.75. On Tuesday, 6 coffees and 12 doughnuts cost $18.00. Write and solve for the price of each item.",
    "answer": "Coffee: $1.50; doughnut: $0.75",
    "steps": [
      "Let c be coffee and d be doughnut.",
      "10c + 5d = 18.75 and 6c + 12d = 18.",
      "The solution is c = 1.50 and d = 0.75."
    ],
    "page": 8,
    "practiceId": "15-B"
  },
  {
    "id": "15-B",
    "title": "Context System",
    "topic": "contextSystems",
    "practiceType": "contextSystems",
    "prompt": "Adult tickets and student tickets were sold. 8 adult and 6 student tickets cost $86. 5 adult and 10 student tickets cost $85. Find the price of each ticket.",
    "answer": "Adult: $7; student: $5",
    "steps": [
      "Let a be adult and s be student.",
      "8a + 6s = 86 and 5a + 10s = 85.",
      "Solving gives a = 7 and s = 5.",
      "Check: 8(7) + 6(5) = 86 and 5(7) + 10(5) = 85."
    ],
    "page": 8,
    "practiceId": "15-A"
  },
  {
    "id": "16-A",
    "title": "Coin Problem",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "There are 50 nickels and dimes worth $4.15. How many of each coin are there?",
    "answer": "17 nickels and 33 dimes",
    "steps": [
      "n + d = 50.",
      "0.05n + 0.10d = 4.15.",
      "Solving gives d = 33 and n = 17."
    ],
    "page": 8,
    "practiceId": "16-B"
  },
  {
    "id": "16-B",
    "title": "Coin Problem",
    "topic": "systemsBasics",
    "practiceType": "systemsBasics",
    "prompt": "There are 40 nickels and quarters worth $6.20. How many of each coin are there?",
    "answer": "19 nickels and 21 quarters",
    "steps": [
      "n + q = 40.",
      "0.05n + 0.25q = 6.20.",
      "Solving gives q = 21 and n = 19."
    ],
    "page": 8,
    "practiceId": "16-A"
  }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit5ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit5ReviewChecked", JSON.stringify(state.checked));
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
