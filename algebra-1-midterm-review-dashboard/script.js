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

function practiceResult(prompt, answer, accepted, steps) {
  return { prompt, answer, accepted: accepted || [], steps };
}

const practiceBanks = {
  exponents: [
    () => practiceResult("Simplify (3x^2y)^3.", "27x^6y^3", ["27x^6y^3"], ["Raise the coefficient to the third power.", "Multiply each exponent by 3."]),
    () => practiceResult("Simplify (-2ab^3)^4.", "16a^4b^12", ["16a^4b^12"], ["Raise -2 to the fourth power.", "Multiply the variable exponents by 4."]),
    () => practiceResult("Simplify 18m^7n^4 / 6m^2n.", "3m^5n^3", ["3m^5n^3"], ["Divide the coefficients.", "Subtract exponents for matching bases."]),
    () => practiceResult("Simplify (2x^3y^2)^2 / (4xy).", "x^5y^3", ["x^5y^3"], ["Square the numerator first: 4x^6y^4.", "Divide by 4xy to get x^5y^3."])
  ],
  radicals: [
    () => practiceResult("Simplify sqrt(72).", "6sqrt(2)", ["6√2", "6sqrt2"], ["Factor 72 as 36 times 2.", "sqrt(36) = 6."]),
    () => practiceResult("Simplify -3sqrt(50).", "-15sqrt(2)", ["-15√2", "-15sqrt2"], ["sqrt(50) = sqrt(25 times 2) = 5sqrt(2).", "Multiply by -3."]),
    () => practiceResult("Simplify sqrt(48x^5).", "4x^2sqrt(3x)", ["4x^2√(3x)", "4x^2sqrt(3x)"], ["Factor 48 as 16 times 3.", "x^5 contains x^4 outside the radical, leaving x inside."]),
    () => practiceResult("Simplify 2sqrt(18) + 5sqrt(8).", "16sqrt(2)", ["16√2", "16sqrt2"], ["2sqrt(18) = 6sqrt(2).", "5sqrt(8) = 10sqrt(2).", "Combine like radicals."])
  ],
  orderOps: [
    () => practiceResult("Evaluate 4 + 3(2^3 - 5).", "13", ["13"], ["Evaluate the exponent first.", "2^3 - 5 = 3, so 4 + 3(3) = 13."]),
    () => practiceResult("Evaluate -2^3 + 5(6 - 2).", "12", ["12"], ["Apply the exponent before the negative sign: -2^3 = -8.", "5(4) = 20, and -8 + 20 = 12."]),
    () => practiceResult("Evaluate 18 / 3 + 4^2.", "22", ["22"], ["Divide and evaluate the exponent first.", "6 + 16 = 22."]),
    () => practiceResult("Evaluate 7 - 2(3 - 8)^2.", "-43", ["-43"], ["Compute inside parentheses: -5.", "Square to get 25, then 7 - 50 = -43."])
  ],
  equations: [
    () => practiceResult("Solve 3(x - 4) = 2x + 9.", "x = 21", ["21"], ["Distribute: 3x - 12 = 2x + 9.", "Subtract 2x and add 12."]),
    () => practiceResult("Solve 5x + 8 = 2x - 10.", "x = -6", ["-6"], ["Subtract 2x from both sides.", "3x + 8 = -10, so 3x = -18."]),
    () => practiceResult("Solve 4(2y - 1) = 8y - 4.", "all real numbers", ["all real numbers", "allrealnumbers"], ["Distribute to get 8y - 4 = 8y - 4.", "The statement is always true."]),
    () => practiceResult("Solve 6x - 5 = 6x + 7.", "no solution", ["nosolution", "no solution"], ["Subtract 6x from both sides.", "-5 = 7 is false, so there is no solution."])
  ],
  literalEquations: [
    () => practiceResult("Solve A = lw for l.", "l = A/w", ["A/w", "l=A/w"], ["Divide both sides by w."]),
    () => practiceResult("Solve P = 2L + 2W for L.", "L = P/2 - W", ["P/2-W", "L=P/2-W"], ["Subtract 2W.", "Divide by 2."]),
    () => practiceResult("Solve M = px + 12 for x.", "x = (M - 12)/p", ["(M-12)/p"], ["Subtract 12.", "Divide by p."]),
    () => practiceResult("Solve t = p(a + w) for a.", "a = t/p - w", ["t/p-w", "a=t/p-w"], ["Divide by p.", "Subtract w."])
  ],
  inequalities: [
    () => practiceResult("Solve -3x + 4 < 16 and write interval notation.", "x > -4; (-4, infinity)", ["x>-4", "(-4,infinity)"], ["Subtract 4: -3x < 12.", "Divide by -3 and flip the sign."]),
    () => practiceResult("Solve 2x - 7 >= 9 and write interval notation.", "x >= 8; [8, infinity)", ["x>=8", "[8,infinity)"], ["Add 7.", "Divide by 2."]),
    () => practiceResult("Solve x < -2 or x >= 5 and write interval notation.", "(-infinity, -2) or [5, infinity)", ["(-infinity,-2)or[5,infinity)"], ["This is an or statement, so keep both separate intervals.", "Use a parenthesis at -2 and a bracket at 5."]),
    () => practiceResult("Solve -1 <= 2x + 3 < 9.", "-2 <= x < 3", ["-2<=x<3", "[-2,3)"], ["Subtract 3 from all three parts.", "Divide all three parts by 2."])
  ],
  wordExpressions: [
    () => practiceResult("Translate: eight less than three times a number n.", "3n - 8", ["3n-8"], ["Three times n is 3n.", "Eight less than that means subtract 8."]),
    () => practiceResult("Translate: half the difference of x and 10.", "1/2(x - 10)", ["1/2(x-10)", "(x-10)/2"], ["Difference means subtraction.", "Half of the whole difference requires parentheses."]),
    () => practiceResult("A width is w and length is 5 less than twice the width. Write the length.", "2w - 5", ["2w-5"], ["Twice the width is 2w.", "Five less means subtract 5."]),
    () => practiceResult("A total is $40 less than three times x. Write an equation if the total is $230.", "230 = 3x - 40", ["230=3x-40"], ["Three times x is 3x.", "Forty less means subtract 40."])
  ],
  geometryWord: [
    () => practiceResult("A rectangle's length is 6 cm more than twice its width. The perimeter is 84 cm. Find width and length.", "width 12 cm; length 30 cm", ["12;30", "width12length30"], ["Let width be w and length be 2w + 6.", "2w + 2(2w + 6) = 84.", "6w + 12 = 84, so w = 12 and length = 30."]),
    () => practiceResult("A rectangle's length is 5 cm less than 3 times its width. The perimeter is 70 cm. Find width and length.", "width 10 cm; length 25 cm", ["10;25", "width10length25"], ["Let width be w and length be 3w - 5.", "2w + 2(3w - 5) = 70.", "8w - 10 = 70, so w = 10 and length = 25."]),
    () => practiceResult("A rectangle's length is 4 cm more than its width. The perimeter is 56 cm. Find width and length.", "width 12 cm; length 16 cm", ["12;16", "width12length16"], ["Let width be w and length be w + 4.", "2w + 2(w + 4) = 56.", "4w + 8 = 56, so w = 12 and length = 16."]),
    () => practiceResult("A rectangle's length is 10 cm less than 4 times its width. The perimeter is 100 cm. Find width and length.", "width 12 cm; length 38 cm", ["12;38", "width12length38"], ["Let width be w and length be 4w - 10.", "2w + 2(4w - 10) = 100.", "10w - 20 = 100, so w = 12 and length = 38."])
  ],
  functions: [
    () => practiceResult("Is {(1, 4), (2, 7), (1, 9), (3, 10)} a function?", "no, not a function", ["no", "not a function"], ["Input 1 has two different outputs.", "A function cannot assign one input to two outputs."]),
    () => practiceResult("Is {(0, 2), (1, 2), (2, 5), (3, 5)} a function?", "yes, it is a function", ["yes"], ["Each input appears once.", "Repeated outputs are allowed."]),
    () => practiceResult("Which relation is not a function: A has inputs 1,2,3 once; B maps input 4 to both 7 and 8?", "B", ["B"], ["One input with two outputs is not a function."]),
    () => practiceResult("A mapping has 2 -> A and 2 -> B. Is it a function?", "no", ["no"], ["Input 2 has two outputs.", "That fails the function rule."])
  ],
  domainRange: [
    () => practiceResult("A graph has domain from open x = -4 to closed x = 6. Write the domain.", "(-4, 6]", ["(-4,6]"], ["Open endpoint uses a parenthesis.", "Closed endpoint uses a bracket."]),
    () => practiceResult("A graph has range from closed y = -3 to open y = 5. Write the range.", "[-3, 5)", ["[-3,5)"], ["Closed at -3 gives a bracket.", "Open at 5 gives a parenthesis."]),
    () => practiceResult("A rocket graph runs from t = 0 to t = 5 and height 0 to 80. State domain and range.", "domain [0, 5]; range [0, 80]", ["[0,5];[0,80]"], ["Time gives the domain.", "Height values give the range."]),
    () => practiceResult("A line segment starts at open (-2, 1) and ends at closed (4, 7). State the domain.", "(-2, 4]", ["(-2,4]"], ["Use the x-values from the endpoints.", "Open at -2, closed at 4."])
  ],
  functionValues: [
    () => practiceResult("Use f(x) = 3x - 2. Find f(-1), f(4), and x when f(x) = 10.", "f(-1) = -5; f(4) = 10; x = 4", ["-5;10;4"], ["Substitute for direct values.", "Set 3x - 2 = 10 to solve for x."]),
    () => practiceResult("Use g(x) = -2x + 6. Find g(0), g(5), and x when g(x) = -4.", "g(0) = 6; g(5) = -4; x = 5", ["6;-4;5"], ["Substitute x = 0 and x = 5.", "Solve -2x + 6 = -4."]),
    () => practiceResult("A table has x: -2, 0, 3 and f(x): 5, 1, -8. Find f(0) and x when f(x) = -8.", "f(0) = 1; x = 3", ["1;3"], ["Read the output above x = 0.", "Find the input paired with output -8."]),
    () => practiceResult("From a graph, when x = 2 the y-value is 7. When y = 1, x = -3. State f(2) and the x-value for f(x)=1.", "f(2) = 7; x = -3", ["7;-3"], ["f(2) asks for the y-value at x = 2.", "f(x)=1 asks for the x-value when y = 1."])
  ],
  slope: [
    () => practiceResult("Find the slope through (-2, 5) and (4, -1).", "m = -1", ["-1"], ["m = (-1 - 5) / (4 - (-2)).", "m = -6 / 6 = -1."]),
    () => practiceResult("Find the slope through (1, -3) and (5, 5).", "m = 2", ["2"], ["m = (5 - (-3)) / (5 - 1).", "m = 8 / 4 = 2."]),
    () => practiceResult("Find the slope of 2x - 5y = 10.", "m = 2/5", ["2/5"], ["Solve for y: -5y = -2x + 10.", "y = 2/5x - 2."]),
    () => practiceResult("Find the slope of 6x + 3y = 12.", "m = -2", ["-2"], ["Solve for y: 3y = -6x + 12.", "y = -2x + 4."])
  ],
  linearEquations: [
    () => practiceResult("Write the equation through (2, -1) with slope 4.", "y = 4x - 9", ["4x-9"], ["Use y = mx + b.", "Substitute (2, -1): -1 = 4(2) + b, so b = -9."]),
    () => practiceResult("Rewrite 3x - 2y = 10 in slope-intercept form.", "y = 3/2x - 5", ["3/2x-5"], ["-2y = -3x + 10.", "Divide by -2."]),
    () => practiceResult("Rewrite y + 3 = -2(x - 4) in slope-intercept form.", "y = -2x + 5", ["-2x+5"], ["Distribute -2.", "Subtract 3 from both sides."]),
    () => practiceResult("Find the equation through (0, 6) and (3, 0).", "y = -2x + 6", ["-2x+6"], ["The y-intercept is 6.", "Slope = (0 - 6)/(3 - 0) = -2."])
  ],
  specialLines: [
    () => practiceResult("State the equation and slope of the vertical line through x = -3.", "x = -3; undefined slope", ["x=-3;undefined"], ["Vertical lines have equation x = constant.", "Their slope is undefined."]),
    () => practiceResult("State the equation and slope of the horizontal line through y = 5.", "y = 5; slope 0", ["y=5;0"], ["Horizontal lines have equation y = constant.", "Their slope is 0."]),
    () => practiceResult("Which axis is x = 0?", "y-axis", ["y-axis", "yaxis"], ["x = 0 means every point has x-coordinate 0.", "That is the y-axis."]),
    () => practiceResult("Which axis is y = 0?", "x-axis", ["x-axis", "xaxis"], ["y = 0 means every point has y-coordinate 0.", "That is the x-axis."])
  ],
  intercepts: [
    () => practiceResult("Find the x- and y-intercepts of 2x + y = 8.", "x-intercept 4; y-intercept 8", ["4;8"], ["Set y = 0 to get x = 4.", "Set x = 0 to get y = 8."]),
    () => practiceResult("Find the x- and y-intercepts of 3x - 2y = 12.", "x-intercept 4; y-intercept -6", ["4;-6"], ["Set y = 0 to get x = 4.", "Set x = 0 to get y = -6."]),
    () => practiceResult("Find the x- and y-intercepts of x + 4y = 20.", "x-intercept 20; y-intercept 5", ["20;5"], ["Set y = 0 for the x-intercept.", "Set x = 0 for the y-intercept."]),
    () => practiceResult("Find the x- and y-intercepts of 5x + 10y = 30.", "x-intercept 6; y-intercept 3", ["6;3"], ["Set y = 0: 5x = 30.", "Set x = 0: 10y = 30."])
  ],
  linearContexts: [
    () => practiceResult("A tank starts with 900 gallons and loses 150 gallons per hour. State the rate and write a model.", "rate -150 gallons/hour; V(t) = -150t + 900", ["-150;V(t)=-150t+900"], ["Losing water means the rate is negative.", "The starting amount is the y-intercept."]),
    () => practiceResult("A commercial costs $700 to produce plus $85 per airing. Write the cost model.", "C(n) = 85n + 700", ["85n+700", "C(n)=85n+700"], ["The fixed cost is 700.", "Each airing adds 85."]),
    () => practiceResult("A phone plan costs $32.50 plus $0.05 per minute. Write the bill model.", "c = 32.50 + 0.05d", ["32.50+0.05d", "c=32.50+0.05d"], ["Start with the monthly fee.", "Add the rate per minute times d."]),
    () => practiceResult("Interpret C(n) = 45n + 120.", "$120 fixed cost and $45 per item", ["120 fixed;45 per"], ["The constant is the starting or fixed cost.", "The coefficient of n is the rate per item."])
  ]
};

