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

function practiceResult(prompt, answer, accepted, steps) {
  return { prompt, answer, accepted: accepted || [], steps };
}

const practiceBanks = {
  checkingSolutions: [
    () => practiceResult("Is (3, 7) a solution to y = 2x + 1 and x + y = 10?", "yes", ["A", "yes"], ["Check the first equation: 7 = 2(3) + 1.", "Check the second equation: 3 + 7 = 10.", "Both are true, so the point is a solution."]),
    () => practiceResult("Is (-2, 5) a solution to y = -x + 3 and 2x + y = 1?", "yes", ["A", "yes"], ["Check y = -(-2) + 3 = 5.", "Check 2(-2) + 5 = 1.", "Both equations work."]),
    () => practiceResult("Is (4, 1) a solution to y = -2x + 9 and x + y = 8?", "no", ["no"], ["Check y = -2(4) + 9 = 1, so the first equation works.", "Check 4 + 1 = 5, not 8.", "The point is not a solution because it must work in both equations."]),
    () => practiceResult("Is (1, -3) a solution to y = 4x - 7 and 3x - y = 6?", "yes", ["A", "yes"], ["Check y = 4(1) - 7 = -3.", "Check 3(1) - (-3) = 6.", "Both are true."])
  ],
  solveEqualY: [
    () => practiceResult("Solve the system y = x + 5 and y = -2x - 1.", "(-2, 3)", ["-2,3"], ["Set the expressions equal: x + 5 = -2x - 1.", "3x = -6, so x = -2.", "Then y = -2 + 5 = 3."]),
    () => practiceResult("Solve the system y = 3x - 4 and y = x + 6.", "(5, 11)", ["5,11"], ["Set 3x - 4 = x + 6.", "2x = 10, so x = 5.", "Then y = 11."]),
    () => practiceResult("Solve the system y = -x + 8 and y = 2x - 1.", "(3, 5)", ["3,5"], ["Set -x + 8 = 2x - 1.", "9 = 3x, so x = 3.", "Then y = 5."]),
    () => practiceResult("Solve the system y = 4x + 2 and y = -x + 12.", "(2, 10)", ["2,10"], ["Set 4x + 2 = -x + 12.", "5x = 10, so x = 2.", "Then y = 10."])
  ],
  classifySystems: [
    () => practiceResult("How many solutions does y = 2x + 1 and y = 2x - 4 have?", "no solution", ["none", "no solutions"], ["The slopes are the same but the y-intercepts are different.", "The lines are parallel, so they never intersect."]),
    () => practiceResult("How many solutions does y = -3x + 7 and 3x + y = 7 have?", "infinitely many", ["infinite", "infinitely many"], ["Rewrite 3x + y = 7 as y = -3x + 7.", "Both equations are the same line."]),
    () => practiceResult("How many solutions does y = 1/2x - 2 and y = -4x + 1 have?", "exactly one", ["one", "1"], ["The slopes are different.", "Different slopes mean the lines intersect once."]),
    () => practiceResult("A system has the same slope but different y-intercepts. How many solutions does it have?", "no solution", ["none", "no solutions"], ["Same slope means the lines are parallel or the same line.", "Different y-intercepts mean parallel lines, so there is no solution."])
  ],
  substitutionSetup: [
    () => practiceResult("For y = 5x - 2 and x + y = 18, write the substitution equation.", "x + 5x - 2 = 18", ["x+5x-2=18", "6x-2=18"], ["Replace y in x + y = 18 with 5x - 2.", "That gives x + 5x - 2 = 18."]),
    () => practiceResult("For x = 2y + 1 and 3x + y = 19, write the substitution equation.", "3(2y + 1) + y = 19", ["3(2y+1)+y=19"], ["Replace x with 2y + 1.", "The equation becomes 3(2y + 1) + y = 19."]),
    () => practiceResult("For y = -x + 9 and 2x - y = 6, write the substitution equation.", "2x - (-x + 9) = 6", ["2x-(-x+9)=6"], ["Replace y with -x + 9.", "Keep parentheses because y is being subtracted."]),
    () => practiceResult("For x = y - 4 and 4x + 2y = 8, write the substitution equation.", "4(y - 4) + 2y = 8", ["4(y-4)+2y=8"], ["Replace x with y - 4.", "That gives 4(y - 4) + 2y = 8."])
  ],
  eliminationChoice: [
    () => practiceResult("Which variable is eliminated when you add 3x + 4y = 20 and -3x + y = 5?", "x", ["x"], ["3x and -3x are opposites.", "Adding the equations eliminates x."]),
    () => practiceResult("Which variable is eliminated when you add 2x - 7y = 9 and 5x + 7y = 12?", "y", ["y"], ["-7y and 7y are opposites.", "Adding eliminates y."]),
    () => practiceResult("Which variable is eliminated when you subtract 4x + 2y = 18 and 4x - 3y = 8?", "x", ["x"], ["The x-terms are both 4x.", "Subtracting the equations eliminates x."]),
    () => practiceResult("Which variable is eliminated when you add -6x + y = 2 and 6x + 5y = 22?", "x", ["x"], ["-6x and 6x are opposites.", "Adding eliminates x."])
  ],
  contextSetup: [
    () => practiceResult("Adult tickets cost $10, student tickets cost $6, and 50 tickets cost $380. Write a system using a for adult and s for student.", "a + s = 50; 10a + 6s = 380", ["a+s=50;10a+6s=380"], ["The count equation is a + s = 50.", "The money equation is 10a + 6s = 380."]),
    () => practiceResult("A farm has chickens and cows. There are 18 animals and 52 legs. Write a system using c for chickens and w for cows.", "c + w = 18; 2c + 4w = 52", ["c+w=18;2c+4w=52"], ["The animal count is c + w = 18.", "Chickens have 2 legs and cows have 4 legs, so 2c + 4w = 52."]),
    () => practiceResult("A class sold shirts and hats. Shirts cost $12, hats cost $8, and 30 items made $304. Write a system.", "s + h = 30; 12s + 8h = 304", ["s+h=30;12s+8h=304"], ["The item count is s + h = 30.", "The money equation is 12s + 8h = 304."]),
    () => practiceResult("There are blue and red markers. Red markers are 3 more than twice blue markers, and there are 27 markers total. Write a system.", "r = 2b + 3; r + b = 27", ["r=2b+3;r+b=27"], ["Red is 3 more than twice blue: r = 2b + 3.", "The total is r + b = 27."])
  ],
  inequalityTesting: [
    () => practiceResult("Does (2, 5) satisfy y >= x + 2 and y < 3x?", "yes", ["yes"], ["Check 5 >= 2 + 2, which is true.", "Check 5 < 3(2), which is true.", "It satisfies both inequalities."]),
    () => practiceResult("Does (0, -4) satisfy y > -x - 3 and y <= 2x + 1?", "no", ["no"], ["Check -4 > -0 - 3, which means -4 > -3.", "That is false, so the point is not a solution."]),
    () => practiceResult("Does (-1, 2) satisfy y <= -2x + 1 and y > x - 4?", "yes", ["yes"], ["Check 2 <= -2(-1) + 1, so 2 <= 3.", "Check 2 > -1 - 4, so 2 > -5.", "Both are true."]),
    () => practiceResult("Does (3, 0) satisfy y >= -x + 2 and y <= x - 1?", "yes", ["yes"], ["Check 0 >= -3 + 2, so 0 >= -1.", "Check 0 <= 3 - 1, so 0 <= 2.", "Both are true."])
  ],
  inequalityRegion: [
    () => practiceResult("For y > x - 1 and y <= -x + 5, which point is in the solution set: (0, -2), (2, 3), or (4, 1)?", "(2, 3)", ["2,3"], ["Test each point in both inequalities.", "(2, 3): 3 > 1 and 3 <= 3, so it works.", "The other listed points fail at least one inequality."]),
    () => practiceResult("For y >= 2x - 4 and y < x + 3, which point is in the solution set: (1, 0), (3, 1), or (4, 8)?", "(1, 0)", ["1,0"], ["Test (1, 0): 0 >= -2 and 0 < 4.", "Both are true, so (1, 0) is in the overlap."]),
    () => practiceResult("For y < -x + 6 and y > 1, which point is in the solution set: (1, 3), (4, 3), or (2, 1)?", "(1, 3)", ["1,3"], ["Test (1, 3): 3 < 5 and 3 > 1.", "Both are true."]),
    () => practiceResult("For y <= x + 4 and y >= -2x + 1, which point is in the solution set: (-1, 5), (0, 2), or (3, -6)?", "(0, 2)", ["0,2"], ["Test (0, 2): 2 <= 4 and 2 >= 1.", "Both are true, so it is in the solution region."])
  ],
  interpretContext: [
    () => practiceResult("A system solution is (8, 24), where x is hours worked and y is dollars earned. What does 8 represent?", "8 hours worked", ["8 hours", "hours worked"], ["The x-coordinate represents hours worked.", "The x-value is 8."]),
    () => practiceResult("A system solution is (12, 30), where x is tickets sold and y is total money collected. What does 30 represent?", "$30 collected", ["30 dollars", "$30", "total money"], ["The y-coordinate represents total money collected.", "The y-value is 30."]),
    () => practiceResult("A system solution is (4, 16), where x is bags bought and y is total cost. What does the ordered pair mean?", "4 bags cost $16", ["4 bags cost 16", "4 bags;$16"], ["The x-value gives the number of bags.", "The y-value gives the total cost."]),
    () => practiceResult("A system solution is (5, 2), where x is adult tickets and y is student tickets. What does 2 represent?", "2 student tickets", ["2 students", "2 student tickets"], ["The y-variable represents student tickets.", "The y-coordinate is 2."])
  ],
  substitutionSolve: [
    () => practiceResult("Solve using substitution: y = 2x + 1 and x + y = 10.", "(3, 7)", ["3,7"], ["Substitute: x + 2x + 1 = 10.", "3x = 9, so x = 3.", "Then y = 7."]),
    () => practiceResult("Solve using substitution: y = -x + 8 and 2x + y = 11.", "(3, 5)", ["3,5"], ["Substitute: 2x + (-x + 8) = 11.", "x + 8 = 11, so x = 3.", "Then y = 5."]),
    () => practiceResult("Solve using substitution: x = y + 2 and x + 3y = 14.", "(5, 3)", ["5,3"], ["Substitute: y + 2 + 3y = 14.", "4y = 12, so y = 3.", "Then x = 5."]),
    () => practiceResult("Solve using substitution: y = 4x - 6 and x + y = 9.", "(3, 6)", ["3,6"], ["Substitute: x + 4x - 6 = 9.", "5x = 15, so x = 3.", "Then y = 6."])
  ],
  eliminationSolve: [
    () => practiceResult("Solve using elimination: 2x + y = 11 and 2x - y = 5.", "(4, 3)", ["4,3"], ["Add the equations: 4x = 16.", "x = 4.", "Substitute into 2x + y = 11 to get y = 3."]),
    () => practiceResult("Solve using elimination: 3x + 2y = 18 and 3x - 2y = 6.", "(4, 3)", ["4,3"], ["Add the equations: 6x = 24.", "x = 4.", "Substitute into 3x + 2y = 18 to get y = 3."]),
    () => practiceResult("Solve using elimination: x + 4y = 23 and x - 4y = -1.", "(11, 3)", ["11,3"], ["Add the equations: 2x = 22.", "x = 11.", "Substitute into x + 4y = 23 to get y = 3."]),
    () => practiceResult("Solve using elimination: 5x + y = 31 and 5x - y = 19.", "(5, 6)", ["5,6"], ["Add the equations: 10x = 50.", "x = 5.", "Substitute into 5x + y = 31 to get y = 6."])
  ],
  inequalityGraph: [
    () => practiceResult("Describe the graph of y >= x - 3 and y < -2x + 6.", "solid y = x - 3 shaded above; dashed y = -2x + 6 shaded below", ["solid above;dashed below"], ["The >= boundary is solid and shaded above.", "The < boundary is dashed and shaded below.", "The solution is the overlap."]),
    () => practiceResult("Describe the graph of y > -x + 4 and y <= 2x - 5.", "dashed y = -x + 4 shaded above; solid y = 2x - 5 shaded below", ["dashed above;solid below"], ["The > boundary is dashed and shaded above.", "The <= boundary is solid and shaded below.", "The overlap is the solution region."]),
    () => practiceResult("Describe the graph of y <= 1/2x + 2 and y >= -x - 1.", "solid y = 1/2x + 2 shaded below; solid y = -x - 1 shaded above", ["solid below;solid above"], ["Both boundaries are solid because equality is included.", "Shade below the first line and above the second line."]),
    () => practiceResult("Describe the graph of y < 3x + 1 and y > x - 4.", "dashed y = 3x + 1 shaded below; dashed y = x - 4 shaded above", ["dashed below;dashed above"], ["Both boundaries are dashed because the inequalities are strict.", "Shade below y = 3x + 1 and above y = x - 4."])
  ],
  contextSolve: [
    () => practiceResult("A movie sold 6 adult tickets and 4 student tickets for $68. It sold 3 adult tickets and 5 student tickets for $49. Find each ticket price.", "adult $8; student $5", ["adult 8;student 5", "8;5"], ["Let a be adult and s be student.", "6a + 4s = 68 and 3a + 5s = 49.", "Solving gives a = 8 and s = 5."]),
    () => practiceResult("A store sold 4 notebooks and 3 pens for $19. It sold 2 notebooks and 5 pens for $13. Find each price.", "notebook $4; pen $1", ["notebook 4;pen 1", "4;1"], ["Let n be notebook and p be pen.", "4n + 3p = 19 and 2n + 5p = 13.", "Solving gives n = 4 and p = 1."]),
    () => practiceResult("A cafe sold 5 muffins and 2 drinks for $22. It sold 3 muffins and 4 drinks for $23. Find each price.", "muffin $3; drink $3.50", ["muffin 3;drink 3.5", "3;3.5"], ["Let m be muffin and d be drink.", "5m + 2d = 22 and 3m + 4d = 23.", "Solving gives m = 3 and d = 3.50."]),
    () => practiceResult("A fundraiser sold 7 bracelets and 3 keychains for $44. It sold 4 bracelets and 6 keychains for $38. Find each price.", "bracelet $5; keychain $3", ["bracelet 5;keychain 3", "5;3"], ["Let b be bracelet and k be keychain.", "7b + 3k = 44 and 4b + 6k = 38.", "Solving gives b = 5 and k = 3."])
  ],
  coinProblem: [
    () => practiceResult("There are 30 nickels and dimes worth $2.25. How many of each coin are there?", "15 nickels and 15 dimes", ["15 nickels 15 dimes", "15;15"], ["n + d = 30.", "0.05n + 0.10d = 2.25.", "Solving gives d = 15 and n = 15."]),
    () => practiceResult("There are 20 dimes and quarters worth $3.65. How many of each coin are there?", "9 dimes and 11 quarters", ["9 dimes 11 quarters", "9;11"], ["d + q = 20.", "0.10d + 0.25q = 3.65.", "Solving gives q = 11 and d = 9."]),
    () => practiceResult("There are 36 nickels and quarters worth $5.40. How many of each coin are there?", "18 nickels and 18 quarters", ["18 nickels 18 quarters", "18;18"], ["n + q = 36.", "0.05n + 0.25q = 5.40.", "Solving gives q = 18 and n = 18."]),
    () => practiceResult("There are 25 nickels and dimes worth $1.90. How many of each coin are there?", "12 nickels and 13 dimes", ["12 nickels 13 dimes", "12;13"], ["n + d = 25.", "0.05n + 0.10d = 1.90.", "Solving gives d = 13 and n = 12."])
  ]
};

let practiceCounters = {};

function practiceTypeForProblem(problem) {
  const title = (problem?.title || "").toLowerCase();
  if (title.includes("checking solutions")) return "checkingSolutions";
  if (title.includes("solving by inspection") || title.includes("graphing systems")) return "solveEqualY";
  if (title.includes("number of solutions") || title.includes("classifying systems")) return "classifySystems";
  if (title.includes("substitution step")) return "substitutionSetup";
  if (title === "substitution") return "substitutionSolve";
  if (title === "elimination") return problem.id.includes("-") ? "eliminationSolve" : "eliminationChoice";
  if (title.includes("systems from context")) return "contextSetup";
  if (title.includes("testing inequality systems")) return "inequalityTesting";
  if (title.includes("solution region")) return "inequalityRegion";
  if (title.includes("interpreting solutions")) return "interpretContext";
  if (title.includes("systems of inequalities")) return "inequalityGraph";
  if (title.includes("context system")) return "contextSolve";
  if (title.includes("coin problem")) return "coinProblem";
  return "solveEqualY";
}

function nextPractice(type, reset = false) {
  const bank = practiceBanks[type] || practiceBanks.solveEqualY;
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
