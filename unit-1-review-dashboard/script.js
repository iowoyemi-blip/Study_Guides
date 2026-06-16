const APP = {
  title: "Unit 1 Review Dashboard",
  course: "Algebra I - Exponents and Radicals"
};

const TOPICS = {
  exponentRules: "Exponent Rules",
  radicalSimplifying: "Simplifying Radicals",
  radicalOperations: "Radical Operations",
  positiveExponents: "Positive Exponents",
  rationalizing: "Rationalizing Denominators"
};

const PROBLEMS = [
  { id: "1A", topic: "exponentRules", practiceType: "powerRule", answer: "\\(9x^2y^4\\)", steps: ["Square each factor: \\((-3)^2 \\cdot x^2 \\cdot (y^2)^2\\).", "Simplify to \\(9x^2y^4\\)."], page: 1 },
  { id: "1B", topic: "exponentRules", practiceType: "powerRule", answer: "\\(8x^6y^9\\)", steps: ["Cube each factor: \\(2^3 \\cdot (x^2)^3 \\cdot (y^3)^3\\).", "Simplify to \\(8x^6y^9\\)."], page: 1 },
  { id: "2A", topic: "exponentRules", practiceType: "productRule", answer: "\\(-15x^7y^5\\)", steps: ["Multiply coefficients: \\(-3 \\cdot 5=-15\\).", "Add exponents for like bases: \\(x^{2+5}y^{4+1}\\)."], page: 1 },
  { id: "2B", topic: "exponentRules", practiceType: "productRule", answer: "\\(-8a^8b^6\\)", steps: ["Multiply coefficients: \\(4 \\cdot (-2)=-8\\).", "Add exponents for like bases: \\(a^{3+5}b^{2+4}\\)."], page: 1 },
  { id: "3A", topic: "exponentRules", practiceType: "quotientRule", answer: "\\(4a^3b^4\\)", steps: ["Divide coefficients: \\(12 \\div 3=4\\).", "Subtract exponents: \\(a^{5-2}b^{7-3}\\)."], page: 2 },
  { id: "3B", topic: "exponentRules", practiceType: "quotientRule", answer: "\\(4m^4n^2\\)", steps: ["Divide coefficients: \\(20 \\div 5=4\\).", "Subtract exponents: \\(m^{6-2}n^{5-3}\\)."], page: 2 },
  { id: "4A", topic: "radicalSimplifying", practiceType: "radicalVariables", answer: "\\(6x^2y\\sqrt{2y}\\)", steps: ["Factor perfect squares: \\(72x^4y^3=36x^4y^2(2y)\\).", "Take the square factors out: \\(6x^2y\\sqrt{2y}\\)."], page: 2 },
  { id: "4B", topic: "radicalSimplifying", practiceType: "radicalVariables", answer: "\\(7a^3b^2\\sqrt{2b}\\)", steps: ["Factor perfect squares: \\(98a^6b^5=49a^6b^4(2b)\\).", "Take the square factors out: \\(7a^3b^2\\sqrt{2b}\\)."], page: 2 },
  { id: "5A", topic: "radicalSimplifying", practiceType: "radicalQuotient", answer: "\\(\\frac{3}{5}\\)", steps: ["Combine the radicals: \\(\\frac{\\sqrt{18}}{\\sqrt{50}}=\\sqrt{\\frac{18}{50}}\\).", "Simplify \\(\\sqrt{\\frac{9}{25}}=\\frac{3}{5}\\)."], page: 3 },
  { id: "5B", topic: "radicalSimplifying", practiceType: "radicalQuotient", answer: "\\(2\\)", steps: ["Combine the radicals: \\(\\frac{\\sqrt{32}}{\\sqrt{8}}=\\sqrt{4}\\).", "Simplify \\(\\sqrt4=2\\)."], page: 3 },
  { id: "6A", topic: "radicalOperations", practiceType: "addRadicals", answer: "\\(9\\sqrt3\\)", steps: ["Simplify: \\(\\sqrt{75}=5\\sqrt3\\) and \\(\\sqrt{48}=4\\sqrt3\\).", "Add like radicals: \\(5\\sqrt3+4\\sqrt3=9\\sqrt3\\)."], page: 3 },
  { id: "6B", topic: "radicalOperations", practiceType: "addRadicals", answer: "\\(5\\sqrt5\\)", steps: ["Simplify: \\(\\sqrt{45}=3\\sqrt5\\) and \\(\\sqrt{20}=2\\sqrt5\\).", "Add like radicals: \\(3\\sqrt5+2\\sqrt5=5\\sqrt5\\)."], page: 4 },
  { id: "7A", topic: "radicalOperations", practiceType: "multiplyRadicals", answer: "\\(3\\sqrt{10}\\)", steps: ["Multiply inside the radical: \\(\\sqrt6\\cdot\\sqrt{15}=\\sqrt{90}\\).", "Simplify \\(\\sqrt{90}=3\\sqrt{10}\\)."], page: 4 },
  { id: "7B", topic: "radicalOperations", practiceType: "multiplyRadicals", answer: "\\(6\\sqrt6\\)", steps: ["Multiply inside the radical: \\(\\sqrt{12}\\cdot\\sqrt{18}=\\sqrt{216}\\).", "Simplify \\(\\sqrt{216}=6\\sqrt6\\)."], page: 4 },
  { id: "8a-A", topic: "exponentRules", practiceType: "negativeNoParens", answer: "\\(-81\\)", steps: ["Without parentheses, the exponent applies to 3 only.", "\\(-3^4=-(3^4)=-81\\)."], page: 5 },
  { id: "8a-B", topic: "exponentRules", practiceType: "negativeNoParens", answer: "\\(-64\\)", steps: ["Without parentheses, the exponent applies to 4 only.", "\\(-4^3=-(4^3)=-64\\)."], page: 5 },
  { id: "8b-A", topic: "exponentRules", practiceType: "negativeWithParens", answer: "\\(-32\\)", steps: ["With parentheses, the whole base is \\(-2\\).", "\\((-2)^5=-32\\)."], page: 5 },
  { id: "8b-B", topic: "exponentRules", practiceType: "negativeWithParens", answer: "\\(-125\\)", steps: ["With parentheses, the whole base is \\(-5\\).", "\\((-5)^3=-125\\)."], page: 5 },
  { id: "9a-A", topic: "radicalSimplifying", practiceType: "simpleRadical", answer: "\\(4\\sqrt5\\)", steps: ["Factor out the largest perfect square: \\(80=16\\cdot5\\).", "\\(\\sqrt{80}=4\\sqrt5\\)."], page: 6 },
  { id: "9a-B", topic: "radicalSimplifying", practiceType: "simpleRadical", answer: "\\(6\\sqrt3\\)", steps: ["Factor out the largest perfect square: \\(108=36\\cdot3\\).", "\\(\\sqrt{108}=6\\sqrt3\\)."], page: 6 },
  { id: "9b-A", topic: "radicalSimplifying", practiceType: "radicalVariables", answer: "\\(6a^2b^2c\\sqrt{2b}\\)", steps: ["Factor perfect squares: \\(72a^4b^5c^2=36a^4b^4c^2(2b)\\).", "Take the square factors out."], page: 6 },
  { id: "9b-B", topic: "radicalSimplifying", practiceType: "radicalVariables", answer: "\\(5x^3yz\\sqrt{2y}\\)", steps: ["Factor perfect squares: \\(50x^6y^3z^2=25x^6y^2z^2(2y)\\).", "Take the square factors out."], page: 6 },
  { id: "10a-A", topic: "positiveExponents", practiceType: "positiveExponentQuotient", answer: "\\(x^6y\\)", steps: ["Square the numerator: \\((2x^4y^3)^2=4x^8y^6\\).", "Divide by \\(4x^2y^5\\) to get \\(x^6y\\)."], page: 7 },
  { id: "10a-B", topic: "positiveExponents", practiceType: "positiveExponentQuotient", answer: "\\(a^4b^3\\)", steps: ["Square the numerator: \\((3a^3b^2)^2=9a^6b^4\\).", "Divide by \\(9a^2b\\) to get \\(a^4b^3\\)."], page: 7 },
  { id: "10b-A", topic: "positiveExponents", practiceType: "positiveExponentFraction", answer: "\\(\\frac{4m^6}{n^4}\\)", steps: ["Square numerator and denominator.", "Simplify to \\(4m^6n^{-4}\\), then move \\(n^4\\) to the denominator."], page: 7 },
  { id: "10b-B", topic: "positiveExponents", practiceType: "positiveExponentFraction", answer: "\\(\\frac{4p^4}{q^4}\\)", steps: ["Square numerator and denominator.", "Simplify to \\(4p^4q^{-4}\\), then move \\(q^4\\) to the denominator."], page: 8 },
  { id: "11a-A", topic: "radicalOperations", practiceType: "subtractRadicals", answer: "\\(10\\sqrt5\\)", steps: ["Simplify \\(8\\sqrt{20}=16\\sqrt5\\).", "Subtract like radicals: \\(16\\sqrt5-6\\sqrt5=10\\sqrt5\\)."], page: 8 },
  { id: "11a-B", topic: "radicalOperations", practiceType: "subtractRadicals", answer: "\\(11\\sqrt5\\)", steps: ["Simplify: \\(5\\sqrt{45}=15\\sqrt5\\) and \\(2\\sqrt{20}=4\\sqrt5\\).", "Subtract like radicals: \\(15\\sqrt5-4\\sqrt5=11\\sqrt5\\)."], page: 8 },
  { id: "11c-A", topic: "radicalOperations", practiceType: "multiplyRadicals", answer: "\\(4\\sqrt{15}\\)", steps: ["Multiply: \\(2\\sqrt{10}\\cdot\\sqrt6=2\\sqrt{60}\\).", "Simplify to \\(4\\sqrt{15}\\)."], page: 9 },
  { id: "11c-B", topic: "radicalOperations", practiceType: "multiplyRadicals", answer: "\\(12\\sqrt6\\)", steps: ["Multiply: \\(3\\sqrt8\\cdot\\sqrt{12}=3\\sqrt{96}\\).", "Simplify to \\(12\\sqrt6\\)."], page: 9 },
  { id: "11d-A", topic: "radicalOperations", practiceType: "dividingRadicals", answer: "\\(6\\)", steps: ["Combine the quotient: \\(\\frac{\\sqrt{180}}{\\sqrt5}=\\sqrt{36}\\).", "Simplify to 6."], page: 9 },
  { id: "11d-B", topic: "radicalOperations", practiceType: "dividingRadicals", answer: "\\(12\\)", steps: ["Combine the quotient: \\(\\frac{\\sqrt{288}}{\\sqrt2}=\\sqrt{144}\\).", "Simplify to 12."], page: 10 },
  { id: "11e-A", topic: "rationalizing", practiceType: "rationalize", answer: "\\(\\frac{\\sqrt{21}}{7}\\)", steps: ["Multiply by \\(\\frac{\\sqrt7}{\\sqrt7}\\).", "\\(\\frac{\\sqrt3}{\\sqrt7}=\\frac{\\sqrt{21}}{7}\\)."], page: 10 },
  { id: "11e-B", topic: "rationalizing", practiceType: "rationalize", answer: "\\(\\frac{\\sqrt{55}}{11}\\)", steps: ["Multiply by \\(\\frac{\\sqrt{11}}{\\sqrt{11}}\\).", "\\(\\frac{\\sqrt5}{\\sqrt{11}}=\\frac{\\sqrt{55}}{11}\\)."], page: 10 }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit1ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit1ReviewChecked", JSON.stringify(state.checked));
}

