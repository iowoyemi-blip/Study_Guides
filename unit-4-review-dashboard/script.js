const APP = {
  "title": "Unit 4 Review Dashboard",
  "course": "Algebra I - Linear Functions"
};

const TOPICS = {
  "linearForms": "Linear Forms",
  "specialLines": "Horizontal and Vertical Lines",
  "parallelPerpendicular": "Parallel and Perpendicular Lines",
  "linearInequalities": "Linear Inequalities",
  "graphFeatures": "Graph Features"
};

const PROBLEMS = [
  {
    "id": "1A",
    "title": "Slope Through Two Points",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Given the points (6, 4) and (7, 2), what is the slope?",
    "answer": "A. -2",
    "steps": [
      "m = (2 - 4)/(7 - 6).",
      "m = -2/1 = -2."
    ],
    "page": 1,
    "practiceId": "1B"
  },
  {
    "id": "1B",
    "title": "Slope Through Two Points",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Given the points (-3, 5) and (1, -3), what is the slope?",
    "answer": "B. -2",
    "steps": [
      "m = (-3 - 5)/(1 - (-3)).",
      "m = -8/4 = -2."
    ],
    "page": 1,
    "practiceId": "1A"
  },
  {
    "id": "2A",
    "title": "Slope from Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What is the slope of the line 3x - 4y = 16?",
    "answer": "B. 3/4",
    "steps": [
      "Solve for y: -4y = -3x + 16.",
      "y = 3/4x - 4, so the slope is 3/4."
    ],
    "page": 2,
    "practiceId": "2B"
  },
  {
    "id": "2B",
    "title": "Slope from Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What is the slope of the line 5x + 2y = 12?",
    "answer": "A. -5/2",
    "steps": [
      "Solve for y: 2y = -5x + 12.",
      "y = -5/2x + 6, so the slope is -5/2."
    ],
    "page": 2,
    "practiceId": "2A"
  },
  {
    "id": "3A",
    "title": "Slope-Intercept Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Which expresses 4x + 2y = 8 in slope-intercept form?",
    "answer": "D. y = -2x + 4",
    "steps": [
      "Subtract 4x: 2y = -4x + 8.",
      "Divide by 2: y = -2x + 4."
    ],
    "page": 3,
    "practiceId": "3B"
  },
  {
    "id": "3B",
    "title": "Slope-Intercept Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Which expresses 6x - 3y = 9 in slope-intercept form?",
    "answer": "A. y = 2x - 3",
    "steps": [
      "Subtract 6x: -3y = -6x + 9.",
      "Divide by -3: y = 2x - 3."
    ],
    "page": 3,
    "practiceId": "3A"
  },
  {
    "id": "4A",
    "title": "Equivalent Forms",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Which equation is equivalent to y - 4 = -1/2(x - 8)?",
    "answer": "A. y = -1/2x + 8",
    "steps": [
      "Distribute: y - 4 = -1/2x + 4.",
      "Add 4 to get y = -1/2x + 8."
    ],
    "page": 4,
    "practiceId": "4B"
  },
  {
    "id": "4B",
    "title": "Equivalent Forms",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Which equation is equivalent to y + 3 = 2(x - 1)?",
    "answer": "B. y = 2x - 5",
    "steps": [
      "Distribute: y + 3 = 2x - 2.",
      "Subtract 3 to get y = 2x - 5."
    ],
    "page": 4,
    "practiceId": "4A"
  },
  {
    "id": "5A",
    "title": "Point-Slope Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Using point-slope form, which equation has slope -2 and passes through (6, -4)?",
    "answer": "B. y + 4 = -2(x - 6)",
    "steps": [
      "Use y - y1 = m(x - x1).",
      "With y1 = -4, y - (-4) becomes y + 4."
    ],
    "page": 5,
    "practiceId": "5B"
  },
  {
    "id": "5B",
    "title": "Point-Slope Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Using point-slope form, which equation has slope 3 and passes through (-2, 5)?",
    "answer": "A. y - 5 = 3(x + 2)",
    "steps": [
      "Use y - y1 = m(x - x1).",
      "x - (-2) becomes x + 2."
    ],
    "page": 5,
    "practiceId": "5A"
  },
  {
    "id": "6A",
    "title": "Equation Through Two Points",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What is the slope-intercept equation through (10, 4) and (0, 2)?",
    "answer": "C. y = 1/5x + 2",
    "steps": [
      "m = (4 - 2)/(10 - 0) = 1/5.",
      "Since (0, 2) is given, b = 2."
    ],
    "page": 6,
    "practiceId": "6B"
  },
  {
    "id": "6B",
    "title": "Equation Through Two Points",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What is the slope-intercept equation through (-5, 7) and (0, -3)?",
    "answer": "A. y = -2x - 3",
    "steps": [
      "m = (-3 - 7)/(0 - (-5)) = -10/5 = -2.",
      "Since (0, -3) is given, b = -3."
    ],
    "page": 6,
    "practiceId": "6A"
  },
  {
    "id": "7A",
    "title": "Zero Slope",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What type of line has a zero slope?",
    "answer": "B. Horizontal line",
    "steps": [
      "A horizontal line has no rise.",
      "Its slope is 0."
    ],
    "page": 7,
    "practiceId": "7B"
  },
  {
    "id": "7B",
    "title": "Undefined Slope",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What type of line has an undefined slope?",
    "answer": "A. Vertical line",
    "steps": [
      "A vertical line has zero run.",
      "Division by zero makes the slope undefined."
    ],
    "page": 7,
    "practiceId": "7A"
  },
  {
    "id": "8A",
    "title": "Vertical and Horizontal Lines",
    "topic": "specialLines",
    "practiceType": "specialLines",
    "prompt": "The equation of a line is x = 0. Which describes this line?",
    "answer": "A. The line is vertical",
    "steps": [
      "Equations of the form x = constant are vertical lines.",
      "x = 0 is the y-axis."
    ],
    "page": 8,
    "practiceId": "8B"
  },
  {
    "id": "8B",
    "title": "Vertical and Horizontal Lines",
    "topic": "specialLines",
    "practiceType": "specialLines",
    "prompt": "The equation of a line is y = -4. Which describes this line?",
    "answer": "B. The line is horizontal",
    "steps": [
      "Equations of the form y = constant are horizontal lines.",
      "The y-value stays -4."
    ],
    "page": 8,
    "practiceId": "8A"
  },
  {
    "id": "9A",
    "title": "Standard to Slope-Intercept",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Convert 8x - 6y = 12 to slope-intercept form.",
    "answer": "D. y = 4/3x - 2",
    "steps": [
      "-6y = -8x + 12.",
      "Divide by -6: y = 4/3x - 2."
    ],
    "page": 9,
    "practiceId": "9B"
  },
  {
    "id": "9B",
    "title": "Standard to Slope-Intercept",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Convert 6x + 4y = 20 to slope-intercept form.",
    "answer": "A. y = -3/2x + 5",
    "steps": [
      "4y = -6x + 20.",
      "Divide by 4: y = -3/2x + 5."
    ],
    "page": 9,
    "practiceId": "9A"
  },
  {
    "id": "10A",
    "title": "Parallel or Perpendicular",
    "topic": "parallelPerpendicular",
    "practiceType": "parallelPerpendicular",
    "prompt": "The graphed lines have slopes 1 and -1. How are they related?",
    "answer": "B. Perpendicular",
    "steps": [
      "The slopes 1 and -1 are opposite reciprocals.",
      "The lines are perpendicular."
    ],
    "page": 10,
    "practiceId": "10B"
  },
  {
    "id": "10B",
    "title": "Parallel or Perpendicular",
    "topic": "parallelPerpendicular",
    "practiceType": "parallelPerpendicular",
    "prompt": "The graphed lines have slopes 1 and 0. How are they related?",
    "answer": "C. Neither",
    "steps": [
      "The slopes are not the same.",
      "They are not opposite reciprocals."
    ],
    "page": 10,
    "practiceId": "10A"
  },
  {
    "id": "11A",
    "title": "Intersection of Two Lines",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "The graphs of x = -3 and y = x - 3 intersect at what point?",
    "answer": "E. (-3, -6)",
    "steps": [
      "x must be -3.",
      "Substitute into y = x - 3: y = -6."
    ],
    "page": 11,
    "practiceId": "11B"
  },
  {
    "id": "11B",
    "title": "Intersection of Two Lines",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "The graphs of x = 2 and y = -2x + 5 intersect at what point?",
    "answer": "A. (2, 1)",
    "steps": [
      "x must be 2.",
      "Substitute into y = -2x + 5: y = 1."
    ],
    "page": 11,
    "practiceId": "11A"
  },
  {
    "id": "12A",
    "title": "Y-Intercept from Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What is the y-intercept of 7x + 2y = 14?",
    "answer": "C. (0, 7)",
    "steps": [
      "Set x = 0.",
      "2y = 14, so y = 7."
    ],
    "page": 12,
    "practiceId": "12B"
  },
  {
    "id": "12B",
    "title": "Y-Intercept from Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "What is the y-intercept of 5x - 4y = 20?",
    "answer": "B. (0, -5)",
    "steps": [
      "Set x = 0.",
      "-4y = 20, so y = -5."
    ],
    "page": 12,
    "practiceId": "12A"
  },
  {
    "id": "13A",
    "title": "Testing Linear Inequalities",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Which points satisfy y > x + 3? Select all that apply.",
    "answer": "C, D, E",
    "steps": [
      "Substitute each point into y > x + 3.",
      "(3, 7), (-4, 0), and (-1, 3) make the inequality true."
    ],
    "page": 13,
    "practiceId": "13B"
  },
  {
    "id": "13B",
    "title": "Testing Linear Inequalities",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Which points satisfy y <= -2x + 1? Select all that apply.",
    "answer": "A, C, D, E",
    "steps": [
      "Substitute each point into y <= -2x + 1.",
      "All listed points except (1, 0) work."
    ],
    "page": 13,
    "practiceId": "13A"
  },
  {
    "id": "14A",
    "title": "Inequality from a Graph",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Which inequality is represented by the graph?",
    "answer": "A. y > 1/2x - 1/2",
    "steps": [
      "The boundary is dashed, so the inequality is strict.",
      "The region is shaded above the line."
    ],
    "page": 14,
    "practiceId": "14B"
  },
  {
    "id": "14B",
    "title": "Inequality from a Graph",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Which inequality is represented by the graph?",
    "answer": "C. y <= -1/2x - 3/2",
    "steps": [
      "The boundary is solid, so equality is included.",
      "The region is shaded below the line."
    ],
    "page": 14,
    "practiceId": "14A"
  },
  {
    "id": "15-A",
    "title": "Equation from a Graph in Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Write the equation of the graphed line in fully simplified standard form.",
    "answer": "5x + 4y = 12",
    "steps": [
      "The line has y-intercept 3 and slope -5/4.",
      "y = -5/4x + 3.",
      "Multiply by 4 and rearrange: 5x + 4y = 12."
    ],
    "page": 15,
    "practiceId": "15-B"
  },
  {
    "id": "15-B",
    "title": "Equation from a Graph in Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Write the equation of the graphed line in fully simplified standard form.",
    "answer": "3x - 4y = 8",
    "steps": [
      "The line has y-intercept -2 and slope 3/4.",
      "y = 3/4x - 2.",
      "Multiply by 4 and rearrange: 3x - 4y = 8."
    ],
    "page": 15,
    "practiceId": "15-A"
  },
  {
    "id": "16-A",
    "title": "Graphing and Reading Function Notation",
    "topic": "graphFeatures",
    "practiceType": "graphFeatures",
    "prompt": "Graph f(x) = -3x + 1. Then find: slope, y-intercept, f(1), and x when f(x) = 4.",
    "answer": "slope -3; y-intercept (0, 1); f(1) = -2; x = -1",
    "steps": [
      "The slope is -3 and the y-intercept is (0, 1).",
      "f(1) = -3(1) + 1 = -2.",
      "Solve 4 = -3x + 1 to get x = -1."
    ],
    "page": 16,
    "practiceId": "16-B"
  },
  {
    "id": "16-B",
    "title": "Graphing and Reading Function Notation",
    "topic": "graphFeatures",
    "practiceType": "graphFeatures",
    "prompt": "Graph g(x) = 2x - 5. Then find: slope, y-intercept, g(3), and x when g(x) = 1.",
    "answer": "slope 2; y-intercept (0, -5); g(3) = 1; x = 3",
    "steps": [
      "The slope is 2 and the y-intercept is (0, -5).",
      "g(3) = 2(3) - 5 = 1.",
      "Solve 1 = 2x - 5 to get x = 3."
    ],
    "page": 16,
    "practiceId": "16-A"
  },
  {
    "id": "17-A",
    "title": "Graphing from Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Graph 2x + 3y = 6 using intercepts. Find the x-intercept, y-intercept, and equation in slope-intercept form.",
    "answer": "x-intercept (3, 0); y-intercept (0, 2); y = -2/3x + 2",
    "steps": [
      "Set y = 0 to get x = 3.",
      "Set x = 0 to get y = 2.",
      "Solve for y: y = -2/3x + 2."
    ],
    "page": 17,
    "practiceId": "17-B"
  },
  {
    "id": "17-B",
    "title": "Graphing from Standard Form",
    "topic": "linearForms",
    "practiceType": "linearForms",
    "prompt": "Graph 4x - 2y = 8 using intercepts. Find the x-intercept, y-intercept, and equation in slope-intercept form.",
    "answer": "x-intercept (2, 0); y-intercept (0, -4); y = 2x - 4",
    "steps": [
      "Set y = 0 to get x = 2.",
      "Set x = 0 to get y = -4.",
      "Solve for y: y = 2x - 4."
    ],
    "page": 17,
    "practiceId": "17-A"
  },
  {
    "id": "18-A",
    "title": "Vertical and Horizontal Lines",
    "topic": "specialLines",
    "practiceType": "specialLines",
    "prompt": "For each graphed line, state the slope and equation. Blue line first; red line second.",
    "answer": "blue: undefined slope, x = 3; red: slope 0, y = -3",
    "steps": [
      "A vertical line has equation x = constant and undefined slope.",
      "A horizontal line has equation y = constant and slope 0."
    ],
    "page": 18,
    "practiceId": "18-B"
  },
  {
    "id": "18-B",
    "title": "Vertical and Horizontal Lines",
    "topic": "specialLines",
    "practiceType": "specialLines",
    "prompt": "For each graphed line, state the slope and equation. Blue line first; red line second.",
    "answer": "blue: undefined slope, x = -2; red: slope 0, y = 4",
    "steps": [
      "A vertical line has equation x = constant and undefined slope.",
      "A horizontal line has equation y = constant and slope 0."
    ],
    "page": 18,
    "practiceId": "18-A"
  },
  {
    "id": "19-A",
    "title": "Parallel Lines",
    "topic": "parallelPerpendicular",
    "practiceType": "parallelPerpendicular",
    "prompt": "Write the equation in slope-intercept form of the line through (-2, 3) and parallel to y = 3/2x - 8.",
    "answer": "y = 3/2x + 6",
    "steps": [
      "Parallel lines have the same slope: 3/2.",
      "Use (-2, 3): 3 = 3/2(-2) + b, so b = 6."
    ],
    "page": 19,
    "practiceId": "19-B"
  },
  {
    "id": "19-B",
    "title": "Parallel Lines",
    "topic": "parallelPerpendicular",
    "practiceType": "parallelPerpendicular",
    "prompt": "Write the equation in slope-intercept form of the line through (4, -1) and parallel to y = -1/2x + 7.",
    "answer": "y = -1/2x + 1",
    "steps": [
      "Parallel lines have the same slope: -1/2.",
      "Use (4, -1): -1 = -2 + b, so b = 1."
    ],
    "page": 19,
    "practiceId": "19-A"
  },
  {
    "id": "20-A",
    "title": "Perpendicular Lines",
    "topic": "parallelPerpendicular",
    "practiceType": "parallelPerpendicular",
    "prompt": "Write the equation in slope-intercept form of the line through (9, -2) and perpendicular to y = -3/4x + 5.",
    "answer": "y = 4/3x - 14",
    "steps": [
      "The perpendicular slope is 4/3.",
      "Use (9, -2): -2 = 4/3(9) + b, so b = -14."
    ],
    "page": 20,
    "practiceId": "20-B"
  },
  {
    "id": "20-B",
    "title": "Perpendicular Lines",
    "topic": "parallelPerpendicular",
    "practiceType": "parallelPerpendicular",
    "prompt": "Write the equation in slope-intercept form of the line through (-6, 5) and perpendicular to y = 2x - 1.",
    "answer": "y = -1/2x + 2",
    "steps": [
      "The perpendicular slope is -1/2.",
      "Use (-6, 5): 5 = 3 + b, so b = 2."
    ],
    "page": 20,
    "practiceId": "20-A"
  },
  {
    "id": "21-A",
    "title": "Matching Equations to Graphed Lines",
    "topic": "graphFeatures",
    "practiceType": "graphFeatures",
    "prompt": "Four lines are graphed. Write the line number beside each equation. y = 3/5x + 1 y = 2x - 3 y = -1/2x + 5/2 y = -2x - 3",
    "answer": "1, 2, 3, 4",
    "steps": [
      "Compare slope direction and steepness first.",
      "Then use the y-intercept to confirm each match."
    ],
    "page": 21,
    "practiceId": "21-B"
  },
  {
    "id": "21-B",
    "title": "Matching Equations to Graphed Lines",
    "topic": "graphFeatures",
    "practiceType": "graphFeatures",
    "prompt": "Four lines are graphed. Write the line number beside each equation. y = -1/2x + 1/2 y = x y = 0 y = 2x - 1",
    "answer": "1, 2, 3, 4",
    "steps": [
      "Compare slope direction and steepness first.",
      "Then use the y-intercept to confirm each match."
    ],
    "page": 21,
    "practiceId": "21-A"
  },
  {
    "id": "22-A",
    "title": "Graphing Linear Inequalities",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Graph y > -3/4x + 2. Use a test point to confirm the shading.",
    "answer": "Dashed boundary y = -3/4x + 2; shade above; (0, 0) is not a solution",
    "steps": [
      "Use a dashed boundary because the symbol is >.",
      "Test (0, 0): 0 > 2 is false, so shade the other side."
    ],
    "page": 22,
    "practiceId": "22-B"
  },
  {
    "id": "22-B",
    "title": "Graphing Linear Inequalities",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Graph y <= 2/3x - 1. Use a test point to confirm the shading.",
    "answer": "Solid boundary y = 2/3x - 1; shade below; (0, 0) is not a solution",
    "steps": [
      "Use a solid boundary because the symbol is <=.",
      "Test (0, 0): 0 <= -1 is false, so shade the other side."
    ],
    "page": 22,
    "practiceId": "22-A"
  },
  {
    "id": "23-A",
    "title": "Writing Inequalities from Graphs",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Write the inequality represented by the shaded graph.",
    "answer": "y < 1/2x + 1/2",
    "steps": [
      "The boundary is dashed, so use < or >.",
      "The graph is shaded below the line, so y < 1/2x + 1/2."
    ],
    "page": 23,
    "practiceId": "23-B"
  },
  {
    "id": "23-B",
    "title": "Writing Inequalities from Graphs",
    "topic": "linearInequalities",
    "practiceType": "linearInequalities",
    "prompt": "Write the inequality represented by the shaded graph.",
    "answer": "y >= -1/2x + 3/2",
    "steps": [
      "The boundary is solid, so use <= or >=.",
      "The graph is shaded above the line, so y >= -1/2x + 3/2.",
      "Embedded media:",
      "- word/media/image1.png",
      "- word/media/image2.png",
      "- word/media/image3.png",
      "- word/media/image4.png",
      "- word/media/image5.png",
      "- word/media/image6.png",
      "- word/media/image7.png",
      "- word/media/image8.png",
      "- word/media/image9.png",
      "- word/media/image10.png",
      "- word/media/image11.png",
      "- word/media/image12.png",
      "- word/media/image13.png"
    ],
    "page": 23,
    "practiceId": "23-A"
  }
].map((p, index) => ({ ...p, order: index + 1, review: false }));

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("unit4ReviewChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("unit4ReviewChecked", JSON.stringify(state.checked));
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
