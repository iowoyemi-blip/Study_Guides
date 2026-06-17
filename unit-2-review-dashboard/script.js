const APP = {
  title: "Unit 2 Review Dashboard",
  course: "Algebra I - Expressions, Equations, and Inequalities"
};

const TOPICS = {
  orderOps: "Order of Operations",
  expressions: "Writing Expressions",
  evaluating: "Evaluating Expressions",
  solvingEquations: "Solving Equations",
  literalEquations: "Literal Equations",
  inequalities: "Inequalities",
  compoundInequalities: "Compound Inequalities",
  contextEquations: "Context Equations"
};

const PROBLEMS = [
  { id: "1A", topic: "orderOps", practiceType: "orderBasic", answer: "\\(\\text{C. }8\\)", steps: ["Multiply and divide left to right: \\(8\\div4=2\\) and \\(3\\cdot2=6\\).", "Then add/subtract left to right: \\(2-6+12=8\\)."], page: 1 },
  { id: "1B", topic: "orderOps", practiceType: "orderBasic", answer: "\\(\\text{B. }15\\)", steps: ["Divide and multiply left to right: \\(6\\div3\\cdot4=2\\cdot4=8\\).", "Then simplify: \\(18-8+5=15\\)."], page: 1 },
  { id: "2A", topic: "expressions", practiceType: "translatePhrase", answer: "\\(\\text{D. }2n-5\\)", steps: ["Twice a number is \\(2n\\).", "Five less than that amount means subtract 5: \\(2n-5\\)."], page: 1 },
  { id: "2B", topic: "expressions", practiceType: "translatePhrase", answer: "\\(\\text{A. }3n+7\\)", steps: ["Three times a number is \\(3n\\).", "Seven more means add 7: \\(3n+7\\)."], page: 1 },
  { id: "3A", topic: "evaluating", practiceType: "evaluateRational", answer: "\\(\\text{A. }-1\\)", steps: ["Substitute: \\(\\frac{(-3)^2-2(4)}{-1}\\).", "Simplify the numerator: \\(9-8=1\\).", "Divide: \\(1\\div(-1)=-1\\)."], page: 2 },
  { id: "3B", topic: "evaluating", practiceType: "evaluateRational", answer: "\\(\\text{C. }-19\\)", steps: ["Substitute: \\(\\frac{(-2)^2+3(5)}{-1}\\).", "Simplify the numerator: \\(4+15=19\\).", "Divide: \\(19\\div(-1)=-19\\)."], page: 2 },
  { id: "4A", topic: "solvingEquations", practiceType: "distributeEquation", answer: "\\(\\text{B. }x=-1\\)", steps: ["Distribute: \\(8x-4=-3x-15\\).", "Add \\(3x\\) and add 4: \\(11x=-11\\).", "Divide by 11: \\(x=-1\\)."], page: 2 },
  { id: "4B", topic: "solvingEquations", practiceType: "distributeEquation", answer: "\\(\\text{A. }x=-\\frac{13}{8}\\)", steps: ["Distribute: \\(6x+15=-2x+2\\).", "Add \\(2x\\) and subtract 15: \\(8x=-13\\).", "Divide by 8: \\(x=-\\frac{13}{8}\\)."], page: 2 },
  { id: "5A", topic: "solvingEquations", practiceType: "numberSolutions", answer: "\\(\\text{A. One solution}\\)", steps: ["Simplify both sides: \\(3x+8=6x+6\\).", "A variable remains after simplifying, so the equation has one solution."], page: 3 },
  { id: "5B", topic: "solvingEquations", practiceType: "numberSolutions", answer: "\\(\\text{C. Infinitely many solutions}\\)", steps: ["Simplify the left side: \\(2x-6+4=2x-2\\).", "Both sides are identical, so every value of \\(x\\) works."], page: 3 },
  { id: "6A", topic: "solvingEquations", practiceType: "fractionEquation", answer: "\\(\\text{A. }x=\\frac{5}{4}\\)", steps: ["Add \\(\\frac13\\) to both sides: \\(\\frac23x=\\frac12+\\frac13=\\frac56\\).", "Multiply by \\(\\frac32\\): \\(x=\\frac56\\cdot\\frac32=\\frac54\\)."], page: 3 },
  { id: "6B", topic: "solvingEquations", practiceType: "fractionEquation", answer: "\\(\\text{B. }x=2\\)", steps: ["Subtract \\(\\frac12\\): \\(\\frac34x=\\frac32\\).", "Multiply by \\(\\frac43\\): \\(x=\\frac32\\cdot\\frac43=2\\)."], page: 3 },
  { id: "7A", topic: "literalEquations", practiceType: "literalOneStep", answer: "\\(\\text{C. }M=\\frac{C}{4}-T\\)", steps: ["Subtract \\(4T\\): \\(4M=C-4T\\).", "Divide by 4: \\(M=\\frac{C-4T}{4}=\\frac C4-T\\)."], page: 4 },
  { id: "7B", topic: "literalEquations", practiceType: "literalForY", answer: "\\(\\text{B. }y=\\frac{x}{2}-2\\)", steps: ["Subtract \\(3x\\): \\(-6y=12-3x\\).", "Divide by \\(-6\\): \\(y=-2+\\frac{x}{2}=\\frac{x}{2}-2\\)."], page: 4 },
  { id: "8A", topic: "inequalities", practiceType: "testInequalityValues", answer: "\\(\\text{B, D, E}\\)", steps: ["Solve first: \\(-5x<50\\), so \\(x>-10\\) after dividing by \\(-5\\) and flipping the sign.", "The listed values greater than \\(-10\\) are 10, \\(-5\\), and 50."], page: 4 },
  { id: "8B", topic: "inequalities", practiceType: "testInequalityValues", answer: "\\(\\text{C, D, E}\\)", steps: ["Solve first: \\(4x-3\\ge9\\) gives \\(4x\\ge12\\), so \\(x\\ge3\\).", "The listed values at least 3 are 3, 4, and 6."], page: 5 },
  { id: "9A", topic: "inequalities", practiceType: "solveInequalityChoice", answer: "\\(\\text{D. }x\\ge-2\\)", steps: ["Subtract \\(4x\\): \\(-2x-5\\le-1\\).", "Add 5: \\(-2x\\le4\\).", "Divide by \\(-2\\) and flip the inequality: \\(x\\ge-2\\)."], page: 5 },
  { id: "9B", topic: "inequalities", practiceType: "solveInequalityChoice", answer: "\\(\\text{B. }x>-2\\)", steps: ["Subtract 4: \\(-3x<6\\).", "Divide by \\(-3\\) and flip the inequality: \\(x>-2\\)."], page: 5 },
  { id: "10-A", topic: "inequalities", practiceType: "representInequalities", answer: "a. \\((4,\\infty)\\); b. \\((-\\infty,5]\\); c. \\(x<0\\) or \\(x\\ge2\\)", steps: ["Use parentheses for open endpoints and brackets for included endpoints.", "A union symbol means the graph has two separate solution pieces."], page: 6 },
  { id: "10-B", topic: "inequalities", practiceType: "representInequalities", answer: "a. \\([-3,\\infty)\\); b. \\((-\\infty,2)\\); c. \\(1<x\\le5\\)", steps: ["Use a bracket when the endpoint is included.", "The interval \\((1,5]\\) means \\(x\\) is greater than 1 and less than or equal to 5."], page: 6 },
  { id: "11-A", topic: "orderOps", practiceType: "orderAbsolute", answer: "\\(11\\)", steps: ["\\(|2-4|=2\\), \\(2^2=4\\), and \\(|1-4|=3\\).", "\\(2+3\\cdot4-3=2+12-3=11\\)."], page: 6 },
  { id: "11-B", topic: "orderOps", practiceType: "orderAbsolute", answer: "\\(19\\)", steps: ["\\(|5-9|=4\\), \\(3^2=9\\), and \\(|7-10|=3\\).", "\\(4+2\\cdot9-3=4+18-3=19\\)."], page: 6 },
  { id: "12a-A", topic: "expressions", practiceType: "writeGroupedExpression", answer: "\\(2(n+11)\\)", steps: ["The sum of a number and 11 is \\(n+11\\).", "Twice that sum is \\(2(n+11)\\)."], page: 7 },
  { id: "12a-B", topic: "expressions", practiceType: "writeGroupedExpression", answer: "\\(3(n-4)\\)", steps: ["The difference of a number and 4 is \\(n-4\\).", "Three times that difference is \\(3(n-4)\\)."], page: 7 },
  { id: "12b-A", topic: "expressions", practiceType: "writeLinearExpression", answer: "\\(6n-5\\)", steps: ["The product of a number and 6 is \\(6n\\).", "Five less than that product is \\(6n-5\\)."], page: 7 },
  { id: "12b-B", topic: "expressions", practiceType: "writeLinearExpression", answer: "\\(2n+9\\)", steps: ["The product of a number and 2 is \\(2n\\).", "Nine more than that product is \\(2n+9\\)."], page: 7 },
  { id: "13a-A", topic: "evaluating", practiceType: "evaluateQuadratic", answer: "\\(5\\)", steps: ["Substitute: \\((-2)^2-4(-2)-7\\).", "\\(4+8-7=5\\)."], page: 8 },
  { id: "13a-B", topic: "evaluating", practiceType: "evaluateQuadratic", answer: "\\(-6\\)", steps: ["Substitute: \\((-4)^2+3(-4)-10\\).", "\\(16-12-10=-6\\)."], page: 8 },
  { id: "13b-A", topic: "evaluating", practiceType: "evaluateLinear", answer: "\\(19\\)", steps: ["Substitute: \\(-2(-2)+5(3)\\).", "\\(4+15=19\\)."], page: 8 },
  { id: "13b-B", topic: "evaluating", practiceType: "evaluateLinear", answer: "\\(-19\\)", steps: ["Substitute: \\(4(-1)-3(5)\\).", "\\(-4-15=-19\\)."], page: 8 },
  { id: "14a-A", topic: "contextEquations", practiceType: "contextMoney", answer: "10 people", steps: ["Equation: \\(10.25+14.25x=152.75\\).", "Subtract 10.25: \\(14.25x=142.50\\).", "Divide by 14.25: \\(x=10\\)."], page: 9 },
  { id: "14a-B", topic: "contextEquations", practiceType: "contextMoney", answer: "8 games", steps: ["Equation: \\(7.50+5.25x=49.50\\).", "Subtract 7.50: \\(5.25x=42\\).", "Divide by 5.25: \\(x=8\\)."], page: 9 },
  { id: "14b-A", topic: "contextEquations", practiceType: "consecutiveIntegers", answer: "30, 31, 32", steps: ["Equation: \\(x+(x+1)+(x+2)=93\\).", "\\(3x+3=93\\), so \\(3x=90\\) and \\(x=30\\).", "The integers are 30, 31, and 32."], page: 9 },
  { id: "14b-B", topic: "contextEquations", practiceType: "consecutiveIntegers", answer: "41, 42, 43", steps: ["Equation: \\(x+(x+1)+(x+2)=126\\).", "\\(3x+3=126\\), so \\(3x=123\\) and \\(x=41\\).", "The integers are 41, 42, and 43."], page: 9 },
  { id: "15a-A", topic: "solvingEquations", practiceType: "identityContradiction", answer: "No solution", steps: ["Simplify: \\(10-3x=-3x+12\\).", "Add \\(3x\\) to both sides: \\(10=12\\).", "This is false, so there is no solution."], page: 10 },
  { id: "15a-B", topic: "solvingEquations", practiceType: "identityContradiction", answer: "Infinitely many solutions", steps: ["Simplify: \\(12-2x=-2x+12\\).", "Both sides are the same expression.", "This is true for all \\(x\\), so there are infinitely many solutions."], page: 10 },
  { id: "15b-A", topic: "solvingEquations", practiceType: "identityContradiction", answer: "Infinitely many solutions", steps: ["Simplify both sides: \\(6x-2=6x-2\\).", "The equation is true for all \\(x\\)."], page: 10 },
  { id: "15b-B", topic: "solvingEquations", practiceType: "identityContradiction", answer: "No solution", steps: ["Simplify: \\(2x+12=2x+7\\).", "Subtract \\(2x\\): \\(12=7\\).", "This is false, so there is no solution."], page: 10 },
  { id: "15c-A", topic: "solvingEquations", practiceType: "equationFractionDistribute", answer: "\\(x=-\\frac32\\)", steps: ["Distribute: \\(6x+5=4x+2\\).", "Subtract \\(4x\\) and 5: \\(2x=-3\\).", "Divide by 2: \\(x=-\\frac32\\)."], page: 11 },
  { id: "15c-B", topic: "solvingEquations", practiceType: "equationFractionDistribute", answer: "\\(x=7\\)", steps: ["Distribute: \\(3x-4=2x+3\\).", "Subtract \\(2x\\) and add 4: \\(x=7\\)."], page: 11 },
  { id: "16a-A", topic: "literalEquations", practiceType: "literalOneStep", answer: "\\(t=\\frac{p-w}{2}\\)", steps: ["Subtract \\(w\\): \\(2t=p-w\\).", "Divide by 2: \\(t=\\frac{p-w}{2}\\)."], page: 11 },
  { id: "16a-B", topic: "literalEquations", practiceType: "literalOneStep", answer: "\\(r=\\frac{m-s}{3}\\)", steps: ["Subtract \\(s\\): \\(3r=m-s\\).", "Divide by 3: \\(r=\\frac{m-s}{3}\\)."], page: 11 },
  { id: "16b-A", topic: "literalEquations", practiceType: "literalForY", answer: "\\(y=\\frac{x}{2}-2\\)", steps: ["Subtract \\(3x\\): \\(-6y=12-3x\\).", "Divide by \\(-6\\): \\(y=-2+\\frac{x}{2}\\), or \\(y=\\frac{x}{2}-2\\)."], page: 12 },
  { id: "16b-B", topic: "literalEquations", practiceType: "literalForY", answer: "\\(b=10-\\frac52a\\)", steps: ["Subtract \\(5a\\): \\(2b=20-5a\\).", "Divide by 2: \\(b=10-\\frac52a\\)."], page: 12 },
  { id: "17a-A", topic: "inequalities", practiceType: "solveSimpleInequality", answer: "\\(x\\le4\\); \\((-\\infty,4]\\)", steps: ["Add 4: \\(2x\\le8\\).", "Divide by 2: \\(x\\le4\\).", "Interval notation is \\((-\\infty,4]\\)."], page: 12 },
  { id: "17a-B", topic: "inequalities", practiceType: "solveSimpleInequality", answer: "\\(x>3\\); \\((3,\\infty)\\)", steps: ["Subtract 5: \\(3x>9\\).", "Divide by 3: \\(x>3\\).", "Interval notation is \\((3,\\infty)\\)."], page: 12 },
  { id: "17b-A", topic: "inequalities", practiceType: "solveBothSidesInequality", answer: "\\(x>-1\\); \\((-1,\\infty)\\)", steps: ["Subtract \\(8x\\): \\(-5x-6<-1\\).", "Add 6: \\(-5x<5\\).", "Divide by \\(-5\\) and flip: \\(x>-1\\)."], page: 13 },
  { id: "17b-B", topic: "inequalities", practiceType: "solveBothSidesInequality", answer: "\\(x\\ge-2\\); \\([-2,\\infty)\\)", steps: ["Subtract 7: \\(-4x\\le8\\).", "Divide by \\(-4\\) and flip: \\(x\\ge-2\\)."], page: 13 },
  { id: "17c-A", topic: "compoundInequalities", practiceType: "compoundAnd", answer: "\\(-6<x\\le4\\); \\((-6,4]\\)", steps: ["Add 4 to all three parts: \\(-12<2x\\le8\\).", "Divide all three parts by 2: \\(-6<x\\le4\\)."], page: 13 },
  { id: "17c-B", topic: "compoundInequalities", practiceType: "compoundAnd", answer: "\\(3\\le x<5\\); \\([3,5)\\)", steps: ["Add 7 to all three parts: \\(9\\le3x<15\\).", "Divide all three parts by 3: \\(3\\le x<5\\)."], page: 13 },
  { id: "17d-A", topic: "compoundInequalities", practiceType: "compoundOr", answer: "\\(x<2\\) or \\(x\\ge5\\); \\((-\\infty,2)\\cup[5,\\infty)\\)", steps: ["First inequality: \\(2x+2<6\\) gives \\(x<2\\).", "Second inequality: \\(x-6\\ge-1\\) gives \\(x\\ge5\\).", "Use union because the statement uses or."], page: 14 },
  { id: "17d-B", topic: "compoundInequalities", practiceType: "compoundOr", answer: "\\(x\\le-4\\) or \\(x\\ge2\\); \\((-\\infty,-4]\\cup[2,\\infty)\\)", steps: ["First inequality: \\(x+3\\le-1\\) gives \\(x\\le-4\\).", "Second inequality: \\(x+1\\ge3\\) gives \\(x\\ge2\\).", "Use union because the statement uses or."], page: 14 }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit2ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit2ReviewChecked", JSON.stringify(state.checked));
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
    .replace(/≤/g, "<=")
    .replace(/≥/g, ">=")
    .replace(/∞/g, "infinity")
    .replace(/\\infty/g, "infinity")
    .replace(/\\le/g, "<=")
    .replace(/\\ge/g, ">=")
    .replace(/\\cup/g, "u")
    .replace(/[{}]/g, "")
    .replace(/\\frac/g, "frac")
    .replace(/\\text/g, "");
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function practiceResult(prompt, answer, accepted, steps) {
  return { prompt, answer, accepted: [answer, ...accepted], steps };
}

const practice = {
  orderBasic() {
    const a = rand(10, 24), b = rand(2, 6), c = rand(2, 5), d = rand(2, 4), e = rand(3, 12);
    const value = a - (b * c) + (d * e);
    return practiceResult(`Evaluate \\(${a}-${b}\\cdot${c}+${d}\\cdot${e}\\).`, `\\(${value}\\)`, [String(value)], [
      "Multiply before adding or subtracting.",
      "Then move left to right for the remaining addition and subtraction."
    ]);
  },
  orderAbsolute() {
    return practiceResult("Evaluate \\(|3-8|+2\\cdot4^2-|6-10|\\).", "\\(33\\)", ["33"], [
      "\\(|3-8|=5\\), \\(4^2=16\\), and \\(|6-10|=4\\).",
      "\\(5+2\\cdot16-4=5+32-4=33\\)."
    ]);
  },
  translatePhrase() {
    return practiceResult("Write an expression for: four more than twice a number.", "\\(2n+4\\)", ["2n+4"], [
      "Twice a number is \\(2n\\).",
      "Four more means add 4."
    ]);
  },
  writeGroupedExpression() {
    return practiceResult("Write an expression for: five times the sum of a number and three.", "\\(5(n+3)\\)", ["5(n+3)", "5n+15"], [
      "The sum of a number and 3 is \\(n+3\\).",
      "Five times that sum is \\(5(n+3)\\)."
    ]);
  },
  writeLinearExpression() {
    return practiceResult("Write an expression for: eight less than the product of a number and three.", "\\(3n-8\\)", ["3n-8"], [
      "The product of a number and 3 is \\(3n\\).",
      "Eight less means subtract 8."
    ]);
  },
  evaluateRational() {
    return practiceResult("Evaluate \\(\\frac{x^2+2y}{z}\\) when \\(x=-4\\), \\(y=5\\), and \\(z=-2\\).", "\\(-13\\)", ["-13"], [
      "Substitute: \\(\\frac{(-4)^2+2(5)}{-2}\\).",
      "Simplify the numerator: \\(16+10=26\\).",
      "Divide: \\(26\\div(-2)=-13\\)."
    ]);
  },
  evaluateQuadratic() {
    return practiceResult("Evaluate \\(x^2-5x+2\\) for \\(x=-3\\).", "\\(26\\)", ["26"], [
      "Substitute: \\((-3)^2-5(-3)+2\\).",
      "\\(9+15+2=26\\)."
    ]);
  },
  evaluateLinear() {
    return practiceResult("Evaluate \\(-3a+4b\\) for \\(a=-2\\) and \\(b=5\\).", "\\(26\\)", ["26"], [
      "Substitute: \\(-3(-2)+4(5)\\).",
      "\\(6+20=26\\)."
    ]);
  },
  distributeEquation() {
    return practiceResult("Solve \\(5(2x-3)=-2(x+6)\\).", "\\(x=\\frac14\\)", ["x=1/4", "1/4"], [
      "Distribute: \\(10x-15=-2x-12\\).",
      "Add \\(2x\\) and add 15: \\(12x=3\\).",
      "Divide by 12: \\(x=\\frac14\\)."
    ]);
  },
  fractionEquation() {
    return practiceResult("Solve \\(\\frac25x+\\frac15=3\\).", "\\(x=7\\)", ["x=7", "7"], [
      "Subtract \\(\\frac15\\): \\(\\frac25x=\\frac{14}{5}\\).",
      "Multiply by \\(\\frac52\\): \\(x=7\\)."
    ]);
  },
  numberSolutions() {
    return practiceResult("How many solutions does \\(4(x+1)=4x+4\\) have?", "Infinitely many solutions", ["infinite", "infinitelymanysolutions", "allreals"], [
      "Distribute: \\(4x+4=4x+4\\).",
      "Both sides are identical, so every value works."
    ]);
  },
  identityContradiction() {
    return practiceResult("Solve \\(3(x+2)+5=3x+10\\).", "No solution", ["nosolution"], [
      "Simplify: \\(3x+11=3x+10\\).",
      "Subtract \\(3x\\): \\(11=10\\), which is false."
    ]);
  },
  equationFractionDistribute() {
    return practiceResult("Solve \\(4x+1=\\frac12(6x+8)\\).", "\\(x=3\\)", ["x=3", "3"], [
      "Distribute: \\(4x+1=3x+4\\).",
      "Subtract \\(3x\\) and subtract 1: \\(x=3\\)."
    ]);
  },
  literalOneStep() {
    return practiceResult("Solve \\(5r+s=m\\) for \\(r\\).", "\\(r=\\frac{m-s}{5}\\)", ["r=(m-s)/5", "(m-s)/5"], [
      "Subtract \\(s\\): \\(5r=m-s\\).",
      "Divide by 5."
    ]);
  },
  literalForY() {
    return practiceResult("Solve \\(4x-8y=16\\) for \\(y\\).", "\\(y=\\frac{x}{2}-2\\)", ["y=x/2-2", "x/2-2"], [
      "Subtract \\(4x\\): \\(-8y=16-4x\\).",
      "Divide by \\(-8\\): \\(y=-2+\\frac{x}{2}\\)."
    ]);
  },
  contextMoney() {
    return practiceResult("A rental fee is \\(\\$12\\), and each ticket costs \\(\\$9\\). The total is \\(\\$75\\). How many tickets?", "7 tickets", ["7", "7tickets"], [
      "Equation: \\(12+9x=75\\).",
      "Subtract 12: \\(9x=63\\).",
      "Divide by 9: \\(x=7\\)."
    ]);
  },
  consecutiveIntegers() {
    return practiceResult("The sum of three consecutive integers is 75. Find the integers.", "24, 25, 26", ["24,25,26", "242526"], [
      "Equation: \\(x+(x+1)+(x+2)=75\\).",
      "\\(3x+3=75\\), so \\(3x=72\\) and \\(x=24\\)."
    ]);
  },
  testInequalityValues() {
    return practiceResult("Which listed values make \\(-2x<8\\) true? Choices: A. -5, B. -4, C. 0, D. 6", "C, D", ["c,d", "cd", "c d"], [
      "Divide by \\(-2\\) and flip: \\(x>-4\\).",
      "The listed values greater than \\(-4\\) are 0 and 6."
    ]);
  },
  solveInequalityChoice() {
    return practiceResult("Solve \\(-4x+3<11\\).", "\\(x>-2\\)", ["x>-2"], [
      "Subtract 3: \\(-4x<8\\).",
      "Divide by \\(-4\\) and flip: \\(x>-2\\)."
    ]);
  },
  representInequalities() {
    return practiceResult("Write \\(x\\ge-1\\) in interval notation.", "\\([-1,\\infty)\\)", ["[-1,infinity)", "[-1,∞)"], [
      "Use a bracket at \\(-1\\) because \\(-1\\) is included.",
      "Use a parenthesis with infinity."
    ]);
  },
  solveSimpleInequality() {
    return practiceResult("Solve \\(5x-2\\ge18\\). Write inequality and interval notation.", "\\(x\\ge4\\); \\([4,\\infty)\\)", ["x>=4;[4,infinity)", "x>=4"], [
      "Add 2: \\(5x\\ge20\\).",
      "Divide by 5: \\(x\\ge4\\)."
    ]);
  },
  solveBothSidesInequality() {
    return practiceResult("Solve \\(2x+1<5x+10\\).", "\\(x>-3\\)", ["x>-3"], [
      "Subtract \\(5x\\): \\(-3x+1<10\\).",
      "Subtract 1: \\(-3x<9\\).",
      "Divide by \\(-3\\) and flip: \\(x>-3\\)."
    ]);
  },
  compoundAnd() {
    return practiceResult("Solve \\(-4<2x+2\\le10\\).", "\\(-3<x\\le4\\); \\((-3,4]\\)", ["-3<x<=4", "(-3,4]"], [
      "Subtract 2 from all three parts: \\(-6<2x\\le8\\).",
      "Divide by 2: \\(-3<x\\le4\\)."
    ]);
  },
  compoundOr() {
    return practiceResult("Solve \\(x-1<2\\) or \\(x+4\\ge10\\).", "\\(x<3\\) or \\(x\\ge6\\); \\((-\\infty,3)\\cup[6,\\infty)\\)", ["x<3orx>=6", "(-infinity,3)u[6,infinity)"], [
      "First inequality: \\(x<3\\).",
      "Second inequality: \\(x\\ge6\\).",
      "Use union because the statement uses or."
    ]);
  }
};

function renderPractice(type) {
  const item = (practice[type] || practice.orderBasic)();
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
    $("practiceFeedback").textContent = ok ? "Correct. Your answer matches this practice problem." : "Not yet. Check signs, inequality direction, notation, and formatting, then try again.";
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