function renderFilters() {
  $("topicFilters").innerHTML = [["all", "All Topics"], ...Object.entries(TOPICS)].map(([id, label]) =>
    `<button class="topic-filter ${state.topic === id ? "active" : ""}" data-topic="${id}">${label}</button>`
  ).join("");
}

function filteredProblems() {
  const q = state.query.trim().toLowerCase();
  return PROBLEMS.filter((p) => {
    const haystack = `${p.id} ${TOPICS[p.topic]} ${p.answer}`.toLowerCase();
    const matchesTopic = state.topic === "all" || p.topic === state.topic;
    const matchesQuery = !q || haystack.includes(q);
    return matchesTopic && matchesQuery;
  });
}

function tile(p) {
  return `<button class="problem-tile ${state.selected === p.id ? "active" : ""} ${state.checked.includes(p.id) ? "checked" : ""}" data-problem="${p.id}" title="${TOPICS[p.topic]}">${p.id}</button>`;
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
      return items.length ? `<section class="topic-group"><h3>${TOPICS[topic]}</h3><div class="problem-grid">${items.map(tile).join("")}</div></section>` : "";
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
      <span>${p.id} · ${TOPICS[p.topic]} · Page ${p.page}</span>
      <span class="badge">Answer key</span>
    </div>
    <h2>Problem ${p.id}</h2>
    <div class="answer-box">
      <h3>Final Answer</h3>
      <p class="answer-text hidden" id="answerText">${p.answer}</p>
      <button class="primary" id="showAnswer">Show Final Answer</button>
    </div>
    <div class="steps-box hidden" id="stepsBox">
      <h3>Solution Steps</h3>
      <ol class="step-list">${p.steps.map(step => `<li>${step}</li>`).join("")}</ol>
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
  typeset($("detailPanel"));
}

