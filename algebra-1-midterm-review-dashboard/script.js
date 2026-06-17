const APP = {
  title: "Algebra I Midterm Review Dashboard",
  course: "Algebra I - Midterm Exam Review"
};

const TOPICS = {
  unit1: "Unit 1: Exponents and Radicals",
  unit2: "Unit 2: Equations and Inequalities",
  unit3: "Unit 3: Functions and Relations",
  unit4: "Unit 4: Linear Functions"
};

const PROBLEMS = [
  { id: "1", topic: "unit1", prompt: "Use the power rule to simplify: a. (2x²y²)³  b. (-3xy)²", answer: "a. 8x⁶y⁶; b. 9x²y²", steps: ["Raise the coefficient to the outside power.", "Multiply each exponent by the outside power."], page: 2 },
  { id: "2", topic: "unit1", prompt: "Use the quotient rule to simplify each expression.", answer: "a. -2s⁴p⁶; b. -2x⁶y³", steps: ["Divide coefficients first.", "Subtract exponents for matching bases in the numerator and denominator."], page: 2 },
  { id: "3", topic: "unit1", prompt: "Simplify each expression with powers and quotients.", answer: "a. -8x¹⁵y²⁴; b. 64x⁶y⁹ / z²¹", steps: ["Simplify inside the grouping first when possible.", "Apply the outside exponent to every factor."], page: 2 },
  { id: "4", topic: "unit1", prompt: "Simplify each radical expression, parts a-j.", answer: "a. 3√2; b. -6√2; c. -20√2; d. 10x²y³√(3x); e. 10xy⁴√(5x); f. 8/5; g. 5√5; h. 13√2; i. √15; j. √14", steps: ["Factor out perfect squares before simplifying radicals.", "For like radicals, combine coefficients only when the radical parts match."], page: 2 },
  { id: "5", topic: "unit2", prompt: "Evaluate each expression according to the order of operations.", answer: "a. -3; b. 195", steps: ["Simplify exponents and grouping first.", "Multiply/divide from left to right, then add/subtract from left to right."], page: 3 },
  { id: "6", topic: "unit2", prompt: "Represent each statement as an algebraic expression, parts a-d.", answer: "a. 2(n + 11); b. 1/2(n - 6); c. 5(x + y) - 2; d. 4(x - y) + 2", steps: ["Identify the quantity being grouped before placing parentheses.", "Translate 'less than' and 'more than' in the correct order."], page: 3 },
  { id: "7", topic: "unit2", prompt: "Solve each equation, parts a-h.", answer: "a. x = 64; b. No solution; c. y = 18; d. All real numbers; e. x = 5/2; f. x = 12; g. x = 1/2; h. x = 10", steps: ["Distribute and combine like terms on each side.", "If the variable cancels, decide whether the remaining statement is true for all values or false."], page: 3 },
  { id: "8", topic: "unit2", prompt: "Solve the literal equation for the indicated variable, parts a-d.", answer: "a. x = (M - 8)/p; b. t = 5 - n; c. a = (t - w)/p; d. L = P/2 - W", steps: ["Undo addition or subtraction first.", "Divide by the coefficient attached to the requested variable."], page: 4 },
  { id: "9", topic: "unit2", prompt: "Solve each inequality and write interval notation, parts a-d.", answer: "a. x > 1; (1, ∞); b. x ≤ 5; (-∞, 5]; c. x ≥ 11; [11, ∞); d. x > -3; (-3, ∞)", steps: ["Solve like an equation until dividing by a negative.", "Flip the inequality sign when multiplying or dividing by a negative."], page: 4 },
  { id: "10", topic: "unit2", prompt: "Solve each compound inequality and graph the solution set.", answer: "a. x > 2 or x ≤ -4; b. -3 ≤ x < 3", steps: ["Solve each side separately for 'or' statements.", "For 'and' statements, keep only the overlapping interval."], page: 5 },
  { id: "11", topic: "unit2", prompt: "Quincy's age is 4 years less than half her aunt's age x. Quincy is 14. Write an equation.", answer: "14 = 1/2x - 4", steps: ["Half of the aunt's age is 1/2x.", "Four years less than that amount means subtract 4."], page: 5 },
  { id: "12", topic: "unit2", prompt: "A rectangle length is 8 cm less than 4 times the width. Perimeter is 240 cm. Find width and length.", answer: "Width: 25.6 cm; Length: 94.4 cm", steps: ["Let width be w and length be 4w - 8.", "Use 2w + 2(4w - 8) = 240 and solve."], page: 5 },
  { id: "13", topic: "unit2", prompt: "Sammy's weekly wages are $30 less than twice Noa's weekly wages x. Sammy makes $150. Write an equation.", answer: "150 = 2x - 30", steps: ["Twice Noa's wages is 2x.", "Thirty dollars less means subtract 30."], page: 5 },
  { id: "14", topic: "unit3", prompt: "Which table represents a function?", answer: "A", steps: ["A function gives each input exactly one output.", "Look for any repeated input paired with different outputs."], page: 6 },
  { id: "15", topic: "unit3", prompt: "Find the domain and range in interval notation from the graph.", answer: "Domain: [-1, 6]; Range: [-2, 6]", steps: ["Domain is the set of x-values covered by the graph.", "Range is the set of y-values covered by the graph."], page: 6 },
  { id: "16", topic: "unit3", prompt: "Use the rocket-height graph to find the domain and range of h.", answer: "Domain: [0, 4]; Range: [0, 64]", steps: ["Domain is the time interval shown by the graph.", "Range is the height interval from the lowest to highest value."], page: 6 },
  { id: "17", topic: "unit3", prompt: "Find the domain and range of the function f from the line segment graph.", answer: "Domain: (-1, 2]; Range: [-2, 4)", steps: ["Use parentheses for open endpoints and brackets for closed endpoints.", "Read x-values for domain and y-values for range."], page: 6 },
  { id: "18", topic: "unit3", prompt: "Use the table for f to evaluate f(-1), f(1)+f(2), and input values for f(x)=1 and f(x)=-3.", answer: "a. f(-1) = 5; b. f(1) + f(2) = -10; c. x = 0; d. x = 1", steps: ["Read outputs from the table for the requested inputs.", "For equations like f(x)=1, find the input whose output is 1."], page: 6 },
  { id: "19", topic: "unit3", prompt: "Use the graph of f to find f(4), f(0), and input values for f(x)=4 and f(x)=1.", answer: "a. f(4) = 1; b. f(0) = 3; c. x = -2; d. x = 4", steps: ["For f(a), go to x = a and read the y-value.", "For f(x)=b, go to y = b and read the matching x-value."], page: 7 },
  { id: "20", topic: "unit3", prompt: "If f(x) = -2x - 3, determine f(-2), f(0), and x-values for f(x)=5 and f(x)=-1.", answer: "a. f(-2) = 1; b. f(0) = -3; c. x = -4; d. x = -1", steps: ["Substitute the given x-value to evaluate the function.", "Set the expression equal to the output and solve when x is unknown."], page: 7 },
  { id: "21", topic: "unit3", prompt: "Use the accompanying graph to determine the rate of change of y with respect to x.", answer: "m = 5/7", steps: ["Choose two clear points on the graph.", "Compute slope as change in y divided by change in x."], page: 7 },
  { id: "22", topic: "unit3", prompt: "Find the equation of the linear function represented by the table.", answer: "y = -3x + 9", steps: ["Find the constant change in y for each increase of 1 in x.", "Use the y-value when x = 0 as the y-intercept."], page: 7 },
  { id: "23", topic: "unit3", prompt: "Find the slope through the points (6, 4) and (7, 2).", answer: "m = -2", steps: ["Use m = (y₂ - y₁)/(x₂ - x₁).", "Substitute the two points and simplify."], page: 7 },
  { id: "24", topic: "unit4", prompt: "Write the equation and slope of the line shown in the graph.", answer: "Equation: x = 4; Slope: Undefined", steps: ["A vertical line has equation x = constant.", "Vertical lines have undefined slope."], page: 8 },
  { id: "25", topic: "unit4", prompt: "Find the slope of the line 3x - 4y = 16.", answer: "m = 3/4", steps: ["Solve for y to put the equation in slope-intercept form.", "The coefficient of x is the slope."], page: 8 },
  { id: "26", topic: "unit4", prompt: "Find the slope of the line 7x + 5y = 15.", answer: "m = -7/5", steps: ["Solve for y.", "The slope is the coefficient of x after isolating y."], page: 8 },
  { id: "27", topic: "unit4", prompt: "Rewrite 4x + 2y = 8 in slope-intercept form.", answer: "y = -2x + 4", steps: ["Subtract 4x from both sides.", "Divide every term by 2."], page: 8 },
  { id: "28", topic: "unit4", prompt: "Rewrite y - 2 = -1/3(x - 9) in slope-intercept form.", answer: "y = -1/3x + 5", steps: ["Distribute -1/3 to x - 9.", "Add 2 to isolate y."], page: 8 },
  { id: "29", topic: "unit4", prompt: "The equation of a line is x = 0. Which line is this?", answer: "y-axis", steps: ["x = 0 means every point has x-coordinate 0.", "That is the vertical axis."], page: 8 },
  { id: "30", topic: "unit4", prompt: "The equation of a line is y = 0. Which line is this?", answer: "x-axis", steps: ["y = 0 means every point has y-coordinate 0.", "That is the horizontal axis."], page: 8 },
  { id: "31", topic: "unit4", prompt: "Find the equation through (4, -2) with slope -3.", answer: "y = -3x + 10", steps: ["Use y = mx + b with m = -3.", "Substitute (4, -2) to solve for b."], page: 9 },
  { id: "32", topic: "unit4", prompt: "Find the equation through (-3, 5) with slope -1/3.", answer: "y = -1/3x + 4", steps: ["Use y = mx + b with the given slope.", "Substitute the point to find b."], page: 9 },
  { id: "33", topic: "unit4", prompt: "Find the slope-intercept equation through (10, 4) and (0, 2).", answer: "y = 1/5x + 2", steps: ["Find slope using the two points.", "Since (0, 2) is given, the y-intercept is 2."], page: 9 },
  { id: "34", topic: "unit4", prompt: "Find the slope-intercept equation through (-4, 4) and (0, -1).", answer: "y = -5/4x - 1", steps: ["Find slope using the two points.", "Since (0, -1) is given, the y-intercept is -1."], page: 9 },
  { id: "35", topic: "unit4", prompt: "Write the equation of the line shown in standard form.", answer: "2x - 3y = 6", steps: ["Read the line's slope and intercept from the graph.", "Convert the equation to Ax + By = C form with integer coefficients."], page: 9 },
  { id: "36", topic: "unit4", prompt: "What equation represents line ℓ shown in the diagram?", answer: "y = 1/2x + 3", steps: ["Read the y-intercept from the graph.", "Use rise over run to find the slope."], page: 9 },
  { id: "37", topic: "unit4", prompt: "Find the x- and y-intercepts of 5x + 2y = 10.", answer: "x-intercept: 2; y-intercept: 5", steps: ["Set y = 0 to find the x-intercept.", "Set x = 0 to find the y-intercept."], page: 10 },
  { id: "38", topic: "unit4", prompt: "Find the x- and y-intercepts of x - 6y = 18.", answer: "x-intercept: 18; y-intercept: -3", steps: ["Set y = 0 to find the x-intercept.", "Set x = 0 to find the y-intercept."], page: 10 },
  { id: "39", topic: "unit4", prompt: "Use the water tank graph to identify the rate the water is flowing from the tank.", answer: "A. The water is flowing out of the tank at a rate of 200 gallons per hour.", steps: ["Rate of change is slope.", "The graph shows the amount decreasing by 200 gallons each hour."], page: 10 },
  { id: "40", topic: "unit4", prompt: "Interpret C(n) = 110n + 900 for commercial airing cost.", answer: "C. The commercial costs $900 to produce and $110 each time it is aired.", steps: ["The constant term is the starting or fixed cost.", "The coefficient of n is the cost per airing."], page: 11 },
  { id: "41", topic: "unit4", prompt: "Write the phone bill equation with a $24.95 monthly fee plus $0.07 per long-distance minute.", answer: "A. c = 24.95 + 0.07d", steps: ["Start with the fixed monthly fee.", "Add the per-minute rate multiplied by the number of minutes."], page: 11 },
  { id: "42", topic: "unit4", prompt: "Which relation is not a function?", answer: "C. The mapping diagram where a single input 2 has two outputs A and B.", steps: ["A relation is not a function if one input has more than one output.", "Look for a repeated input or one input with two arrows."], page: 11 }
].map((p, index) => ({ ...p, order: index + 1, review: false, practiceType: p.topic }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("midtermReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("midtermReviewChecked", JSON.stringify(state.checked));
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
    const haystack = `${p.id} ${TOPICS[p.topic]} ${p.prompt} ${p.answer}`.toLowerCase();
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
      <p class="answer-text">${escapeHTML(p.prompt)}</p>
    </div>
    <div class="answer-box">
      <h3>Final Answer</h3>
      <p class="answer-text hidden" id="answerText">${escapeHTML(p.answer)}</p>
      <button class="primary" id="showAnswer">Show Final Answer</button>
    </div>
    <div class="steps-box hidden" id="stepsBox">
      <h3>Solution Guidance</h3>
      <ol class="step-list">${p.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
    </div>
    <div class="action-row">
      <button class="soft hidden" id="showSteps">Reveal Guidance</button>
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
    .replace(/√/g, "sqrt");
}

function acceptedAnswers(answer) {
  const text = String(answer || "");
  const items = [text];
  const choice = text.match(/^([A-E])\\./i);
  if (choice) {
    items.push(choice[1]);
    items.push(text.replace(/^[A-E]\\.\\s*/i, ""));
  }
  return items.map(normalize);
}

function practiceCandidate(selected) {
  const sameTopic = PROBLEMS.filter(p => p.topic === selected.topic && p.id !== selected.id);
  const after = sameTopic.find(p => Number(p.id) > Number(selected.id));
  return after || sameTopic[0] || selected;
}

function renderPractice() {
  const selected = PROBLEMS.find(p => p.id === state.selected);
  const item = practiceCandidate(selected);
  $("practiceBox").classList.remove("hidden");
  $("practiceBox").innerHTML = `
    <h3>Similar Practice</h3>
    <p class="practice-prompt"><strong>Try problem ${escapeHTML(item.id)}.</strong> ${escapeHTML(item.prompt)}</p>
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
    state.selected = next.id;
    renderPractice();
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
  if (event.target.id === "startPractice" && state.selected) { renderPractice(); }
  if (event.target.id === "showPacket") $("packetBox").classList.toggle("hidden");
  if (event.target.id === "resetProgress") { state.checked = []; saveProgress(); renderDashboard(); }
});

$("searchBox").addEventListener("input", (event) => { state.query = event.target.value; renderDashboard(); });
$("appTitle").textContent = APP.title;
$("courseName").textContent = APP.course;
renderFilters();
renderDashboard();
