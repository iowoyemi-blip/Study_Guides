const APP = {
  "title": "Unit 3 Review Dashboard",
  "course": "Algebra I - Dependency Relationships"
};

const TOPICS = {
  "graphAnalysis": "Graph Analysis",
  "functionNotation": "Function Notation",
  "representations": "Representations",
  "linearRules": "Linear Rules",
  "contextGraphs": "Context Graphs"
};

const PROBLEMS = [
  {
    "id": "1A",
    "title": "Domain from a Graph",
    "topic": "graphAnalysis",
    "practiceType": "graphAnalysis",
    "prompt": "What is the domain of the graphed relation?",
    "answer": "C. (-3, 2]",
    "steps": [
      "The x-values run from -3 to 2.",
      "The endpoint at -3 is open; the endpoint at 2 is closed."
    ],
    "page": 1,
    "practiceId": "1B"
  },
  {
    "id": "1B",
    "title": "Range from a Graph",
    "topic": "graphAnalysis",
    "practiceType": "graphAnalysis",
    "prompt": "What is the range of the graphed relation?",
    "answer": "B. [-2, 5)",
    "steps": [
      "The y-values run from -2 to 5.",
      "The -2 endpoint is closed; the 5 endpoint is open."
    ],
    "page": 1,
    "practiceId": "1A"
  },
  {
    "id": "2A",
    "title": "Reading Function Values from a Graph",
    "topic": "functionNotation",
    "practiceType": "functionNotation",
    "prompt": "The graph of y = f(x) is shown. What is f(1)?",
    "answer": "B. -1",
    "steps": [
      "Find x = 1 on the graph.",
      "The corresponding y-value is -1."
    ],
    "page": 2,
    "practiceId": "2B"
  },
  {
    "id": "2B",
    "title": "Reading Inputs from a Graph",
    "topic": "representations",
    "practiceType": "representations",
    "prompt": "The graph of y = g(x) is shown. For what value of x is g(x) = -2?",
    "answer": "B. x = 2",
    "steps": [
      "Find y = -2 on the graph.",
      "The matching x-value is 2."
    ],
    "page": 2,
    "practiceId": "2A"
  },
  {
    "id": "3A",
    "title": "Slope from a Graph",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Determine the slope of the graphed line.",
    "answer": "D. -1/2",
    "steps": [
      "Use two clear points, such as (-4, 3) and (4, -1).",
      "m = (-1 - 3)/(4 - (-4)) = -4/8 = -1/2."
    ],
    "page": 3,
    "practiceId": "3B"
  },
  {
    "id": "3B",
    "title": "Slope from a Graph",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Determine the slope of the graphed line.",
    "answer": "A. 1",
    "steps": [
      "Use two clear points, such as (-3, -4) and (3, 2).",
      "m = (2 - (-4))/(3 - (-3)) = 6/6 = 1."
    ],
    "page": 3,
    "practiceId": "3A"
  },
  {
    "id": "4A",
    "title": "Equation from a Graph",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Which equation matches the graphed line?",
    "answer": "A. y = 2x - 3",
    "steps": [
      "The y-intercept is -3.",
      "The slope is 2, so y = 2x - 3."
    ],
    "page": 4,
    "practiceId": "4B"
  },
  {
    "id": "4B",
    "title": "Equation from a Graph",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Which equation matches the graphed line?",
    "answer": "B. y = -x + 4",
    "steps": [
      "The y-intercept is 4.",
      "The slope is -1, so y = -x + 4."
    ],
    "page": 4,
    "practiceId": "4A"
  },
  {
    "id": "5A",
    "title": "Functions Across Representations",
    "topic": "representations",
    "practiceType": "representations",
    "prompt": "Which relation is NOT a function?",
    "answer": "C. {(2, 6), (2, -1), (5, 0)}",
    "steps": [
      "A function cannot assign one input to two different outputs.",
      "Input 2 is paired with 6 and -1."
    ],
    "page": 5,
    "practiceId": "5B"
  },
  {
    "id": "5B",
    "title": "Discrete and Continuous",
    "topic": "representations",
    "practiceType": "representations",
    "prompt": "Which situation is continuous?",
    "answer": "C. amount of water in a bottle",
    "steps": [
      "Continuous data can be measured with decimals.",
      "Water amount can be measured as 1.5 liters, for example."
    ],
    "page": 5,
    "practiceId": "5A"
  },
  {
    "id": "6A",
    "title": "Equation from a Table",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "For x: 0, 1, 2, 3 and y: 2, 7, 12, 17, which rule fits?",
    "answer": "B. y = 5x + 2",
    "steps": [
      "The y-values increase by 5, so m = 5.",
      "When x = 0, y = 2, so b = 2."
    ],
    "page": 5,
    "practiceId": "6B"
  },
  {
    "id": "6B",
    "title": "Function Notation",
    "topic": "functionNotation",
    "practiceType": "functionNotation",
    "prompt": "Given h(x) = -3x + 8, what is h(4)?",
    "answer": "A. -4",
    "steps": [
      "Substitute x = 4.",
      "h(4) = -3(4) + 8 = -4."
    ],
    "page": 5,
    "practiceId": "6A"
  },
  {
    "id": "7-A",
    "title": "Graph Representation Analysis",
    "topic": "graphAnalysis",
    "practiceType": "graphAnalysis",
    "prompt": "Use the discrete graph. a. Is it discrete or continuous? b. State the domain. c. State the range. d. Is it a function?",
    "answer": "a. discrete; b. {2, 3, 6, 7}; c. {2, 3, 4, 6, 7}; d. not a function",
    "steps": [
      "The graph is a set of separate points, so it is discrete.",
      "The input x = 6 has two different outputs, so it is not a function."
    ],
    "page": 6,
    "practiceId": "7-B"
  },
  {
    "id": "7-B",
    "title": "Graph Representation Analysis",
    "topic": "graphAnalysis",
    "practiceType": "graphAnalysis",
    "prompt": "Use the discrete graph. a. Is it discrete or continuous? b. State the domain. c. State the range. d. Is it a function?",
    "answer": "a. discrete; b. {1, 2, 4, 7, 9}; c. {1, 2, 5, 6}; d. function",
    "steps": [
      "The graph is a set of separate points, so it is discrete.",
      "Every input has exactly one output, so it is a function."
    ],
    "page": 6,
    "practiceId": "7-A"
  },
  {
    "id": "8-A",
    "title": "Continuous Graph Analysis",
    "topic": "graphAnalysis",
    "practiceType": "graphAnalysis",
    "prompt": "Use the graphed relation. a. Is it discrete or continuous? b. State the domain. c. State the range. d. Is it a function?",
    "answer": "a. continuous; b. [-4, 3); c. [-2, 3]; d. function",
    "steps": [
      "Connected line pieces make the relation continuous on its interval.",
      "The left endpoint is included and the right endpoint is open.",
      "It passes the vertical line test."
    ],
    "page": 7,
    "practiceId": "8-B"
  },
  {
    "id": "8-B",
    "title": "Continuous Graph Analysis",
    "topic": "graphAnalysis",
    "practiceType": "graphAnalysis",
    "prompt": "Use the graphed relation. a. Is it discrete or continuous? b. State the domain. c. State the range. d. Is it a function?",
    "answer": "a. continuous; b. (-3, 4]; c. [-2, 4); d. function",
    "steps": [
      "Connected line pieces make the relation continuous on its interval.",
      "The left endpoint is open and the right endpoint is closed.",
      "It passes the vertical line test."
    ],
    "page": 7,
    "practiceId": "8-A"
  },
  {
    "id": "9-A",
    "title": "Context Graph Analysis",
    "topic": "contextGraphs",
    "practiceType": "contextGraphs",
    "prompt": "A tank starts leaking water. Use V(t) from the graph. a. Find the slope and explain it. b. Write an equation. c. Find V(0). d. Find t when V(t) = 10. e. State the domain and range.",
    "answer": "a. -5 liters/min; b. V(t) = -5t + 30; c. 30 liters; d. t = 4; e. domain [0, 6], range [0, 30]",
    "steps": [
      "Use the points (0, 30) and (6, 0).",
      "Slope = (0 - 30)/(6 - 0) = -5, meaning the tank loses 5 liters per minute.",
      "Solve 10 = -5t + 30 to get t = 4."
    ],
    "page": 8,
    "practiceId": "9-B"
  },
  {
    "id": "9-B",
    "title": "Context Graph Analysis",
    "topic": "contextGraphs",
    "practiceType": "contextGraphs",
    "prompt": "A phone battery drains during game play. Use B(t) from the graph. a. Find the slope and explain it. b. Write an equation. c. Find B(0). d. Find t when B(t) = 60. e. State the domain and range.",
    "answer": "a. -10 percent/hour; b. B(t) = -10t + 90; c. 90%; d. t = 3; e. domain [0, 5], range [40, 90]",
    "steps": [
      "Use the points (0, 90) and (5, 40).",
      "Slope = (40 - 90)/(5 - 0) = -10, meaning the battery drops 10 percentage points per hour.",
      "Solve 60 = -10t + 90 to get t = 3."
    ],
    "page": 8,
    "practiceId": "9-A"
  },
  {
    "id": "10-A",
    "title": "Linear Graph Features",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Use the red graph of y = f(x). a. Find f(-4). b. Find x if f(x) = 0. c. Find the slope. d. Write the equation.",
    "answer": "a. -10; b. x = -2; c. 5; d. f(x) = 5x + 10",
    "steps": [
      "The line crosses the x-axis at x = -2.",
      "The y-intercept is 10 and the slope is 5.",
      "So f(x) = 5x + 10."
    ],
    "page": 9,
    "practiceId": "10-B"
  },
  {
    "id": "10-B",
    "title": "Linear Graph Features",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Use the red graph of y = g(x). a. Find g(4). b. Find x if g(x) = 0. c. Find the slope. d. Write the equation.",
    "answer": "a. -8; b. x = 2; c. -4; d. g(x) = -4x + 8",
    "steps": [
      "The line crosses the x-axis at x = 2.",
      "The y-intercept is 8 and the slope is -4.",
      "So g(x) = -4x + 8."
    ],
    "page": 9,
    "practiceId": "10-A"
  },
  {
    "id": "11-A",
    "title": "Slope Formula",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Find the slope through (-1, 1) and (2, -5). Show substitution.",
    "answer": "m = -2",
    "steps": [
      "m = (-5 - 1)/(2 - (-1)).",
      "m = -6/3 = -2."
    ],
    "page": 10,
    "practiceId": "11-B"
  },
  {
    "id": "11-B",
    "title": "Slope Formula",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "Find the slope through (-3, -4) and (5, 8). Show substitution.",
    "answer": "m = 3/2",
    "steps": [
      "m = (8 - (-4))/(5 - (-3)).",
      "m = 12/8 = 3/2."
    ],
    "page": 10,
    "practiceId": "11-A"
  },
  {
    "id": "12-A",
    "title": "Table to Linear Rule",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "For the table x: 0, 1, 2, 3, 4 and f(x): 1, 4, 7, 10, 13: a. Is it linear? Why? b. Find f(2). c. Find x if f(x) = 10. d. Write the rule.",
    "answer": "a. yes, constant difference 3; b. 7; c. x = 3; d. f(x) = 3x + 1",
    "steps": [
      "The y-values increase by 3 each step.",
      "The starting value is 1, so the rule is f(x) = 3x + 1."
    ],
    "page": 11,
    "practiceId": "12-B"
  },
  {
    "id": "12-B",
    "title": "Table to Linear Rule",
    "topic": "linearRules",
    "practiceType": "linearRules",
    "prompt": "For the table x: 0, 1, 2, 3, 4 and g(x): 12, 10, 8, 6, 4: a. Is it linear? Why? b. Find g(2). c. Find x if g(x) = 6. d. Write the rule.",
    "answer": "a. yes, constant difference -2; b. 8; c. x = 3; d. g(x) = -2x + 12",
    "steps": [
      "The y-values decrease by 2 each step.",
      "The starting value is 12, so the rule is g(x) = -2x + 12."
    ],
    "page": 11,
    "practiceId": "12-A"
  }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit3ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit3ReviewChecked", JSON.stringify(state.checked));
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
  domainRange: [
    () => practiceResult(
      "A continuous graph begins with an open circle at x = -6 and ends with a closed circle at x = 2. Write the domain.",
      "(-6, 2]",
      ["(-6,2]"],
      [
        "Domain means the x-values covered by the graph.",
        "The open circle at -6 means -6 is not included.",
        "The closed circle at 2 means 2 is included, so the domain is (-6, 2]."
      ]
    ),
    () => practiceResult(
      "A continuous graph has lowest y-value -3 included and highest y-value 5 not included. Write the range.",
      "[-3, 5)",
      ["[-3,5)"],
      [
        "Range means the y-values covered by the graph.",
        "The lowest value -3 is included, so use a bracket.",
        "The highest value 5 is not included, so use a parenthesis."
      ]
    ),
    () => practiceResult(
      "A graph covers x-values from -4 to 7. The point at x = -4 is closed and the point at x = 7 is open. Write the domain.",
      "[-4, 7)",
      ["[-4,7)"],
      [
        "Use the left and right x-values.",
        "Closed at -4 gives a bracket.",
        "Open at 7 gives a parenthesis, so the domain is [-4, 7)."
      ]
    ),
    () => practiceResult(
      "A graph covers y-values greater than -2 and less than or equal to 6. Write the range in interval notation.",
      "(-2, 6]",
      ["(-2,6]"],
      [
        "Greater than -2 means -2 is not included.",
        "Less than or equal to 6 means 6 is included.",
        "The range is (-2, 6]."
      ]
    )
  ],
  functionValues: [
    () => practiceResult(
      "Use the table: x: -1, 0, 1, 2 and f(x): 6, 3, 0, -3. What is f(2)?",
      "-3",
      ["f(2) = -3"],
      [
        "Find x = 2 in the table.",
        "The matching output is -3, so f(2) = -3."
      ]
    ),
    () => practiceResult(
      "Use the table: x: 0, 1, 2, 3 and g(x): -4, -1, 2, 5. For what value of x is g(x) = 2?",
      "x = 2",
      ["2"],
      [
        "Find the output 2 in the g(x) row.",
        "The input above it is x = 2."
      ]
    ),
    () => practiceResult(
      "Given h(x) = -2x + 7, what is h(4)?",
      "-1",
      ["h(4) = -1"],
      [
        "Substitute 4 for x.",
        "h(4) = -2(4) + 7 = -8 + 7 = -1."
      ]
    ),
    () => practiceResult(
      "Given p(x) = 3x - 5, find x when p(x) = 10.",
      "x = 5",
      ["5"],
      [
        "Set the rule equal to 10: 3x - 5 = 10.",
        "Add 5 to both sides: 3x = 15.",
        "Divide by 3, so x = 5."
      ]
    )
  ],
  slope: [
    () => practiceResult(
      "Find the slope through (-2, 5) and (4, -1).",
      "m = -1",
      ["-1"],
      [
        "Use m = (y2 - y1) / (x2 - x1).",
        "m = (-1 - 5) / (4 - (-2)) = -6 / 6.",
        "m = -1."
      ]
    ),
    () => practiceResult(
      "Find the slope through (1, -3) and (5, 5).",
      "m = 2",
      ["2"],
      [
        "Use m = (y2 - y1) / (x2 - x1).",
        "m = (5 - (-3)) / (5 - 1) = 8 / 4.",
        "m = 2."
      ]
    ),
    () => practiceResult(
      "Find the slope through (-3, 2) and (3, 5).",
      "m = 1/2",
      ["1/2", "0.5"],
      [
        "Use m = (y2 - y1) / (x2 - x1).",
        "m = (5 - 2) / (3 - (-3)) = 3 / 6.",
        "m = 1/2."
      ]
    ),
    () => practiceResult(
      "Find the slope through (2, 7) and (6, -1).",
      "m = -2",
      ["-2"],
      [
        "Use m = (y2 - y1) / (x2 - x1).",
        "m = (-1 - 7) / (6 - 2) = -8 / 4.",
        "m = -2."
      ]
    )
  ],
  linearRule: [
    () => practiceResult(
      "A line has slope 3 and y-intercept -4. Write the equation.",
      "y = 3x - 4",
      ["3x-4", "f(x)=3x-4"],
      [
        "Slope-intercept form is y = mx + b.",
        "Use m = 3 and b = -4.",
        "The equation is y = 3x - 4."
      ]
    ),
    () => practiceResult(
      "For the table x: 0, 1, 2, 3 and y: 8, 6, 4, 2, write the linear rule.",
      "y = -2x + 8",
      ["-2x+8", "f(x)=-2x+8"],
      [
        "The outputs decrease by 2 each time x increases by 1, so m = -2.",
        "When x = 0, y = 8, so b = 8.",
        "The rule is y = -2x + 8."
      ]
    ),
    () => practiceResult(
      "A line crosses the y-axis at 5 and rises 2 units for every 1 unit to the right. Write the equation.",
      "y = 2x + 5",
      ["2x+5", "f(x)=2x+5"],
      [
        "Rising 2 for every 1 right means the slope is 2.",
        "Crossing the y-axis at 5 means b = 5.",
        "The equation is y = 2x + 5."
      ]
    ),
    () => practiceResult(
      "For the table x: 0, 1, 2, 3 and y: -6, -1, 4, 9, write the linear rule.",
      "y = 5x - 6",
      ["5x-6", "f(x)=5x-6"],
      [
        "The outputs increase by 5, so the slope is 5.",
        "When x = 0, y = -6, so the starting value is -6.",
        "The rule is y = 5x - 6."
      ]
    )
  ],
  functionRepresentations: [
    () => practiceResult(
      "Is {(1, 4), (2, 5), (3, 5), (4, 8)} a function? Explain.",
      "yes, it is a function",
      ["yes", "function"],
      [
        "Check whether any input repeats with different outputs.",
        "The inputs 1, 2, 3, and 4 each appear once.",
        "Each input has exactly one output, so it is a function."
      ]
    ),
    () => practiceResult(
      "Is {(-2, 1), (0, 3), (-2, 6), (4, 9)} a function? Explain.",
      "no, it is not a function",
      ["no", "not a function"],
      [
        "Check whether any input repeats with different outputs.",
        "Input -2 is paired with both 1 and 6.",
        "One input cannot have two different outputs, so it is not a function."
      ]
    ),
    () => practiceResult(
      "A relation has points (0, 2), (1, 5), (3, 5), and (6, 8). State the domain.",
      "{0, 1, 3, 6}",
      ["0,1,3,6"],
      [
        "The domain is the set of input values.",
        "Use the x-values from each point: 0, 1, 3, and 6."
      ]
    ),
    () => practiceResult(
      "A relation is shown as separate plotted points, not connected by line segments. Is it discrete or continuous?",
      "discrete",
      ["discrete relation"],
      [
        "Separate points represent individual values.",
        "Because the graph is not connected, the relation is discrete."
      ]
    )
  ],
  contextLinear: [
    () => practiceResult(
      "A candle is 12 inches tall and burns 1.5 inches each hour. Write h(t), then find h(4).",
      "h(t) = -1.5t + 12; h(4) = 6",
      ["-1.5t+12;6", "h(4)=6", "6"],
      [
        "The starting height is 12, so the y-intercept is 12.",
        "The candle loses height, so the slope is -1.5.",
        "h(t) = -1.5t + 12 and h(4) = -1.5(4) + 12 = 6."
      ]
    ),
    () => practiceResult(
      "A gym charges a $20 sign-up fee plus $8 per class. Write C(x), then find C(5).",
      "C(x) = 8x + 20; C(5) = 60",
      ["8x+20;60", "c(5)=60", "$60", "60"],
      [
        "The fixed starting fee is 20.",
        "Each class adds 8, so the slope is 8.",
        "C(x) = 8x + 20 and C(5) = 8(5) + 20 = 60."
      ]
    ),
    () => practiceResult(
      "A pool starts with 40 gallons and drains 4 gallons per minute. When will it have 12 gallons left?",
      "7 minutes",
      ["7", "t = 7", "7 min"],
      [
        "Model the amount with A(t) = -4t + 40.",
        "Set the amount equal to 12: 12 = -4t + 40.",
        "-28 = -4t, so t = 7 minutes."
      ]
    ),
    () => practiceResult(
      "A phone battery starts at 85% and drops 5 percentage points per hour. Write B(t), then find B(6).",
      "B(t) = -5t + 85; B(6) = 55",
      ["-5t+85;55", "b(6)=55", "55%"],
      [
        "The starting battery level is 85.",
        "Dropping 5 percentage points per hour gives a slope of -5.",
        "B(t) = -5t + 85 and B(6) = 55."
      ]
    )
  ]
};

let practiceCounters = {};

function practiceTypeForProblem(problem) {
  const title = (problem?.title || "").toLowerCase();
  if (title.includes("domain") || title.includes("range") || title.includes("continuous graph")) return "domainRange";
  if (title.includes("reading function") || title.includes("reading inputs") || title.includes("function notation")) return "functionValues";
  if (title.includes("slope from") || title.includes("slope formula")) return "slope";
  if (title.includes("context")) return "contextLinear";
  if (title.includes("functions across") || title.includes("discrete") || title.includes("graph representation")) return "functionRepresentations";
  return "linearRule";
}

function nextPractice(type, reset = false) {
  const bank = practiceBanks[type] || practiceBanks.linearRule;
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
