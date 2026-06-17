const APP = {
  "title": "Unit 8 Quiz Review Dashboard",
  "course": "Algebra I - Exponential Functions"
};

const TOPICS = {
  "modelTypes": "Model Types and Tables",
  "growthDecay": "Growth and Decay",
  "expModels": "Writing Exponential Models",
  "predictions": "Predictions and Applications"
};

const PROBLEMS = [
  {
    "id": "1A",
    "title": "Classifying Tables",
    "topic": "modelTypes",
    "practiceType": "modelTypes",
    "prompt": "For y-values 3, 9, 27, 81, what model type fits best?",
    "answer": "C. exponential",
    "steps": [
      "The y-values have a common ratio of 3.",
      "A common ratio indicates exponential."
    ],
    "page": 1,
    "practiceId": "1B"
  },
  {
    "id": "1B",
    "title": "Classifying Tables",
    "topic": "modelTypes",
    "practiceType": "modelTypes",
    "prompt": "For y-values 4, 9, 16, 25, what model type fits best?",
    "answer": "B. quadratic",
    "steps": [
      "First differences are 5, 7, 9.",
      "Second differences are constant at 2."
    ],
    "page": 1,
    "practiceId": "1A"
  },
  {
    "id": "2A",
    "title": "Growth or Decay",
    "topic": "growthDecay",
    "practiceType": "growthDecay",
    "prompt": "In y = 80(1.12)^x, what is the percent rate?",
    "answer": "A. 12% growth",
    "steps": [
      "b = 1.12 is greater than 1.",
      "1.12 = 1 + 0.12, so it is 12% growth."
    ],
    "page": 1,
    "practiceId": "2B"
  },
  {
    "id": "2B",
    "title": "Growth or Decay",
    "topic": "growthDecay",
    "practiceType": "growthDecay",
    "prompt": "In y = 500(0.76)^x, what is the percent rate?",
    "answer": "D. 24% decay",
    "steps": [
      "b = 0.76 is less than 1.",
      "1 - 0.76 = 0.24, so it is 24% decay."
    ],
    "page": 1,
    "practiceId": "2A"
  },
  {
    "id": "3A",
    "title": "Writing Exponential Models",
    "topic": "expModels",
    "practiceType": "expModels",
    "prompt": "A table has y = 6 when x = 0 and multiplies by 4 each step. What is the model?",
    "answer": "B. y = 6(4)^x",
    "steps": [
      "a is the starting value at x = 0.",
      "b is the common ratio."
    ],
    "page": 2,
    "practiceId": "3B"
  },
  {
    "id": "3B",
    "title": "Writing Exponential Models",
    "topic": "expModels",
    "practiceType": "expModels",
    "prompt": "A table has y = 20 when x = 0 and multiplies by 0.5 each step. What is the model?",
    "answer": "B. y = 20(0.5)^x",
    "steps": [
      "a = 20 and b = 0.5.",
      "Use y = ab^x."
    ],
    "page": 2,
    "practiceId": "3A"
  },
  {
    "id": "4A",
    "title": "Prediction",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "For y = 250(0.8)^x, what is y when x = 3?",
    "answer": "A. 128",
    "steps": [
      "Compute 250(0.8)^3.",
      "0.8^3 = 0.512, and 250(0.512) = 128."
    ],
    "page": 2,
    "practiceId": "4B"
  },
  {
    "id": "4B",
    "title": "Prediction",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "For y = 100(1.5)^x, what is y when x = 2?",
    "answer": "C. 225",
    "steps": [
      "Compute 100(1.5)^2.",
      "1.5^2 = 2.25, so y = 225."
    ],
    "page": 2,
    "practiceId": "4A"
  },
  {
    "id": "5-A",
    "title": "Classifying Tables",
    "topic": "modelTypes",
    "practiceType": "modelTypes",
    "prompt": "Classify each table: Table 1 y-values: 5, 12, 19, 26 Table 2 y-values: 2, 6, 18, 54 Table 3 y-values: 3, 4, 7, 12",
    "answer": "Table 1 linear; Table 2 exponential; Table 3 quadratic",
    "steps": [
      "Table 1 has constant difference 7.",
      "Table 2 has common ratio 3.",
      "Table 3 has constant second differences."
    ],
    "page": 3,
    "practiceId": "5-B"
  },
  {
    "id": "5-B",
    "title": "Classifying Tables",
    "topic": "modelTypes",
    "practiceType": "modelTypes",
    "prompt": "Classify each table: Table 1 y-values: 8, 15, 22, 29 Table 2 y-values: 4, 10, 25, 62.5 Table 3 y-values: 1, 3, 7, 13",
    "answer": "Table 1 linear; Table 2 exponential; Table 3 quadratic",
    "steps": [
      "Table 1 has constant difference 7.",
      "Table 2 has common ratio 2.5.",
      "Table 3 has constant second differences."
    ],
    "page": 3,
    "practiceId": "5-A"
  },
  {
    "id": "6-A",
    "title": "Writing y = ab^x",
    "topic": "expModels",
    "practiceType": "expModels",
    "prompt": "Write an exponential equation for x: 0, 1, 2, 3 and y: 7, 21, 63, 189.",
    "answer": "y = 7(3)^x",
    "steps": [
      "a is the value when x = 0: 7.",
      "The common ratio is 21/7 = 3."
    ],
    "page": 3,
    "practiceId": "6-B"
  },
  {
    "id": "6-B",
    "title": "Writing y = ab^x",
    "topic": "expModels",
    "practiceType": "expModels",
    "prompt": "Write an exponential equation for x: 0, 1, 2, 3 and y: 12, 9.6, 7.68, 6.144.",
    "answer": "y = 12(0.8)^x",
    "steps": [
      "a is the value when x = 0: 12.",
      "The common ratio is 9.6/12 = 0.8."
    ],
    "page": 3,
    "practiceId": "6-A"
  },
  {
    "id": "7-A",
    "title": "Growth and Decay",
    "topic": "growthDecay",
    "practiceType": "growthDecay",
    "prompt": "For y = 100(1.15)^x: a. Growth or decay? b. Percent rate?",
    "answer": "a. growth; b. 15%",
    "steps": [
      "b = 1.15 is greater than 1.",
      "1.15 = 1 + 0.15."
    ],
    "page": 4,
    "practiceId": "7-B"
  },
  {
    "id": "7-B",
    "title": "Growth and Decay",
    "topic": "growthDecay",
    "practiceType": "growthDecay",
    "prompt": "For y = 50(0.82)^x: a. Growth or decay? b. Percent rate?",
    "answer": "a. decay; b. 18%",
    "steps": [
      "b = 0.82 is less than 1.",
      "1 - 0.82 = 0.18."
    ],
    "page": 4,
    "practiceId": "7-A"
  },
  {
    "id": "8-A",
    "title": "Depreciation",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "Equipment costs $8,500 and depreciates 18% per year. Write a model and find the value after 5 years.",
    "answer": "V(t) = 8500(0.82)^t; V(5) ≈ $3,151.29",
    "steps": [
      "Depreciation factor is 1 - 0.18 = 0.82.",
      "V(5) = 8500(0.82)^5 ≈ 3151.29."
    ],
    "page": 4,
    "practiceId": "8-B"
  },
  {
    "id": "8-B",
    "title": "Depreciation",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "Equipment costs $12,000 and depreciates 12% per year. Write a model and find the value after 4 years.",
    "answer": "V(t) = 12000(0.88)^t; V(4) ≈ $7,196.34",
    "steps": [
      "Depreciation factor is 1 - 0.12 = 0.88.",
      "V(4) = 12000(0.88)^4 ≈ 7196.34."
    ],
    "page": 4,
    "practiceId": "8-A"
  },
  {
    "id": "9-A",
    "title": "Appreciation",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "A trading card costs $450 and appreciates 22% per year. Write a model and find the value after 8 years.",
    "answer": "V(t) = 450(1.22)^t; V(8) ≈ $2,208.47",
    "steps": [
      "Growth factor is 1 + 0.22 = 1.22.",
      "V(8) = 450(1.22)^8 ≈ 2208.47."
    ],
    "page": 5,
    "practiceId": "9-B"
  },
  {
    "id": "9-B",
    "title": "Appreciation",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "Furniture costs $3,200 and appreciates 6% per year. Write a model and find the value after 10 years.",
    "answer": "V(t) = 3200(1.06)^t; V(10) ≈ $5,730.71",
    "steps": [
      "Growth factor is 1 + 0.06 = 1.06.",
      "V(10) = 3200(1.06)^10 ≈ 5730.71."
    ],
    "page": 5,
    "practiceId": "9-A"
  },
  {
    "id": "10-A",
    "title": "Linear Prediction",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "A linear model for study hours and score is y = 8.8x + 54. Predict the score for 6.5 hours.",
    "answer": "111.2 points",
    "steps": [
      "Substitute x = 6.5.",
      "y = 8.8(6.5) + 54 = 111.2."
    ],
    "page": 5,
    "practiceId": "10-B"
  },
  {
    "id": "10-B",
    "title": "Linear Prediction",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "A linear model for miles and gallons is y = 0.05x. Predict gas used for 350 miles.",
    "answer": "17.5 gallons",
    "steps": [
      "Substitute x = 350.",
      "y = 0.05(350) = 17.5."
    ],
    "page": 5,
    "practiceId": "10-A"
  },
  {
    "id": "11-A",
    "title": "Exponential Prediction",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "A bacteria model is y = 8000(0.7)^x. Predict the bacteria count after 6 hours.",
    "answer": "≈ 941 bacteria",
    "steps": [
      "Substitute x = 6.",
      "8000(0.7)^6 ≈ 941."
    ],
    "page": 6,
    "practiceId": "11-B"
  },
  {
    "id": "11-B",
    "title": "Exponential Prediction",
    "topic": "predictions",
    "practiceType": "predictions",
    "prompt": "A medicine model is y = 250(0.8)^x. Predict the concentration after 5 hours.",
    "answer": "81.92 mg/L",
    "steps": [
      "Substitute x = 5.",
      "250(0.8)^5 = 81.92."
    ],
    "page": 6,
    "practiceId": "11-A"
  }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit8ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit8ReviewChecked", JSON.stringify(state.checked));
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
  classifySingle: [
    () => practiceResult("For y-values 2, 6, 18, 54, what model type fits best?", "exponential", ["C"], ["The y-values have a common ratio of 3.", "A common ratio indicates an exponential model."]),
    () => practiceResult("For y-values 7, 12, 17, 22, what model type fits best?", "linear", ["linear model"], ["The y-values increase by 5 each time.", "A constant first difference indicates a linear model."]),
    () => practiceResult("For y-values 1, 4, 9, 16, what model type fits best?", "quadratic", ["quadratic model"], ["The first differences are 3, 5, and 7.", "The second differences are constant, so the model is quadratic."]),
    () => practiceResult("For y-values 80, 40, 20, 10, what model type fits best?", "exponential", ["C"], ["The y-values are multiplied by 0.5 each step.", "A common ratio indicates exponential behavior."])
  ],
  classifyMultiple: [
    () => practiceResult("Classify each table by y-values. Table 1: 4, 10, 16, 22. Table 2: 5, 15, 45, 135. Table 3: 2, 5, 10, 17.", "Table 1 linear; Table 2 exponential; Table 3 quadratic", ["linear;exponential;quadratic"], ["Table 1 has constant difference 6.", "Table 2 has common ratio 3.", "Table 3 has constant second differences."]),
    () => practiceResult("Classify each table by y-values. Table 1: 3, 6, 12, 24. Table 2: 9, 14, 19, 24. Table 3: 1, 6, 15, 28.", "Table 1 exponential; Table 2 linear; Table 3 quadratic", ["exponential;linear;quadratic"], ["Table 1 doubles each step.", "Table 2 increases by 5 each step.", "Table 3 has constant second differences."]),
    () => practiceResult("Classify each table by y-values. Table 1: 10, 7, 4, 1. Table 2: 2, 8, 32, 128. Table 3: 4, 7, 12, 19.", "Table 1 linear; Table 2 exponential; Table 3 quadratic", ["linear;exponential;quadratic"], ["Table 1 has constant difference -3.", "Table 2 has common ratio 4.", "Table 3 has constant second differences."]),
    () => practiceResult("Classify each table by y-values. Table 1: 6, 9, 14, 21. Table 2: 12, 18, 24, 30. Table 3: 3, 1.5, 0.75, 0.375.", "Table 1 quadratic; Table 2 linear; Table 3 exponential", ["quadratic;linear;exponential"], ["Table 1 has constant second differences.", "Table 2 has constant difference 6.", "Table 3 has common ratio 0.5."])
  ],
  growthDecayRate: [
    () => practiceResult("In y = 240(1.08)^x, identify growth or decay and the percent rate.", "8% growth", ["growth;8%", "8 growth"], ["The base 1.08 is greater than 1, so it is growth.", "1.08 = 1 + 0.08, so the rate is 8%."]),
    () => practiceResult("In y = 900(0.65)^x, identify growth or decay and the percent rate.", "35% decay", ["decay;35%", "35 decay"], ["The base 0.65 is less than 1, so it is decay.", "1 - 0.65 = 0.35, so the rate is 35%."]),
    () => practiceResult("In y = 75(1.25)^x, identify growth or decay and the percent rate.", "25% growth", ["growth;25%", "25 growth"], ["1.25 is greater than 1.", "1.25 = 1 + 0.25, so this is 25% growth."]),
    () => practiceResult("In y = 1200(0.92)^x, identify growth or decay and the percent rate.", "8% decay", ["decay;8%", "8 decay"], ["0.92 is less than 1.", "1 - 0.92 = 0.08, so this is 8% decay."])
  ],
  writeExpModel: [
    () => practiceResult("A table has y = 9 when x = 0 and multiplies by 2 each step. Write the model.", "y = 9(2)^x", ["9(2)^x", "y=9(2)^x"], ["In y = ab^x, a is the starting value.", "The common ratio is b = 2."]),
    () => practiceResult("A table has x: 0, 1, 2, 3 and y: 16, 12, 9, 6.75. Write the exponential model.", "y = 16(0.75)^x", ["16(0.75)^x", "y=16(0.75)^x"], ["a = 16 because y = 16 when x = 0.", "The common ratio is 12/16 = 0.75."]),
    () => practiceResult("A table has y = 5 when x = 0 and multiplies by 4 each step. Write the model.", "y = 5(4)^x", ["5(4)^x", "y=5(4)^x"], ["The starting value is 5.", "The common ratio is 4."]),
    () => practiceResult("A table has x: 0, 1, 2, 3 and y: 40, 20, 10, 5. Write the exponential model.", "y = 40(0.5)^x", ["40(0.5)^x", "y=40(0.5)^x"], ["The starting value is 40.", "The common ratio is 20/40 = 0.5."])
  ],
  basicPrediction: [
    () => practiceResult("For y = 300(0.9)^x, what is y when x = 2?", "243", ["243"], ["Compute 300(0.9)^2.", "0.9^2 = 0.81, and 300(0.81) = 243."]),
    () => practiceResult("For y = 50(1.2)^x, what is y when x = 3?", "86.4", ["86.4"], ["Compute 50(1.2)^3.", "1.2^3 = 1.728, and 50(1.728) = 86.4."]),
    () => practiceResult("For y = 640(0.5)^x, what is y when x = 4?", "40", ["40"], ["Compute 640(0.5)^4.", "0.5^4 = 0.0625, and 640(0.0625) = 40."]),
    () => practiceResult("For y = 25(3)^x, what is y when x = 2?", "225", ["225"], ["Compute 25(3)^2.", "3^2 = 9, so y = 225."])
  ],
  depreciation: [
    () => practiceResult("A laptop costs $1,500 and depreciates 20% per year. Write a model and find the value after 3 years.", "V(t) = 1500(0.8)^t; V(3) = $768", ["1500(0.8)^t;768", "768"], ["The decay factor is 1 - 0.20 = 0.80.", "V(3) = 1500(0.8)^3 = 768."]),
    () => practiceResult("A car costs $18,000 and depreciates 15% per year. Write a model and find the value after 2 years.", "V(t) = 18000(0.85)^t; V(2) = $13,005", ["18000(0.85)^t;13005", "13005"], ["The decay factor is 1 - 0.15 = 0.85.", "V(2) = 18000(0.85)^2 = 13005."]),
    () => practiceResult("A machine costs $9,000 and depreciates 10% per year. Write a model and find the value after 4 years.", "V(t) = 9000(0.9)^t; V(4) = $5,904.90", ["9000(0.9)^t;5904.9", "5904.90"], ["The decay factor is 0.90.", "V(4) = 9000(0.9)^4 = 5904.9."]),
    () => practiceResult("A phone costs $800 and depreciates 25% per year. Write a model and find the value after 2 years.", "V(t) = 800(0.75)^t; V(2) = $450", ["800(0.75)^t;450", "450"], ["The decay factor is 1 - 0.25 = 0.75.", "V(2) = 800(0.75)^2 = 450."])
  ],
  appreciation: [
    () => practiceResult("A collectible costs $300 and appreciates 10% per year. Write a model and find the value after 4 years.", "V(t) = 300(1.1)^t; V(4) = $439.23", ["300(1.1)^t;439.23", "439.23"], ["The growth factor is 1 + 0.10 = 1.10.", "V(4) = 300(1.1)^4 = 439.23."]),
    () => practiceResult("A rare book costs $500 and appreciates 8% per year. Write a model and find the value after 3 years.", "V(t) = 500(1.08)^t; V(3) = $629.86", ["500(1.08)^t;629.86", "629.86"], ["The growth factor is 1.08.", "V(3) = 500(1.08)^3 = 629.86."]),
    () => practiceResult("A painting costs $1,200 and appreciates 6% per year. Write a model and find the value after 5 years.", "V(t) = 1200(1.06)^t; V(5) = $1,605.87", ["1200(1.06)^t;1605.87", "1605.87"], ["The growth factor is 1.06.", "V(5) = 1200(1.06)^5 = 1605.87."]),
    () => practiceResult("A signed jersey costs $250 and appreciates 12% per year. Write a model and find the value after 3 years.", "V(t) = 250(1.12)^t; V(3) = $351.23", ["250(1.12)^t;351.23", "351.23"], ["The growth factor is 1.12.", "V(3) = 250(1.12)^3 = 351.23."])
  ],
  linearPrediction: [
    () => practiceResult("A linear model for tutoring hours and score is y = 7.5x + 60. Predict the score for 4 hours.", "90 points", ["90", "90 points"], ["Substitute x = 4.", "y = 7.5(4) + 60 = 90."]),
    () => practiceResult("A linear model for miles and fuel used is y = 0.04x. Predict fuel used for 275 miles.", "11 gallons", ["11", "11 gallons"], ["Substitute x = 275.", "y = 0.04(275) = 11."]),
    () => practiceResult("A linear model for plant height is y = 2.5x + 6. Predict the height at x = 8 weeks.", "26 inches", ["26", "26 inches"], ["Substitute x = 8.", "y = 2.5(8) + 6 = 26."]),
    () => practiceResult("A linear model for cost is y = 12x + 35. Predict the cost when x = 6.", "$107", ["107", "$107"], ["Substitute x = 6.", "y = 12(6) + 35 = 107."])
  ],
  exponentialPrediction: [
    () => practiceResult("A bacteria model is y = 500(1.4)^x. Predict the count after 3 hours.", "about 1372 bacteria", ["1372", "about1372"], ["Substitute x = 3.", "500(1.4)^3 = 1372."]),
    () => practiceResult("A medicine model is y = 400(0.75)^x. Predict the concentration after 4 hours.", "126.56 mg/L", ["126.56"], ["Substitute x = 4.", "400(0.75)^4 = 126.56."]),
    () => practiceResult("A population model is y = 2000(1.05)^x. Predict the population after 6 years.", "about 2680", ["2680", "about2680"], ["Substitute x = 6.", "2000(1.05)^6 ≈ 2680.19, so about 2680."]),
    () => practiceResult("A chemical model is y = 120(0.6)^x. Predict the amount after 3 minutes.", "25.92", ["25.92"], ["Substitute x = 3.", "120(0.6)^3 = 25.92."])
  ]
};

let practiceCounters = {};

function practiceTypeForProblem(problem) {
  const title = (problem?.title || "").toLowerCase();
  if (title.includes("classifying tables") && problem?.id.includes("-")) return "classifyMultiple";
  if (title.includes("classifying tables")) return "classifySingle";
  if (title.includes("growth") || title.includes("decay") && !title.includes("depreciation")) return "growthDecayRate";
  if (title.includes("writing exponential") || title.includes("writing y")) return "writeExpModel";
  if (title === "prediction") return "basicPrediction";
  if (title.includes("depreciation")) return "depreciation";
  if (title.includes("appreciation")) return "appreciation";
  if (title.includes("linear prediction")) return "linearPrediction";
  if (title.includes("exponential prediction")) return "exponentialPrediction";
  return "basicPrediction";
}

function nextPractice(type, reset = false) {
  const bank = practiceBanks[type] || practiceBanks.basicPrediction;
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