let practiceCounters = {};

function practiceTypeForProblem(problem) {
  const id = Number(problem?.id);
  if ([1, 2, 3].includes(id)) return "exponents";
  if (id === 4) return "radicals";
  if (id === 5) return "orderOps";
  if ([6, 11, 13].includes(id)) return "wordExpressions";
  if (id === 12) return "geometryWord";
  if (id === 7) return "equations";
  if (id === 8) return "literalEquations";
  if ([9, 10].includes(id)) return "inequalities";
  if ([14, 42].includes(id)) return "functions";
  if ([15, 16, 17].includes(id)) return "domainRange";
  if ([18, 19, 20].includes(id)) return "functionValues";
  if ([21, 23, 25, 26].includes(id)) return "slope";
  if ([22, 27, 28, 31, 32, 33, 34, 35, 36].includes(id)) return "linearEquations";
  if ([24, 29, 30].includes(id)) return "specialLines";
  if ([37, 38].includes(id)) return "intercepts";
  if ([39, 40, 41].includes(id)) return "linearContexts";
  return "linearEquations";
}

function nextPractice(type, reset = false) {
  const bank = practiceBanks[type] || practiceBanks.linearEquations;
  const key = `${state.selected || "none"}:${type}`;
  if (reset) practiceCounters[key] = 0;
  const index = practiceCounters[key] || 0;
  practiceCounters[key] = index + 1;
  return bank[index % bank.length]();
}

function renderPractice(type, reset = false) {
  const item = nextPractice(type, reset);
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