function typeset(node) {
  if (window.MathJax?.typesetPromise) MathJax.typesetPromise([node]);
}

function normalize(value) {
  return String(value).toLowerCase()
    .replace(/\\\(|\\\)|\$/g, "")
    .replace(/\s+/g, "")
    .replace(/\*/g, "")
    .replace(/−/g, "-")
    .replace(/sqrt/g, "sqrt")
    .replace(/\\sqrt/g, "sqrt")
    .replace(/[{}]/g, "")
    .replace(/\\frac/g, "frac");
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function powText(base, exp) {
  return exp === 1 ? base : `${base}^${exp}`;
}

function radicalText(coef, rad) {
  return coef === 1 ? `\\sqrt{${rad}}` : `${coef}\\sqrt{${rad}}`;
}

function practiceResult(prompt, answer, accepted, steps) {
  return { prompt, answer, accepted: [answer, ...accepted], steps };
}

const practice = {
  powerRule() {
    const c = rand(2, 5), x = rand(1, 3), y = rand(1, 3), p = rand(2, 3);
    const answer = `${c ** p}x^${x * p}y^${y * p}`;
    return practiceResult(`Simplify \\((${c}x^${x}y^${y})^${p}\\).`, `\\(${answer}\\)`, [answer], [
      "Raise the coefficient to the outside power.",
      "Multiply each exponent by the outside power."
    ]);
  },
  productRule() {
    const a = rand(2, 6), b = rand(2, 5), x1 = rand(1, 4), x2 = rand(1, 4), y1 = rand(1, 4), y2 = rand(1, 4);
    const answer = `${a * b}x^${x1 + x2}y^${y1 + y2}`;
    return practiceResult(`Simplify \\((${a}x^${x1}y^${y1})(${b}x^${x2}y^${y2})\\).`, `\\(${answer}\\)`, [answer], [
      "Multiply the coefficients.",
      "Add exponents for matching bases."
    ]);
  },
  quotientRule() {
    const den = rand(2, 5), coef = den * rand(2, 5), x2 = rand(1, 3), y2 = rand(1, 3), x1 = x2 + rand(2, 4), y1 = y2 + rand(2, 4);
    const answer = `${coef / den}x^${x1 - x2}y^${y1 - y2}`;
    return practiceResult(`Simplify \\(\\frac{${coef}x^${x1}y^${y1}}{${den}x^${x2}y^${y2}}\\).`, `\\(${answer}\\)`, [answer], [
      "Divide the coefficients.",
      "Subtract exponents for matching bases."
    ]);
  },
  negativeNoParens() {
    const base = rand(2, 5), exp = rand(2, 4);
    const value = -(base ** exp);
    return practiceResult(`Evaluate \\(-${base}^${exp}\\).`, `\\(${value}\\)`, [String(value)], [
      "The exponent applies to the positive base only.",
      `Then keep the negative sign: \\(-${base}^${exp}=${value}\\).`
    ]);
  },
  negativeWithParens() {
    const base = rand(2, 5), exp = [3, 5][rand(0, 1)];
    const value = -1 * (base ** exp);
    return practiceResult(`Evaluate \\((-${base})^${exp}\\).`, `\\(${value}\\)`, [String(value)], [
      "The whole negative number is the base.",
      "An odd power keeps the result negative."
    ]);
  },
  simpleRadical() {
    const square = [4, 9, 16, 25, 36][rand(0, 4)];
    const rad = [2, 3, 5, 6, 7][rand(0, 4)];
    const coef = Math.sqrt(square);
    const answer = `${coef}sqrt${rad}`;
    return practiceResult(`Simplify \\(\\sqrt{${square * rad}}\\).`, `\\(${coef}\\sqrt{${rad}}\\)`, [answer, `${coef}sqrt(${rad})`], [
      `Factor \\(${square * rad}\\) as \\(${square}\\cdot${rad}\\).`,
      `Take out \\(\\sqrt{${square}}=${coef}\\).`
    ]);
  },
  radicalVariables() {
    return practiceResult("Simplify \\(\\sqrt{48x^4y^3}\\).", "\\(4x^2y\\sqrt{3y}\\)", ["4x^2ysqrt3y", "4x^2y sqrt3y"], [
      "Factor perfect squares: \\(48x^4y^3=16x^4y^2(3y)\\).",
      "Take out \\(4x^2y\\)."
    ]);
  },
  radicalQuotient() {
    return practiceResult("Simplify \\(\\frac{\\sqrt{45}}{\\sqrt5}\\).", "\\(3\\)", ["3"], [
      "Combine under one radical: \\(\\sqrt{45/5}=\\sqrt9\\).",
      "Simplify to 3."
    ]);
  },
  addRadicals() {
    const rad = [2, 3, 5, 7][rand(0, 3)], a = rand(2, 7), b = rand(2, 7);
    return practiceResult(`Simplify \\(${a}\\sqrt{${rad}}+${b}\\sqrt{${rad}}\\).`, `\\(${a + b}\\sqrt{${rad}}\\)`, [`${a + b}sqrt${rad}`], [
      "The radicals are like terms because the radicands match.",
      "Add the coefficients."
    ]);
  },
  subtractRadicals() {
    const rad = [2, 3, 5, 7][rand(0, 3)], a = rand(8, 14), b = rand(2, 7);
    return practiceResult(`Simplify \\(${a}\\sqrt{${rad}}-${b}\\sqrt{${rad}}\\).`, `\\(${a - b}\\sqrt{${rad}}\\)`, [`${a - b}sqrt${rad}`], [
      "The radicals are like terms.",
      "Subtract the coefficients."
    ]);
  },
  multiplyRadicals() {
    return practiceResult("Simplify \\(2\\sqrt6\\cdot\\sqrt{10}\\).", "\\(4\\sqrt{15}\\)", ["4sqrt15"], [
      "Multiply inside the radical: \\(2\\sqrt{60}\\).",
      "Simplify \\(\\sqrt{60}=2\\sqrt{15}\\)."
    ]);
  },
  dividingRadicals() {
    return practiceResult("Simplify \\(\\frac{\\sqrt{200}}{\\sqrt8}\\).", "\\(5\\)", ["5"], [
      "Combine under one radical: \\(\\sqrt{200/8}=\\sqrt{25}\\).",
      "Simplify to 5."
    ]);
  },
  positiveExponentQuotient() {
    return practiceResult("Simplify \\(\\frac{(2x^3y^4)^2}{4x^2y^5}\\).", "\\(x^4y^3\\)", ["x^4y^3"], [
      "Square the numerator: \\(4x^6y^8\\).",
      "Subtract exponents when dividing."
    ]);
  },
  positiveExponentFraction() {
    return practiceResult("Simplify \\(\\frac{(4a^4b)^2}{(2ab^3)^2}\\).", "\\(\\frac{4a^6}{b^4}\\)", ["4a^6/b^4", "frac4a^6b^4"], [
      "Square the numerator and denominator.",
      "Move the negative exponent factor to the denominator."
    ]);
  },
  rationalize() {
    return practiceResult("Simplify and rationalize \\(\\frac{\\sqrt2}{\\sqrt5}\\).", "\\(\\frac{\\sqrt{10}}{5}\\)", ["sqrt10/5"], [
      "Multiply numerator and denominator by \\(\\sqrt5\\).",
      "The denominator becomes 5."
    ]);
  }
};

function renderPractice(type) {
  const item = (practice[type] || practice.powerRule)();
  $("practiceBox").classList.remove("hidden");
  $("practiceBox").innerHTML = `
    <h3>Similar Practice</h3>
    <p class="practice-prompt">${item.prompt}</p>
    <div class="answer-line"><input id="practiceInput" placeholder="Type your answer"><button class="primary" id="checkPractice">Check</button></div>
    <p class="practice-feedback" id="practiceFeedback"></p>
    <div class="action-row"><button class="soft" id="showPracticeAnswer">Show Answer</button><button class="ghost" id="newPractice">New Similar Problem</button></div>
    <div class="steps-box hidden" id="practiceSteps"><p class="answer-text">Answer: ${item.answer}</p><ol class="step-list">${item.steps.map(step => `<li>${step}</li>`).join("")}</ol></div>
  `;
  $("checkPractice").addEventListener("click", () => {
    const response = normalize($("practiceInput").value);
    const ok = item.accepted.map(normalize).includes(response);
    $("practiceFeedback").textContent = ok ? "Correct. Your answer matches this practice problem." : "Not yet. Check exponents, radicals, signs, and formatting, then try again.";
    $("practiceFeedback").className = `practice-feedback ${ok ? "ok" : "no"}`;
  });
  $("showPracticeAnswer").addEventListener("click", () => $("practiceSteps").classList.remove("hidden"));
  $("newPractice").addEventListener("click", () => renderPractice(type));
  typeset($("practiceBox"));
}

document.addEventListener("click", (event) => {
  const problemButton = event.target.closest("[data-problem]");
  if (problemButton) return renderDetail(problemButton.dataset.problem);
  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) { state.topic = topicButton.dataset.topic; renderFilters(); renderDashboard(); return; }
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) { state.view = viewButton.dataset.view; document.querySelectorAll("[data-view]").forEach(btn => btn.classList.toggle("active", btn === viewButton)); renderDashboard(); return; }
  if (event.target.id === "showAnswer") { $("answerText").classList.remove("hidden"); $("showAnswer").classList.add("hidden"); $("showSteps").classList.remove("hidden"); typeset($("detailPanel")); }
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
