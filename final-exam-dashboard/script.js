const TOPICS = {
  factoring: "Factoring",
  domainRange: "Domain and Range",
  radicals: "Radicals and Exponents",
  equations: "Equations and Inequalities",
  functions: "Functions",
  linear: "Linear Models",
  systems: "Systems",
  polynomials: "Polynomials",
  quadratics: "Quadratics",
  exponential: "Exponential Models"
};

const topicFor = (n) => {
  if (n <= 6) return "factoring";
  if (n <= 14) return "domainRange";
  if (n <= 19) return "radicals";
  if (n <= 44) return "equations";
  if (n <= 52) return "functions";
  if (n <= 75) return "linear";
  if (n <= 78) return "exponential";
  if (n <= 80) return "systems";
  if (n <= 105) return "polynomials";
  if (n <= 133) return "quadratics";
  if (n <= 145) return "functions";
  if (n <= 150) return "linear";
  if (n <= 157) return "systems";
  return "exponential";
};

const packetPage = (n) => Math.ceil(n / 6);

const KEY = {
  1:["\\(x-2\\)",["Factor: \\(x^2+6x-16=(x+8)(x-2)\\).","A factor is one binomial that multiplies to make the original expression."]],
  2:["\\(2x+1\\)",["Factor: \\(4x^2-4x-3=(2x+1)(2x-3)\\).","Only \\(2x+1\\) appears as a listed factor."]],
  3:["\\((5x+8)(x-1)\\); factors include \\(5x+8\\) and \\(x-1\\).",["Find numbers that multiply to \\(-40\\) and add to \\(3\\): \\(8\\) and \\(-5\\).","Group: \\(5x^2+8x-5x-8=(5x+8)(x-1)\\)."]],
  4:["\\((3x-4)(x-3)\\)",["Multiply \\(3\\cdot12=36\\).","The numbers \\(-9\\) and \\(-4\\) add to \\(-13\\).","Group to get \\((3x-4)(x-3)\\)."]],
  5:["\\((3x-4)(2x+3)\\)",["Multiply \\(6\\cdot(-12)=-72\\).","The numbers \\(9\\) and \\(-8\\) add to \\(1\\).","Group to get \\((3x-4)(2x+3)\\)."]],
  6:["\\((x-6)(x+4)\\)",["The factors of \\(-24\\) that add to \\(-2\\) are \\(-6\\) and \\(4\\).","So \\(x^2-2x-24=(x-6)(x+4)\\)."]],
  7:["Domain: \\([0,4]\\); Range: \\([0,64]\\)",["Read the x-values from the start to the end of the rocket graph.","Read the y-values from the lowest height to the maximum height."]],
  8:["Domain: all real numbers; Range: \\(y\\ge -4\\)",["The graph continues left and right without stopping, so the domain is all real numbers.","The lowest y-value is \\(-4\\), so the range is \\(y\\ge -4\\)."]],
  9:["Domain: \\((-1,2]\\); Range: \\([-2,4)\\)",["Use parentheses for open endpoints and brackets for closed endpoints.","Read the horizontal spread for domain and the vertical spread for range."]],
  10:["Domain: \\([-1,6]\\); Range: \\([-2,6]\\)",["Read the smallest and largest x-values used by the graph.","Read the smallest and largest y-values used by the graph."]],
  11:["Domain: \\([-3,\\infty)\\); Range: \\([-4,\\infty)\\)",["The graph begins at \\(x=-3\\) and continues right forever.","The graph begins at \\(y=-4\\) and continues upward forever."]],
  12:["Domain: \\((-\u221e,\u221e)\\); Range: \\((-\u221e,\u221e)\\)",["The graph continues forever in both horizontal directions.","It also continues forever in both vertical directions."]],
  13:["Domain: \\((-\u221e,5)\\); Range: \\((-\u221e,4)\\)",["The graph approaches but does not include the right endpoint values.","Use parentheses because the endpoint values are not included."]],
  14:["Domain: \\([-3,2)\\); Range: \\([-5,4]\\)",["Read all x-values covered by the graph.","Read all y-values covered by the graph, using the endpoint markings."]],
  15:["\\(5\\sqrt{6}\\)",["Break \\(150\\) into \\(25\\cdot6\\).","\\(\\sqrt{150}=\\sqrt{25}\\sqrt6=5\\sqrt6\\)."]],
  16:["C",["Use the verified multiple-choice answer key for this scanned radical item.","Check that your simplification matches choice C."]],
  17:["\\(3xy^2\\sqrt{3x}\\)",["Break \\(27x^3y^4\\) into \\(9x^2y^4\\cdot3x\\).","Take the perfect squares out of the radical."]],
  18:["\\(12\\)",["Use order of operations: \\(3\\cdot2^2=12\\).","Then \\(7+12-2-5=12\\)."]],
  19:["\\(-4\\)",["Evaluate the exponent first: \\(3^2=9\\).","Then \\(36\\div9\\cdot5-25+1=20-25+1=-4\\)."]],
  20:["\\(2z-3\\)",["Twice \\(z\\) is \\(2z\\).","Three less than that means subtract 3."]],
  21:["\\(3c+8\\)",["The product of 3 and \\(c\\) is \\(3c\\).","Eight more means add 8."]],
  22:["\\(5(a+b)-7\\)",["The sum of \\(a\\) and \\(b\\) is \\(a+b\\).","Five times the sum is \\(5(a+b)\\), and seven less means subtract 7."]],
  23:["\\(16\\)",["Use inverse operations to isolate \\(x\\).","The verified solution is \\(x=16\\)."]],
  24:["\\(x=-5\\)",["Distribute: \\(10x-35=15x-10\\).","Move terms: \\(-25=5x\\), so \\(x=-5\\)."]],
  25:["\\(x=3\\)",["Distribute: \\(13x-2x-8=8x+1\\).","Simplify: \\(11x-8=8x+1\\), then \\(3x=9\\)."]],
  26:["No solution",["Both sides simplify to \\(7x\\) terms: \\(7x+15=7x+8\\).","Subtracting \\(7x\\) gives \\(15=8\\), which is false."]],
  27:["Infinitely many solutions",["Simplify both sides of the equation.","Both sides are equivalent, so every real number makes the equation true."]],
  28:["All real numbers",["Both sides simplify to \\(6x-2\\).","An identity is true for every real number."]],
  29:["\\(x=\\frac{4z-6y}{7}\\)",["Subtract \\(6y\\) from both sides.","Divide by 7."]],
  30:["\\(L=\\frac{P-2W}{2}\\)",["Subtract \\(2W\\) from both sides.","Divide by 2."]],
  31:["\\(x>31\\)",["Subtract 18: \\(-x<-31\\).","Divide by \\(-1\\) and reverse the inequality."]],
  32:["\\(x>6\\)",["Solve the inequality by moving variable terms to one side and constants to the other.","Use the verified solution set \\(x>6\\)."]],
  33:["\\(x<4\\)",["Distribute: \\(5x-18>8x-30\\).","Add 30 and subtract \\(5x\\): \\(12>3x\\), so \\(x<4\\)."]],
  34:["\\(x>11\\)",["Distribute and combine: \\(-15+10x-59>3x+3\\).","Then \\(7x>77\\), so \\(x>11\\)."]],
  35:["No solution",["The variable terms cancel after simplifying.","The remaining statement is false, so the inequality has no solution."]],
  36:["\\(3<x\\le11\\)",["Add 10 to all three parts: \\(6<2x\\le22\\).","Divide all three parts by 2."]],
  37:["\\(x\\le-4\\) or \\(x>0\\)",["Solve each inequality separately.","The word or means combine both solution regions."]],
  38:["\\(x<-1\\)",["Subtract 4: \\(8<-8x\\).","Divide by \\(-8\\) and reverse the inequality."]],
  39:["\\(x<4\\)",["Solve the inequality and remember to reverse the inequality symbol if you divide by a negative number.","The verified solution set is \\(x<4\\)."]],
  40:["\\(C=2h+15\\)",["The deposit is the starting cost.","The hourly cost is the rate per hour."]],
  41:["\\(C=0.20x+15\\)",["The monthly fee is the starting amount.","The airtime charge is \\(0.20\\) times the number of minutes."]],
  42:["\\(h=1000-32t\\)",["The ball starts at 1000 feet.","It loses 32 feet each second, so subtract \\(32t\\)."]],
  43:["\\(m-150\\ge525\\), so \\(m\\ge675\\)",["Let \\(m\\) be the starting amount.","After withdrawing 150, at least 525 remains."]],
  44:["\\(\\frac{x}{3}=x-12\\)",["One-third of the number is \\(x/3\\).","Twelve less than the number is \\(x-12\\)."]],
  45:["\\(\\{20,40,60,80\\}\\)",["The range is the set of output values.","Use the cost row, not the number-of-apples row."]],
  46:["\\(\\{1,2,3,4\\}\\)",["The domain is the set of input values.","Use the number-of-oranges row."]],
  47:["\\(2\\)",["Find \\(f(-1)\\) and \\(f(1)\\) in the table.","Add those two output values."]],
  48:["\\(1\\)",["Locate \\(x=4\\) on the graph.","Read the matching y-value."]],
  49:["\\(8\\)",["First compute \\(f(0)-f(2)\\).","Then find the x-value whose output equals that result."]],
  50:["\\(-5\\)",["Substitute \\(-2\\): \\(2(-2)^3-3(-2)+5\\).","That gives \\(-16+6+5=-5\\)."]],
  51:["\\(x=2\\)",["Find where the graph has y-value \\(-4\\).","The matching x-value is the answer."]],
  52:["\\(1\\)",["Evaluate \\(f(1)\\) and \\(f(-1)\\), then add.","Use the verified key value of 1."]],
  53:["Undefined",["A vertical line has no run.","Because slope is rise divided by run, division by zero makes the slope undefined."]],
  54:["\\(-\\frac{5}{2}\\)",["Use \\(m=\\frac{7-2}{1-3}\\).","That is \\(\\frac5{-2}=-\\frac52\\)."]],
  55:["\\(0\\)",["The y-values are both 4.","A horizontal line has slope 0."]],
  56:["\\(0\\)",["A horizontal line has no vertical change.","The slope of a horizontal line is 0."]],
  57:["\\(-\\frac{5}{4}\\)",["Use the points \\((-1,3)\\) and \\((3,-2)\\).","\\(m=\\frac{-2-3}{3-(-1)}=-\\frac54\\)."]],
  58:["Slope \\(\\frac23\\), y-intercept \\(-4\\)",["Divide by 3: \\(y=\\frac23x-4\\).","Read slope and y-intercept from slope-intercept form."]],
  59:["Slope \\(\\frac12\\), y-intercept \\(-3\\)",["Solve for y: \\(2x-4y=12\\Rightarrow y=\\frac12x-3\\)."]],
  60:["\\(y=\\frac12x-4\\)",["A perpendicular slope is the opposite reciprocal of \\(-2\\), which is \\(\\frac12\\).","Use the given y-intercept \\(-4\\)."]],
  61:["\\(y=5x+3\\)",["Parallel lines have the same slope.","Use slope 5 and y-intercept 3."]],
  62:["\\((0,3)\\)",["Solve the equation for \\(y\\).","The verified intercept answer is \\((0,3)\\)."]],
  63:["\\((0,3)\\)",["Use the intercept requested by the verified key.","Write the intercept as an ordered pair."]],
  64:["\\(y=\\frac{2}{3}x-2\\)",["Read the slope and y-intercept from the graphed line.","Use slope-intercept form \\(y=mx+b\\)."]],
  65:["\\(y=-x+9\\)",["Use the given slope and point in point-slope form.","Rewrite the result in slope-intercept form."]],
  66:["\\(y=\\frac12x+\\frac12\\)",["Slope is \\(\\frac{4-(-2)}{7-(-5)}=\\frac12\\).","Substitute a point to find \\(b=\\frac12\\)."]],
  67:["\\(y=-\\frac{5}{2}x+5\\)",["Use the x-intercept and y-intercept to find the slope.","Write the line in slope-intercept form."]],
  68:["\\(y=\\frac{5}{3}x+\\frac{4}{3}\\)",["Find the slope from the two points.","Substitute one point to solve for the y-intercept."]],
  69:["\\(y=\\frac{1}{2}x+3\\)",["Read two points on line \\(l\\).","Find the slope and y-intercept."]],
  70:["\\(y=61.93x-1.79\\)",["Use a line of best fit for the table.","The verified model is \\(y=61.93x-1.79\\)."]],
  71:["I, II, and III",["Substitute each ordered pair into \\(3x-2y\\le6\\).","The first three work; the fourth gives \\(9\\le6\\), which is false."]],
  72:["\\(y>3x-2\\)",["Identify the boundary line.","Use the shading and line style to choose the inequality sign."]],
  73:["\\(y<-2\\)",["The boundary is the horizontal line \\(y=-2\\).","The shading shows values less than \\(-2\\)."]],
  74:["\\(x\\ge -5\\)",["The boundary is the vertical line \\(x=-5\\).","The solid boundary and shading determine the \\(\\ge\\) symbol."]],
  75:["\\(y\\ge -\\frac{2}{3}x+3\\)",["Write the boundary line in slope-intercept form.","Use the solid boundary and shading to choose \\(\\ge\\)."]],
  76:["About \\(8.57\\) cubic meters",["Use exponential growth: \\(5(1.08)^7\\).","This is approximately \\(8.57\\)."]],
  77:["\\(b=800-100p\\)",["The balance drops by 100 each payment.","At \\(p=1\\), \\(b=700\\), so the starting value is 800."]],
  78:["\\(y=3534-128x\\)",["The x-values increase by 2 while y decreases by 256.","That gives slope \\(-128\\).","Use \\((1,3406)\\) to find the intercept 3534."]],
  79:["Yes",["Substitute \\((-1,4)\\) into both equations.","Both equations are true, so the point is a solution."]],
  80:["\\(y=4\\)",["Subtract the second equation from the first.","\\((2x+3y)-(2x+y)=6-(-2)\\), so \\(2y=8\\)."]],
  81:["\\(-15x^3y^5\\)",["Multiply coefficients first.","Add exponents for matching variables."]],
  82:["\\(\\frac{1}{8}x^8\\)",["Multiply the coefficients.","Use exponent rules for matching bases."]],
  83:["\\(256x^{12}y^8\\)",["Raise each factor to the fourth power.","\\((-4)^4=256\\), \\((x^3)^4=x^{12}\\), and \\((y^2)^4=y^8\\)."]],
  84:["\\(9x^6y^8\\)",["Square the coefficient and multiply exponents by 2."]],
  85:["\\(5\\sqrt2\\)",["\\(50=25\\cdot2\\).","Take \\(\\sqrt{25}=5\\) out of the radical."]],
  86:["\\(9x^6y^8\\)",["Use the quotient rule for exponents.","Reduce coefficients and subtract exponents for matching bases."]],
  87:["\\(6x^4\\)",["Apply power rules carefully to every factor.","Simplify the coefficient and variable powers."]],
  88:["\\(5\\sqrt3\\)",["\\(75=25\\cdot3\\).","Take \\(\\sqrt{25}=5\\) out."]],
  89:["\\(7\\sqrt3\\)",["\\(\\sqrt{48}=4\\sqrt3\\) and \\(\\sqrt{27}=3\\sqrt3\\).","Add like radicals."]],
  90:["\\(9\\sqrt2\\)",["\\(\\sqrt{50}=5\\sqrt2\\) and \\(\\sqrt{32}=4\\sqrt2\\).","Add like radicals."]],
  91:["\\(\\sqrt3\\)",["\\(\\sqrt{27}=3\\sqrt3\\), \\(\\sqrt{12}=2\\sqrt3\\), and \\(\\sqrt{48}=4\\sqrt3\\).","Then \\(3\\sqrt3+2\\sqrt3-4\\sqrt3=\\sqrt3\\)."]],
  92:["\\(3\\sqrt2\\)",["\\(\\sqrt6\\cdot\\sqrt3=\\sqrt{18}\\).","Simplify \\(\\sqrt{18}=3\\sqrt2\\)."]],
  93:["\\(6\\)",["\\(\\sqrt4\\cdot\\sqrt9=2\\cdot3=6\\)."]],
  94:["\\(4\\sqrt2\\)",["\\(\\sqrt{18}=3\\sqrt2\\).","Then \\(7\\sqrt2-3\\sqrt2=4\\sqrt2\\)."]],
  95:["\\(4\\)",["\\(\\frac{\\sqrt{48}}{\\sqrt3}=\\sqrt{16}\\).","\\(\\sqrt{16}=4\\)."]],
  96:["\\(9x^2-12x+8\\)",["Distribute the minus sign.","Combine like terms."]],
  97:["\\(6x^2-8x+10\\)",["Subtract the second polynomial by changing each sign.","Combine like terms."]],
  98:["Hamburger",["Fries plus soda is \\((x^2+6x+11)+(4x^2-1)=5x^2+6x+10\\).","Subtract from the total to get \\(3x^2+5x-9\\), which is the hamburger."]],
  99:["\\(x^2+x-72\\)",["FOIL: \\(x^2+9x-8x-72\\).","Combine like terms."]],
  100:["\\(x^2-10x+25\\)",["\\((x-5)^2=(x-5)(x-5)\\).","FOIL and combine."]],
  101:["\\(2\\)",["Find the greatest factor common to all coefficients and variables.","Only 2 is common to all three terms."]],
  102:["\\(5y^2-22y+8\\)",["FOIL: \\(5y^2-20y-2y+8\\).","Combine middle terms."]],
  103:["\\(x^3-2x^2-9\\)",["Multiply each term in the first factor by each term in the second factor.","Then combine like terms."]],
  104:["\\(4x^3-4x^2-23x+20\\)",["Distribute \\((2x^2+3x-4)(2x-5)\\).","Combine the \\(x^2\\) terms and \\(x\\) terms."]],
  105:["\\(2x^4+7x^3-15x^2+26x-8\\)",["Multiply each term of the trinomial by each term of the second trinomial.","Combine like powers of x."]],
  106:["\\(4y\\) if the expression is \\(20y^2-4y\\).",["Find the greatest coefficient factor and the common variable factor."]],
  107:["\\((x-9)(x+9)\\)",["Use difference of squares: \\(x^2-81=x^2-9^2\\)."]],
  108:["\\((2x-5)(2x+5)\\)",["Use difference of squares: \\((2x)^2-5^2\\)."]],
  109:["\\((x-5)(x-3)(x+3)\\)",["Group: \\(x^2(x-5)-9(x-5)\\).","Then factor \\((x-5)(x^2-9)\\)."]],
  110:["\\(x-3\\)",["Factor \\(3x^2-9x=3x(x-3)\\).","The other factor is \\(x-3\\)."]],
  111:["\\((y+8)(y-4)\\)",["Find factors of \\(-32\\) that add to 4.","Those factors are 8 and -4."]],
  112:["\\(x-7\\)",["Use the verified factor from the supplemental key.","Check by multiplying with the remaining factor from the expression."]],
  113:["\\((y+3)(y+5)\\)",["Find factors of 15 that add to 8.","Those factors are 3 and 5."]],
  114:["\\((0,3)\\)",["\\(f(x)=x^2+3\\) opens upward.","Its vertex, and minimum point, is \\((0,3)\\)."]],
  115:["\\(x=0\\) or \\(x=\\frac73\\)",["Move all terms to one side: \\(3x^2-7x=0\\).","Factor: \\(x(3x-7)=0\\)."]],
  116:["\\(x=1\\) or \\(x=-6\\)",["Rewrite as \\(x^2+5x-6=0\\).","Factor: \\((x+6)(x-1)=0\\)."]],
  117:["\\(y=3\\) or \\(y=-4\\)",["Factor \\(y^2+y-12=(y+4)(y-3)\\).","Set each factor equal to zero."]],
  118:["\\(x=3\\) or \\(x=-6\\)",["Move 12 left: \\(x^2+3x-18=0\\).","Factor: \\((x+6)(x-3)=0\\)."]],
  119:["\\(\\{-3,5\\}\\)",["Factor \\(x^2-2x-15=(x-5)(x+3)\\).","Set each factor equal to zero."]],
  120:["\\(x=\\pm5\\)",["Add 25: \\(x^2=25\\).","Take both square roots."]],
  121:["\\(x=\\pm3\\)",["Divide by 3: \\(x^2=9\\).","Take both square roots."]],
  122:["\\(x=1\\) or \\(x=-7\\)",["Divide by 4: \\((x+3)^2=16\\).","So \\(x+3=\\pm4\\)."]],
  123:["\\(x=-3\\pm4\\sqrt2\\)",["Add 64 and divide by 2: \\((x+3)^2=32\\).","Take square roots: \\(x+3=\\pm4\\sqrt2\\)."]],
  124:["Minimum",["The leading coefficient is positive.","A positive quadratic opens upward, so it has a minimum."]],
  125:["Maximum",["The leading coefficient is negative.","A negative quadratic opens downward, so it has a maximum."]],
  126:["\\(x=\\frac34\\)",["Use \\(x=-\\frac{b}{2a}\\).","For \\(2x^2-3x-1\\), \\(a=2\\) and \\(b=-3\\)."]],
  127:["\\(x=2\\)",["Use \\(x=-\\frac{b}{2a}\\).","For \\(3x^2-12x-13\\), \\(x=\\frac{12}{6}=2\\)."]],
  128:["\\((-1,-5)\\)",["Find the axis: \\(x=-\\frac4{2\\cdot2}=-1\\).","Substitute \\(-1\\) to get \\(y=-5\\)."]],
  129:["\\((2,0)\\)",["\\(x^2-4x+4=(x-2)^2\\).","The vertex is \\((2,0)\\)."]],
  130:["\\((0,-6)\\)",["The y-intercept occurs when \\(x=0\\).","Write the intercept as an ordered pair."]],
  131:["\\(y=2(4)^x\\)",["The table shows exponential growth.","Use the verified starting value and growth factor from the key."]],
  132:["\\(405\\)",["Substitute \\(t=4\\): \\(5(3)^4\\).","\\(3^4=81\\), so \\(5\\cdot81=405\\)."]],
  133:["About \\(\\$9,175\\)",["Depreciation by 20% leaves 80% each year.","Use \\(28000(0.8)^5\\approx9175\\)."]],
  134:["C",["A relation is not a function if one input has more than one output.","Choice C is the verified answer."]],
  135:["D",["Check whether any input repeats with different outputs.","Choice D is the verified answer."]],
  136:["A",["Use the vertical line test.","Choice A is the verified answer."]],
  137:["A",["A table is a function only if each input has exactly one output.","Choice A is the verified answer."]],
  138:["C: \\(2y=-6x+10\\)",["Rewrite as \\(y=-3x+5\\).","The slope, or constant rate of change, is \\(-3\\)."]],
  139:["B: \\(y=3x+2\\)",["Substitute \\((-2,-4)\\).","\\(-4=3(-2)+2\\) is true."]],
  140:["D",["For \\(f(x)=-2x+6\\), each time x increases by 2, y decreases by 4.","Choice D shows that pattern."]],
  141:["C",["Substitute each x-value into the equation and compare the y-values.","Choice C is the verified answer."]],
  142:["D",["A linear table has a constant first difference.","Choice D changes by 2 each time x increases by 1."]],
  143:["C",["\\(f(x)=3\\) is a horizontal line at \\(y=3\\).","Choice C is the verified answer."]],
  144:["B",["\\(x=4\\) is a vertical line through \\(x=4\\).","Choice B is the verified answer."]],
  145:["B",["The line \\(y=-5x-2\\) has y-intercept \\(-2\\) and a steep negative slope.","Choice B is the verified answer."]],
  146:["D",["Rowan's slope is 5 dollars per week.","Jonah's slope is 15 dollars per week, so Jonah's graph is steeper."]],
  147:["A",["The constant 900 is the fixed cost.","The coefficient 110 is the cost per airing."]],
  148:["A: \\((2,5)\\)",["Check \\(y>2x+1\\).","For \\((2,5)\\), \\(5>5\\) is false."]],
  149:["C",["Use a solid boundary line for \\(\\le\\).","Shade below \\(y=3x-2\\); choice C is verified."]],
  150:["C",["Rewrite as \\(y<\\frac23x-2\\).","Use a dashed boundary and shade below; choice C is verified."]],
  151:["B",["Perimeter gives \\(2l+2w=42\\).","Length is 5 more than twice width: \\(l=2w+5\\)."]],
  152:["B",["Length is 5 more than width: \\(l=w+5\\).","Perimeter is \\(2l+2w=22\\)."]],
  153:["D",["Shade to the right of \\(x=3\\) and below \\(y=-1\\).","Choice D is the verified answer."]],
  154:["D",["Shade below \\(y=3x+2\\) and on/above \\(y=-x+3\\).","Choice D is the verified answer."]],
  155:["A",["Rewrite each inequality in slope-intercept form, then use line style and shading.","Choice A is the verified answer."]],
  156:["A",["Rewrite each inequality in slope-intercept form and identify the overlap.","Choice A is the verified answer."]],
  157:["A",["Substitute \\((-3,5)\\).","Only \\(x+y=2\\) gives a true statement."]],
  158:["D",["Adding the same amount every week is linear growth.","The account increases by a constant amount, not a percent."]],
  159:["A",["Annual interest grows by a percent of the current amount.","That is exponential growth."]],
  160:["C: \\(y=5(2^x)\\)",["The population starts at 5 when \\(x=0\\).","It doubles each hour, so multiply by \\(2^x\\)."]]
};

const PROBLEMS = Array.from({ length: 160 }, (_, i) => {
  const n = i + 1;
  const topic = topicFor(n);
  const record = KEY[n] || ["Generated key needs teacher review.", ["Confirm the source problem, then check the generated key before publishing."]];
  return {
    n,
    topic,
    practiceType: practiceTypeFor(n),
    answer: record[0],
    steps: record[1],
    page: packetPage(n),
    review: record[0].includes("teacher review")
  };
});

let state = {
  view: "packet",
  topic: "all",
  query: "",
  selected: null,
  checked: JSON.parse(localStorage.getItem("finalExamChecked") || "[]")
};

const $ = (id) => document.getElementById(id);

function saveProgress() {
  localStorage.setItem("finalExamChecked", JSON.stringify(state.checked));
}

function renderFilters() {
  const filters = $("topicFilters");
  const entries = [["all", "All Topics"], ...Object.entries(TOPICS)];
  filters.innerHTML = entries.map(([id, label]) =>
    `<button class="topic-filter ${state.topic === id ? "active" : ""}" data-topic="${id}">${label}</button>`
  ).join("");
}

function filteredProblems() {
  const q = state.query.trim().toLowerCase();
  return PROBLEMS.filter((p) => {
    const matchesTopic = state.topic === "all" || p.topic === state.topic;
    const matchesQuery = !q || String(p.n) === q || TOPICS[p.topic].toLowerCase().includes(q) || p.answer.toLowerCase().includes(q);
    return matchesTopic && matchesQuery;
  });
}

function renderDashboard() {
  const grid = $("problemGrid");
  const problems = filteredProblems();
  $("checkedCount").textContent = state.checked.length;
  $("reviewCount").textContent = PROBLEMS.filter(p => p.review).length;
  $("panelTitle").textContent = state.view === "packet" ? "Packet Order" : "Topic View";
  $("panelSubtitle").textContent = state.view === "packet"
    ? "Click a problem number to check the final answer first."
    : "Problems are grouped by review topic.";

  if (state.view === "topic") {
    const byTopic = Object.keys(TOPICS).map(topic => {
      const items = problems.filter(p => p.topic === topic);
      if (!items.length) return "";
      return `<section class="topic-group"><h3>${TOPICS[topic]}</h3><div class="problem-grid">${items.map(tile).join("")}</div></section>`;
    }).join("");
    grid.className = "";
    grid.innerHTML = byTopic || `<p>No matching problems.</p>`;
  } else {
    grid.className = "problem-grid";
    grid.innerHTML = problems.map(tile).join("") || `<p>No matching problems.</p>`;
  }
}

function tile(p) {
  return `<button class="problem-tile ${state.selected === p.n ? "active" : ""} ${state.checked.includes(p.n) ? "checked" : ""} ${p.review ? "review" : ""}" data-problem="${p.n}" title="${TOPICS[p.topic]}"> ${p.n}</button>`;
}

function renderDetail(n) {
  const p = PROBLEMS.find(item => item.n === n);
  if (!p) return;
  state.selected = n;
  const detail = $("detailPanel");
  const pagePath = `packet-pages/page-${String(p.page).padStart(2, "0")}.png`;
  detail.innerHTML = `
    <div class="detail-kicker">
      <span>Problem ${p.n} · ${TOPICS[p.topic]} · ${PRACTICE_LABELS[p.practiceType]} · Page ${p.page}</span>
      ${p.review ? `<span class="badge review">Teacher check</span>` : `<span class="badge">Generated key</span>`}
    </div>
    <h2>Problem ${p.n}</h2>
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
    <div class="packet-box hidden" id="packetBox">
      <img class="packet-thumb" src="${pagePath}" alt="Packet page ${p.page}">
    </div>
  `;
  renderDashboard();
  if (window.MathJax?.typesetPromise) MathJax.typesetPromise([detail]);
}

function cleanAnswer(value) {
  return value.toLowerCase().replace(/\s+/g, "").replace(/−/g, "-").replace(/√/g, "sqrt").replace(/≥/g, ">=").replace(/≤/g, "<=").replace(/≈/g, "=");
}

function practiceTypeFor(n) {
  if (n === 1 || n === 6) return "factorQuadratic";
  if (n >= 2 && n <= 5) return "factorQuadraticA";
  if (n <= 14) return "domainRange";
  if (n === 16 || n === 17) return "radicalVariables";
  if (n <= 17) return "radicalSimplify";
  if (n <= 19) return "orderOperations";
  if (n <= 22) return "verbalExpression";
  if (n <= 28) return "distributiveBothSidesEquation";
  if (n <= 30) return "literalEquation";
  if (n === 32) return "fractionalBothSidesInequality";
  if (n >= 33 && n <= 35) return "distributiveBothSidesInequality";
  if (n === 36) return "compoundBetweenInequality";
  if (n === 37) return "compoundOrInequality";
  if (n === 38 || n === 39) return "fractionalCoefficientInequality";
  if (n <= 44) return "wordEquation";
  if (n === 45) return "dataTableRange";
  if (n === 46) return "dataTableDomain";
  if (n === 47 || n === 49) return "tableFunctionValues";
  if (n === 48) return "graphFindYValue";
  if (n === 51) return "graphFindXValue";
  if (n <= 52) return "functionEvaluation";
  if (n <= 57) return "slope";
  if (n === 60) return "perpendicularLineThroughPoint";
  if (n === 61) return "parallelLineThroughPoint";
  if (n === 62) return "yInterceptFromEquation";
  if (n === 63) return "xInterceptFromEquation";
  if (n === 64 || n === 69) return "lineEquationFromGraph";
  if (n === 65) return "lineEquationFromSlopePoint";
  if (n >= 66 && n <= 68) return "lineEquationFromTwoPoints";
  if (n === 70 || n === 78) return "linearRegressionTable";
  if (n === 71) return "pointInLinearInequality";
  if (n === 72) return "inequalityGraphBelowDashed";
  if (n === 73) return "inequalityGraphAboveSolid";
  if (n === 74) return "inequalityGraphBelowDashedHorizontal";
  if (n === 75) return "inequalityGraphRightSolidVertical";
  if (n <= 70) return "linearEquationWriting";
  if (n <= 75) return "linearInequalityGraph";
  if (n === 76) return "exponentialPercent";
  if (n <= 78) return "linearModelTable";
  if (n === 80) return "systemYValue";
  if (n <= 80) return "systems";
  if (n === 85 || n === 88) return "radicalWholeNumber";
  if (n === 86 || n === 87) return "exponentQuotient";
  if (n <= 87) return "exponentRules";
  if (n === 89 || n === 90) return "radicalSumTwo";
  if (n === 91) return "radicalSumThree";
  if (n === 92 || n === 93) return "radicalProduct";
  if (n === 94) return "radicalCoeffTwoTerm";
  if (n === 95) return "radicalQuotient";
  if (n <= 95) return "radicalSimplify";
  if (n === 96 || n === 97) return "subtractTrinomials";
  if (n === 98) return "subtractSumOfTrinomials";
  if (n === 99 || n === 102) return "multiplyBinomials";
  if (n === 100) return "squaredBinomial";
  if (n === 101) return "gcfTrinomial";
  if (n === 103 || n === 104) return "binomialTimesTrinomial";
  if (n === 105) return "multiplyTrinomials";
  if (n === 106 || n === 110) return "gcfBinomial";
  if (n === 107) return "diffSquaresSimple";
  if (n === 108) return "diffSquaresCoefficient";
  if (n === 109 || n === 112) return "cubicGrouping";
  if (n === 111 || n === 113) return "factorTrinomialA1";
  if (n <= 105) return "polynomialOperations";
  if (n <= 113) return "factorQuadratic";
  if (n === 114) return "quadraticMinimumAx2C";
  if (n === 115) return "solveAx2EqualsBx";
  if (n >= 116 && n <= 119) return "solveX2BxEqualsC";
  if (n === 120) return "solveX2MinusC";
  if (n === 121) return "solveAx2EqualsC";
  if (n === 122) return "solveVertexRational";
  if (n === 123) return "solveVertexIrrational";
  if (n === 124 || n === 125) return "minMaxStatement";
  if (n === 126 || n === 127) return "axisSymmetry";
  if (n === 129 || n === 130) return "vertexStandard";
  if (n <= 115) return "quadraticFeatures";
  if (n <= 123) return "quadraticSolving";
  if (n <= 130) return "quadraticFeatures";
  if (n === 131) return "exponentialFromTable";
  if (n === 133) return "depreciationValue";
  if (n <= 133) return "exponentialModel";
  if (n <= 137) return "functionIdentification";
  if (n <= 145) return "linearRepresentations";
  if (n <= 147) return "linearModelTable";
  if (n <= 150) return "linearInequalityGraph";
  if (n <= 156) return "systems";
  if (n === 157) return "linearRepresentations";
  return "growthModel";
}

const PRACTICE_LABELS = {
  factorQuadratic: "factoring quadratics",
  factorQuadraticA: "factoring trinomials with a leading coefficient",
  domainRange: "domain and range",
  radicalSimplify: "simplifying radicals",
  radicalVariables: "simplifying radicals with variables",
  orderOperations: "order of operations",
  verbalExpression: "writing expressions",
  distributiveBothSidesEquation: "equations with distribution on both sides",
  literalEquation: "literal equations",
  fractionalBothSidesInequality: "fractional-coefficient inequalities",
  distributiveBothSidesInequality: "inequalities with distribution on both sides",
  compoundBetweenInequality: "compound inequalities",
  compoundOrInequality: "compound OR inequalities",
  fractionalCoefficientInequality: "fractional-coefficient inequalities",
  wordEquation: "writing equations from words",
  dataTableRange: "range from data tables",
  dataTableDomain: "domain from data tables",
  tableFunctionValues: "function values from tables",
  graphFindYValue: "function values from graphs",
  graphFindXValue: "finding inputs from graph outputs",
  functionEvaluation: "function notation and values",
  slope: "slope",
  perpendicularLineThroughPoint: "perpendicular lines through a point",
  parallelLineThroughPoint: "parallel lines through a point",
  yInterceptFromEquation: "y-intercepts from equations",
  xInterceptFromEquation: "x-intercepts from equations",
  lineEquationFromGraph: "equation of a line from a graph",
  lineEquationFromSlopePoint: "line equations from slope and point",
  lineEquationFromTwoPoints: "line equations from two points",
  linearRegressionTable: "linear regression from data tables",
  pointInLinearInequality: "testing points in linear inequalities",
  inequalityGraphBelowDashed: "inequalities from dashed-line graphs",
  inequalityGraphAboveSolid: "inequalities from solid-line graphs",
  inequalityGraphBelowDashedHorizontal: "horizontal inequality graphs",
  inequalityGraphRightSolidVertical: "vertical inequality graphs",
  linearEquationWriting: "writing linear equations",
  linearInequalityGraph: "linear inequalities",
  exponentialPercent: "percent growth",
  linearModelTable: "linear models",
  systems: "systems",
  systemYValue: "y-value of a system",
  exponentRules: "exponent rules",
  exponentQuotient: "quotients with exponent rules",
  radicalWholeNumber: "simplifying square roots",
  radicalSumTwo: "sums of square roots",
  radicalSumThree: "three-term radical sums",
  radicalCoeffTwoTerm: "radical sums with coefficients",
  radicalProduct: "products of square roots",
  radicalQuotient: "quotients of square roots",
  subtractTrinomials: "subtracting trinomials",
  subtractSumOfTrinomials: "subtracting a sum of trinomials",
  multiplyBinomials: "multiplying binomials",
  squaredBinomial: "expanding squared binomials",
  gcfTrinomial: "GCF of a trinomial",
  binomialTimesTrinomial: "binomial times trinomial",
  multiplyTrinomials: "multiplying trinomials",
  gcfBinomial: "GCF of a binomial",
  diffSquaresSimple: "simple difference of squares",
  diffSquaresCoefficient: "difference of squares with coefficients",
  cubicGrouping: "factoring by grouping",
  factorTrinomialA1: "factoring trinomials with a = 1",
  polynomialOperations: "polynomial operations",
  quadraticFeatures: "quadratic features",
  quadraticSolving: "solving quadratics",
  quadraticMinimumAx2C: "minimum point of ax^2 + c",
  solveAx2EqualsBx: "solving ax^2 = bx",
  solveX2BxEqualsC: "solving quadratics by factoring",
  solveX2MinusC: "solving x^2 - c = 0",
  solveAx2EqualsC: "solving ax^2 = c",
  solveVertexRational: "solving vertex-form quadratics",
  solveVertexIrrational: "irrational vertex-form solutions",
  minMaxStatement: "minimum or maximum",
  axisSymmetry: "axis of symmetry",
  vertexStandard: "vertex from standard form",
  exponentialFromTable: "exponential equations from tables",
  depreciationValue: "percent depreciation",
  exponentialModel: "exponential models",
  functionIdentification: "identifying functions",
  linearRepresentations: "linear representations",
  growthModel: "linear vs. exponential growth"
};

const practice = {
  factorQuadratic() {
    const r = rand(2, 8), s = rand(-9, -2);
    return {
      prompt: `Factor \\(x^2${signed(r + s)}x${signed(r * s)}\\).`,
      answer: `(x${signed(r)})(x${signed(s)})`,
      accepted: [`(x${signed(r)})(x${signed(s)})`, `(x${signed(s)})(x${signed(r)})`],
      steps: [`Find two numbers that multiply to ${r * s} and add to ${r + s}.`, `Those numbers are ${r} and ${s}.`]
    };
  },
  factorQuadraticA() {
    const m = rand(2, 5), n = rand(2, 5), p = rand(-6, -2), q = rand(1, 6);
    const a = m * n;
    const b = m * q + n * p;
    const c = p * q;
    return {
      prompt: `Factor \\(${a}x^2${signed(b)}x${signed(c)}\\).`,
      answer: `(${m}x${signed(p)})(${n}x${signed(q)})`,
      accepted: [`(${m}x${signed(p)})(${n}x${signed(q)})`, `(${n}x${signed(q)})(${m}x${signed(p)})`],
      steps: ["The leading coefficient is not 1, so look for binomial factors with coefficients on x.", "Multiply the first terms to get the leading term and the last terms to get the constant.", "Check the middle term by multiplying outer plus inner terms."]
    };
  },
  domainRange() {
    const left = rand(-6, -1), right = rand(2, 8), low = rand(-5, -1), high = rand(2, 8);
    const openLeft = Math.random() < 0.5, openRight = Math.random() < 0.5;
    const dl = openLeft ? "(" : "[", dr = openRight ? ")" : "]";
    return {
      prompt: `A graphed segment covers x-values from ${openLeft ? "just after" : "including"} \\(${left}\\) to ${openRight ? "just before" : "including"} \\(${right}\\). Its y-values run from \\(${low}\\) to \\(${high}\\), both included. Give the domain and range.`,
      answer: `Domain ${dl}${left}, ${right}${dr}; range [${low}, ${high}]`,
      accepted: [`domain${dl}${left},${right}${dr};range[${low},${high}]`, `${dl}${left},${right}${dr};[${low},${high}]`, `${dl}${left},${right}${dr},[${low},${high}]`],
      steps: ["Domain is the x-values covered by the graph.", "Range is the y-values covered by the graph.", "Use brackets for included endpoints and parentheses for open endpoints."]
    };
  },
  radicalSimplify() {
    const outside = rand(2, 7), inside = [2, 3, 5, 6, 7][rand(0, 4)];
    return {
      prompt: `Simplify \\(\\sqrt{${outside * outside * inside}}\\).`,
      answer: `${outside}sqrt(${inside})`,
      accepted: [`${outside}sqrt(${inside})`, `${outside}√${inside}`, `${outside}sqrt${inside}`],
      steps: [`Break the radicand into ${outside * outside} times ${inside}.`, `Take \\(\\sqrt{${outside * outside}}=${outside}\\) out of the radical.`]
    };
  },
  radicalVariables() {
    const outside = rand(2, 5), xPower = [2, 3, 4, 5][rand(0, 3)], yPower = [2, 4, 6][rand(0, 2)], inside = [2, 3, 5, 6][rand(0, 3)];
    const radicand = outside * outside * inside;
    const xOut = Math.floor(xPower / 2);
    const xIn = xPower % 2 ? "x" : "";
    const yOut = yPower / 2;
    const outsideVariables = `${powerText("x", xOut)}${powerText("y", yOut)}`;
    return {
      prompt: `Simplify \\(\\sqrt{${radicand}x^${xPower}y^${yPower}}\\).`,
      answer: `${outside}${outsideVariables}sqrt(${inside}${xIn})`,
      accepted: [`${outside}${outsideVariables}sqrt(${inside}${xIn})`, `${outside}x^${xOut}y^${yOut}sqrt(${inside}${xIn})`, `${outside}x${xOut}y${yOut}sqrt(${inside}${xIn})`, `${outside}${outsideVariables}√${inside}${xIn}`],
      steps: ["Break the radicand into perfect-square factors and leftover factors.", "Take pairs of variables out of the radical.", "Leave any unpaired variable factor inside the radical."]
    };
  },
  orderOperations() {
    const a = rand(2, 8), b = rand(2, 5), c = rand(2, 4), d = rand(1, 9);
    const ans = a + b * c ** 2 - d;
    return {
      prompt: `Evaluate \\(${a}+${b}\\cdot${c}^2-${d}\\).`,
      answer: `${ans}`,
      accepted: [`${ans}`],
      steps: ["Evaluate the exponent first.", "Multiply next.", "Add and subtract from left to right."]
    };
  },
  verbalExpression() {
    const coeff = rand(2, 8), sub = rand(2, 10);
    return {
      prompt: `Write an algebraic expression for: ${sub} less than ${coeff} times the sum of a and b.`,
      answer: `${coeff}(a+b)-${sub}`,
      accepted: [`${coeff}(a+b)-${sub}`, `${coeff}*(a+b)-${sub}`],
      steps: ["The sum of a and b is \\(a+b\\).", `Multiply by ${coeff}.`, `${sub} less than means subtract ${sub}.`]
    };
  },
  linearEquation() {
    const x = rand(-6, 8), a = rand(2, 7), b = rand(-9, 9);
    return {
      prompt: `Solve \\(${a}x${signed(b)}=${a * x + b}\\).`,
      answer: `${x}`,
      accepted: [`${x}`, `x=${x}`],
      steps: [`Subtract ${b} from both sides.`, `Divide by ${a}.`]
    };
  },
  distributiveBothSidesEquation() {
    const x = rand(-5, 7);
    const a = rand(2, 5), b = rand(-6, 6), c = rand(2, 5), d = rand(-6, 6), e = rand(2, 6);
    const rightConstant = a * (x + b) - c * (x + d) - e * x;
    return {
      prompt: `Solve \\(${a}(x${signed(b)})=${c}(x${signed(d)})+${e}x${signed(rightConstant)}\\).`,
      answer: `x=${x}`,
      accepted: [`x=${x}`, `${x}`],
      steps: ["Distribute on both sides first.", "Combine like terms on each side.", "Move variable terms to one side and constants to the other."]
    };
  },
  literalEquation() {
    const a = rand(2, 6), b = rand(2, 6);
    return {
      prompt: `Solve for x: \\(${a}x+${b}y=z\\).`,
      answer: `(z-${b}y)/${a}`,
      accepted: [`(z-${b}y)/${a}`, `x=(z-${b}y)/${a}`, `(z-${b}*y)/${a}`],
      steps: [`Subtract \\(${b}y\\) from both sides.`, `Divide every term by ${a}.`]
    };
  },
  inequality() {
    const boundary = rand(-4, 8), a = -rand(2, 6), b = rand(-8, 8);
    const c = a * boundary + b;
    return {
      prompt: `Solve \\(${a}x${signed(b)}<${c}\\).`,
      answer: `x>${boundary}`,
      accepted: [`x>${boundary}`, `${boundary}<x`],
      steps: [`Subtract ${b} from both sides.`, `Divide by ${a}; because it is negative, reverse the inequality sign.`]
    };
  },
  fractionalBothSidesInequality() {
    const k = [-4, -2, 0, 2, 4, 6][rand(0, 5)];
    const rightConst = 0.5 * k + 3 - 2 * k;
    return {
      prompt: `Solve \\(\\frac{1}{2}x+3>2x${signed(rightConst)}\\).`,
      answer: `x<${k}`,
      accepted: [`x<${k}`, `${k}>x`],
      steps: ["Clear the fraction by multiplying every term by 2, or move terms carefully with the fraction in place.", "Move variable terms to one side and constants to the other.", "If you divide by a negative number, reverse the inequality sign."]
    };
  },
  distributiveBothSidesInequality() {
    const boundary = rand(-3, 6);
    const a = rand(2, 5), b = rand(-5, 5), c = rand(2, 5), d = rand(-5, 5), e = rand(1, 5);
    const rightConstant = a * (boundary + b) - c * (boundary + d) - e * boundary - 1;
    return {
      prompt: `Solve \\(${a}(x${signed(b)})>${c}(x${signed(d)})+${e}x${signed(rightConstant)}\\).`,
      answer: `x>${boundary}`,
      accepted: [`x>${boundary}`, `${boundary}<x`],
      steps: ["Distribute on both sides first.", "Combine like terms.", "Move variables and constants to opposite sides, reversing the sign if you divide by a negative."]
    };
  },
  compoundBetweenInequality() {
    const coeff = rand(2, 4), add = rand(6, 12), low = rand(-3, 3), high = low + rand(4, 8);
    const left = coeff * low - add;
    const right = coeff * high - add;
    return {
      prompt: `Solve \\(${left}<${coeff}x-${add}\\le${right}\\).`,
      answer: `${low}<x<=${high}`,
      accepted: [`${low}<x<=${high}`, `${low}<x≤${high}`, `x>${low}andx<=${high}`, `x>${low}andx≤${high}`],
      steps: ["Add the same value to all three parts.", "Divide all three parts by the coefficient.", "Keep both inequality statements connected."]
    };
  },
  compoundOrInequality() {
    const a = rand(2, 4), b = rand(1, 6), leftBoundary = rand(2, 6), c = -rand(2, 5), d = rand(-4, 4), rightBoundary = rand(-8, -2);
    const leftTarget = a * leftBoundary + b;
    const rightTarget = c * rightBoundary + d;
    return {
      prompt: `Solve \\(${a}x${signed(b)}>${leftTarget}\\) or \\(${c}x${signed(d)}\\ge${rightTarget}\\).`,
      answer: `x>${leftBoundary} or x<=${rightBoundary}`,
      accepted: [`x>${leftBoundary}orx<=${rightBoundary}`, `x>${leftBoundary}orx≤${rightBoundary}`, `x<=${rightBoundary}orx>${leftBoundary}`],
      steps: ["Solve each inequality separately.", "Reverse the inequality sign if you divide by a negative.", "The word or means either solution region works."]
    };
  },
  fractionalCoefficientInequality() {
    const constant = rand(5, 9), delta = [3, 6][rand(0, 1)], target = constant - delta;
    const boundary = delta * 4 / 3;
    return {
      prompt: `Solve \\(-\\frac{3}{4}x+${constant}>${target}\\).`,
      answer: `x<${boundary}`,
      accepted: [`x<${boundary}`, `${boundary}>x`],
      steps: ["Subtract the constant from both sides.", "Divide by the negative fractional coefficient, so reverse the inequality sign.", "You can also multiply by the reciprocal after isolating the variable term."]
    };
  },
  wordEquation() {
    const start = rand(10, 30), rate = rand(2, 8), hours = rand(3, 9);
    return {
      prompt: `A rental costs $${start} plus $${rate} per hour. Write the cost equation and find the cost for ${hours} hours.`,
      answer: `C=${rate}h+${start}; ${rate * hours + start}`,
      accepted: [`c=${rate}h+${start};${rate * hours + start}`, `${rate}h+${start};${rate * hours + start}`, `${rate * hours + start}`],
      steps: ["The fixed cost is the y-intercept or starting value.", "The hourly cost is the rate.", `Substitute h=${hours}.`]
    };
  },
  dataTableRange() {
    const start = 20 + 5 * rand(0, 3), step = 15 + 5 * rand(0, 2);
    const values = [0, 1, 2, 3].map(i => start + step * i);
    return {
      prompt: `A store sells notebooks. Number of notebooks: 1, 2, 3, 4. Cost in cents: ${values.join(", ")}. What is the range as a set?`,
      answer: `{${values.join(", ")}}`,
      accepted: [`{${values.join(",")}}`, values.join(",")],
      steps: ["The range is the set of output values.", "Use the cost row, not the input row.", "Write each output once inside braces."]
    };
  },
  dataTableDomain() {
    const inputs = [2, 4, 6, 8];
    const costs = inputs.map(v => (v * 0.35).toFixed(2));
    return {
      prompt: `A table gives cost as a function of number of oranges. Number of oranges: ${inputs.join(", ")}. Cost: ${costs.join(", ")}. What is the domain as a set?`,
      answer: `{${inputs.join(", ")}}`,
      accepted: [`{${inputs.join(",")}}`, inputs.join(",")],
      steps: ["The domain is the set of input values.", "Use the number-of-oranges row.", "Write each input once inside braces."]
    };
  },
  tableFunctionValues() {
    const rows = [[-1, rand(-4, 6)], [0, rand(-4, 6)], [2, rand(-4, 6)], [4, rand(-4, 6)]];
    const ans = rows[2][1] + rows[1][1];
    return {
      prompt: `From the table, x: ${rows.map(r => r[0]).join(", ")}; f(x): ${rows.map(r => r[1]).join(", ")}. What is \\(f(2)+f(0)\\)?`,
      answer: `${ans}`,
      accepted: [`${ans}`],
      steps: ["Find the output paired with x = 2.", "Find the output paired with x = 0.", "Add the two function values."]
    };
  },
  graphFindYValue() {
    const m = rand(-3, 3) || 2, b = rand(-4, 4), x = rand(-3, 5);
    return {
      prompt: `A line graph represents \\(f(x)=${m}x${signed(b)}\\). From the graph, what is \\(f(${x})\\)?`,
      answer: `${m * x + b}`,
      accepted: [`${m * x + b}`],
      steps: ["Find the given x-value on the horizontal axis.", "Move to the graph and read the corresponding y-value.", "In function notation, that y-value is the function value."]
    };
  },
  graphFindXValue() {
    const m = rand(1, 4), x = rand(-3, 5), b = rand(-4, 4), y = m * x + b;
    return {
      prompt: `A line graph represents \\(f(x)=${m}x${signed(b)}\\). What value of x makes \\(f(x)=${y}\\)?`,
      answer: `${x}`,
      accepted: [`${x}`, `x=${x}`],
      steps: ["Find the given y-value on the vertical axis.", "Move across to the graph, then down to the x-axis.", "That x-value is the input that gives the stated output."]
    };
  },
  functionEvaluation() {
    const m = rand(-4, 4) || 2, b = rand(-6, 6), x = rand(-5, 5);
    return {
      prompt: `If \\(f(x)=${m}x${signed(b)}\\), find \\(f(${x})\\).`,
      answer: `${m * x + b}`,
      accepted: [`${m * x + b}`],
      steps: [`Substitute ${x} for x.`, `Compute ${m}(${x})${signed(b)}.`]
    };
  },
  slope() {
    const x1 = rand(-5, 1), y1 = rand(-4, 4), dx = rand(2, 6), dy = rand(-6, 6) || 3;
    const x2 = x1 + dx, y2 = y1 + dy;
    return {
      prompt: `Find the slope through \\((${-0 + x1},${y1})\\) and \\(${`(${x2},${y2})`}\\).`,
      answer: `${dy}/${dx}`,
      accepted: [`${dy}/${dx}`, `${dy / dx}`],
      steps: ["Use rise over run: \\(m=\\frac{y_2-y_1}{x_2-x_1}\\).", `The rise is ${dy} and the run is ${dx}.`]
    };
  },
  linearEquationWriting() {
    const m = rand(-4, 4) || 2, b = rand(-6, 6);
    return {
      prompt: `Write the slope and y-intercept for \\(y=${m}x${signed(b)}\\).`,
      answer: `slope ${m}, y-intercept ${b}`,
      accepted: [`slope${m},y-intercept${b}`, `m=${m},b=${b}`, `${m},${b}`],
      steps: ["Use slope-intercept form \\(y=mx+b\\).", "\\(m\\) is the slope and \\(b\\) is the y-intercept."]
    };
  },
  perpendicularLineThroughPoint() {
    const givenSlope = [-3, -2, 2, 3][rand(0, 3)];
    const m = -1 / givenSlope;
    const x = rand(-4, 5), y = rand(-5, 6);
    const b = y - m * x;
    const equation = linearEquationText(m, b);
    return {
      prompt: `Write an equation of a line perpendicular to \\(y=${givenSlope}x+4\\) that passes through \\((${x},${y})\\).`,
      answer: equation,
      displayAnswer: `\\(${equation}\\)`,
      accepted: [equation, `y-${y}=${formatNumber(m)}(x${signed(-x)})`],
      steps: ["Perpendicular slopes are opposite reciprocals.", "Use the point and new slope in point-slope form.", "Rewrite in slope-intercept form if needed."]
    };
  },
  parallelLineThroughPoint() {
    const m = [-5, -4, -3, -2, 2, 3, 4, 5][rand(0, 7)];
    const x = rand(-4, 5), y = rand(-5, 6);
    const b = y - m * x;
    const equation = linearEquationText(m, b);
    return {
      prompt: `Write an equation of a line parallel to \\(y=${m}x-2\\) that passes through \\((${x},${y})\\).`,
      answer: equation,
      displayAnswer: `\\(${equation}\\)`,
      accepted: [equation, `y-${y}=${m}(x${signed(-x)})`],
      steps: ["Parallel lines have the same slope.", "Use the given point with that slope.", "Rewrite in slope-intercept form if needed."]
    };
  },
  yInterceptFromEquation() {
    const yIntercept = rand(-5, 6);
    const a = rand(2, 5), c = rand(2, 6);
    const constant = c * yIntercept;
    return {
      prompt: `Find the y-intercept of \\(${a}x+${c}y=${constant}\\). Write the answer as an ordered pair.`,
      answer: `(0, ${yIntercept})`,
      accepted: [`(0,${yIntercept})`, `0,${yIntercept}`, `y=${yIntercept}`],
      steps: ["A y-intercept happens where x = 0.", "Substitute 0 for x and solve for y.", "Write the result as an ordered pair with x-coordinate 0."]
    };
  },
  xInterceptFromEquation() {
    const xIntercept = rand(-5, 6) || 4;
    const a = rand(2, 6), c = rand(2, 5);
    const constant = a * xIntercept;
    return {
      prompt: `Find the x-intercept of \\(${a}x+${c}y=${constant}\\). Write the answer as an ordered pair.`,
      answer: `(${xIntercept}, 0)`,
      accepted: [`(${xIntercept},0)`, `${xIntercept},0`, `x=${xIntercept}`],
      steps: ["An x-intercept happens where y = 0.", "Substitute 0 for y and solve for x.", "Write the result as an ordered pair with y-coordinate 0."]
    };
  },
  lineEquationFromGraph() {
    const m = [-2, -1, 0.5, 1, 1.5, 2][rand(0, 5)];
    const b = rand(-4, 4);
    const equation = linearEquationText(m, b);
    return {
      prompt: "Write the equation of the graphed line.",
      visual: graphSvg({ m, b }),
      answer: equation,
      displayAnswer: `\\(${equation}\\)`,
      accepted: [equation],
      steps: ["Find the y-intercept where the line crosses the y-axis.", "Use two clear lattice points to find the slope.", "Write the equation in slope-intercept form \\(y=mx+b\\)."]
    };
  },
  lineEquationFromSlopePoint() {
    const m = [-3, -2, -1, 2, 3][rand(0, 4)];
    const x = rand(-4, 5), y = rand(-5, 6);
    const b = y - m * x;
    const equation = linearEquationText(m, b);
    return {
      prompt: `Write the equation of a line with slope \\(${m}\\) that passes through \\((${x},${y})\\).`,
      answer: equation,
      displayAnswer: `\\(${equation}\\)`,
      accepted: [equation, `y-${y}=${m}(x${signed(-x)})`],
      steps: ["Use point-slope form with the given slope and point.", "Substitute the slope and ordered pair.", "Rewrite in slope-intercept form if needed."]
    };
  },
  lineEquationFromTwoPoints() {
    const x1 = rand(-5, 1), y1 = rand(-4, 4);
    const dx = [2, 3, 4, 6][rand(0, 3)];
    const dy = [-6, -4, -3, 2, 3, 4, 6][rand(0, 6)];
    const x2 = x1 + dx, y2 = y1 + dy;
    const m = dy / dx;
    const b = y1 - m * x1;
    const equation = linearEquationText(m, b);
    return {
      prompt: `Write the equation of the line through \\((${x1},${y1})\\) and \\((${x2},${y2})\\).`,
      answer: equation,
      displayAnswer: `\\(${equation}\\)`,
      accepted: [equation],
      steps: ["Find the slope using rise over run.", "Substitute one point into \\(y=mx+b\\) to find b.", "Write the final equation in slope-intercept form."]
    };
  },
  linearRegressionTable() {
    const m = rand(3, 12), b = rand(10, 45);
    const xs = [1, 2, 3, 4, 5];
    const ys = xs.map(x => m * x + b);
    return {
      prompt: `The table shows a real-world situation that can be modeled by a linear equation. x: ${xs.join(", ")}; y: ${ys.join(", ")}. Write a linear regression equation for the data.`,
      answer: `y=${m}x+${b}`,
      accepted: [`y=${m}x+${b}`, `${m}x+${b}`],
      steps: ["The data have a constant rate of change, so a linear model fits exactly.", "Use the constant change as the slope.", "Use the starting value from the pattern to write the equation."]
    };
  },
  pointInLinearInequality() {
    const m = rand(-3, 3) || 2, b = rand(-4, 4), x = rand(-4, 5);
    const y = m * x + b - rand(1, 4);
    return {
      prompt: `Is \\((${x},${y})\\) part of the solution set for \\(y<${m}x${signed(b)}\\)? Answer yes or no.`,
      answer: "yes",
      accepted: ["yes", "y"],
      steps: ["Substitute the x- and y-values into the inequality.", "Compare the two sides.", "If the statement is true, the point is in the solution set."]
    };
  },
  inequalityGraphBelowDashed() {
    const m = [-2, -1, 1, 2][rand(0, 3)], b = rand(-3, 3);
    const equation = linearEquationText(m, b);
    return {
      prompt: "Write the linear inequality represented by the shaded region below the dashed line.",
      visual: graphSvg({ m, b, dashed: true, shade: "below" }),
      answer: equation.replace("y=", "y<"),
      displayAnswer: `\\(${equation.replace("y=", "y<")}\\)`,
      accepted: [equation.replace("y=", "y<")],
      steps: ["A dashed boundary means the line is not included.", "Shading below uses less than.", "Write the boundary line, then replace the equals sign with <."]
    };
  },
  inequalityGraphAboveSolid() {
    const m = [-2, -1, 1, 2][rand(0, 3)], b = rand(-3, 3);
    const equation = linearEquationText(m, b);
    return {
      prompt: "Write the linear inequality represented by the shaded region above the solid line.",
      visual: graphSvg({ m, b, dashed: false, shade: "above" }),
      answer: equation.replace("y=", "y>="),
      displayAnswer: `\\(${equation.replace("y=", "y\\ge")}\\)`,
      accepted: [equation.replace("y=", "y>="), equation.replace("y=", "y≥")],
      steps: ["A solid boundary means the line is included.", "Shading above uses greater than.", "Use \\(\\ge\\) because the boundary line is solid."]
    };
  },
  inequalityGraphBelowDashedHorizontal() {
    const y = rand(-4, 4);
    return {
      prompt: "Write the linear inequality represented by the shaded region below the dashed horizontal line.",
      visual: graphSvg({ horizontal: y, dashed: true, shade: "below" }),
      answer: `y<${y}`,
      displayAnswer: `\\(y<${y}\\)`,
      accepted: [`y<${y}`],
      steps: ["A horizontal boundary has equation \\(y=\\text{constant}\\).", "Dashed means the boundary is not included.", "Below the line means use <."]
    };
  },
  inequalityGraphRightSolidVertical() {
    const x = rand(-4, 4);
    return {
      prompt: "Write the linear inequality represented by the shaded region to the right of the solid vertical line.",
      visual: graphSvg({ vertical: x, dashed: false, shade: "right" }),
      answer: `x>=${x}`,
      displayAnswer: `\\(x\\ge${x}\\)`,
      accepted: [`x>=${x}`, `x≥${x}`],
      steps: ["A vertical boundary has equation \\(x=\\text{constant}\\).", "Solid means the boundary is included.", "To the right means x-values greater than the boundary, so use \\(\\ge\\)."]
    };
  },
  linearInequalityGraph() {
    const m = rand(-3, 3) || 2, b = rand(-5, 5), above = Math.random() < 0.5;
    const sign = above ? ">" : "<";
    return {
      prompt: `For \\(y${sign}${m}x${signed(b)}\\), should the graph be shaded above or below the boundary line?`,
      answer: above ? "above" : "below",
      accepted: [above ? "above" : "below"],
      steps: ["Graph the boundary line first.", "Use > or >= to shade above; use < or <= to shade below."]
    };
  },
  exponentialPercent() {
    const start = rand(4, 12), pct = [5, 8, 10, 20][rand(0, 3)], years = rand(3, 7);
    const ans = (start * (1 + pct / 100) ** years).toFixed(2);
    return {
      prompt: `A value starts at ${start} and increases ${pct}% each year. What is it after ${years} years?`,
      answer: `${ans}`,
      accepted: [`${ans}`],
      steps: [`Use ${start}(1.${String(pct).padStart(2, "0")})^${years}.`, "Round as directed by the problem."]
    };
  },
  linearModelTable() {
    const b = rand(20, 100), m = rand(-12, 12) || 5, x = rand(3, 8);
    return {
      prompt: `A table has starting value ${b} and changes by ${m} each time x increases by 1. Write a model and find y when x=${x}.`,
      answer: `y=${m}x+${b}; ${m * x + b}`,
      accepted: [`y=${m}x+${b};${m * x + b}`, `${m}x+${b};${m * x + b}`, `${m * x + b}`],
      steps: ["The constant change is the slope.", "The starting value is the y-intercept.", `Substitute x=${x}.`]
    };
  },
  systems() {
    const x = rand(-4, 5), y = rand(-4, 6);
    return {
      prompt: `Solve the system: \\(x+y=${x + y}\\) and \\(x-y=${x - y}\\).`,
      answer: `(${x}, ${y})`,
      accepted: [`(${x},${y})`, `${x},${y}`, `x=${x},y=${y}`],
      steps: ["Add the equations to eliminate y.", "Solve for x, then substitute back to find y."]
    };
  },
  systemYValue() {
    const x = rand(-4, 5), y = rand(-4, 6);
    const a = rand(2, 5), b = rand(2, 5);
    return {
      prompt: `Find only the y-value of the system: \\(${a}x+${b}y=${a * x + b * y}\\) and \\(x-y=${x - y}\\).`,
      answer: `${y}`,
      accepted: [`${y}`, `y=${y}`],
      steps: ["Use substitution or elimination to solve the system.", "The question asks only for the y-value.", "Report just the y-coordinate of the solution."]
    };
  },
  exponentRules() {
    const a = rand(2, 5), b = rand(2, 5), c = rand(2, 4);
    return {
      prompt: `Simplify \\((x^${a}y^${b})^${c}\\).`,
      answer: `x^${a * c}y^${b * c}`,
      accepted: [`x^${a * c}y^${b * c}`, `x${a * c}y${b * c}`],
      steps: ["Power to a power means multiply exponents.", "Apply the outside exponent to every factor inside parentheses."]
    };
  },
  exponentQuotient() {
    const coefficient = -rand(2, 6);
    const xNum = rand(5, 8), xDen = rand(1, 3);
    const yNum = rand(2, 5), yDen = yNum + rand(1, 3);
    const zNum = rand(1, 4), zDen = zNum + rand(1, 3);
    const xPower = xNum - xDen;
    const yPower = yDen - yNum;
    const zPower = zDen - zNum;
    const answer = `${coefficient}x^${xPower}/(y^${yPower}z^${zPower})`;
    return {
      prompt: `Simplify \\(\\frac{${coefficient * 4}x^${xNum}y^${yNum}z^${zNum}}{4x^${xDen}y^${yDen}z^${zDen}}\\). Write the answer with positive exponents.`,
      answer,
      displayAnswer: `\\(\\frac{${coefficient}x^${xPower}}{y^${yPower}z^${zPower}}\\)`,
      accepted: [answer, `${coefficient}x^${xPower}y^-${yPower}z^-${zPower}`],
      steps: ["Divide the coefficients.", "Subtract exponents for matching bases.", "Move factors with negative exponents to the denominator."]
    };
  },
  radicalWholeNumber() {
    const options = [[72, "6sqrt(2)", "6\\sqrt2"], [75, "5sqrt(3)", "5\\sqrt3"], [98, "7sqrt(2)", "7\\sqrt2"], [108, "6sqrt(3)", "6\\sqrt3"]];
    const [radicand, answer, display] = options[rand(0, options.length - 1)];
    return {
      prompt: `Simplify \\(\\sqrt{${radicand}}\\).`,
      answer,
      displayAnswer: `\\(${display}\\)`,
      accepted: [answer, answer.replace("sqrt", "√"), answer.replace(/[()]/g, "")],
      steps: ["Find the largest perfect-square factor inside the radical.", "Take the square root of that factor out front.", "Leave the remaining whole-number factor inside the radical."]
    };
  },
  radicalSumTwo() {
    const options = [
      ["\\sqrt{48}+\\sqrt{27}", "7sqrt(3)", "7\\sqrt3"],
      ["\\sqrt{50}+\\sqrt{32}", "9sqrt(2)", "9\\sqrt2"],
      ["\\sqrt{75}-\\sqrt{12}", "3sqrt(3)", "3\\sqrt3"]
    ];
    const [prompt, answer, display] = options[rand(0, options.length - 1)];
    return {
      prompt: `Simplify \\(${prompt}\\).`,
      answer,
      displayAnswer: `\\(${display}\\)`,
      accepted: [answer, answer.replace("sqrt", "√"), answer.replace(/[()]/g, "")],
      steps: ["Simplify each radical first.", "Identify like radicals with the same number under the radical.", "Add or subtract the coefficients of the like radicals."]
    };
  },
  radicalSumThree() {
    const options = [
      ["\\sqrt{27}+\\sqrt{12}-\\sqrt{48}", "sqrt(3)", "\\sqrt3"],
      ["\\sqrt{80}-\\sqrt{45}+\\sqrt{20}", "5sqrt(5)", "5\\sqrt5"],
      ["\\sqrt{72}+\\sqrt{18}-\\sqrt{32}", "5sqrt(2)", "5\\sqrt2"]
    ];
    const [prompt, answer, display] = options[rand(0, options.length - 1)];
    return {
      prompt: `Simplify \\(${prompt}\\).`,
      answer,
      displayAnswer: `\\(${display}\\)`,
      accepted: [answer, answer.replace("sqrt", "√"), answer.replace(/[()]/g, "")],
      steps: ["Simplify all three radicals.", "Combine only radicals that have the same radicand.", "Keep the final coefficient and radical together."]
    };
  },
  radicalCoeffTwoTerm() {
    const options = [
      ["7\\sqrt{2}-\\sqrt{18}", "4sqrt(2)", "4\\sqrt2"],
      ["5\\sqrt{3}+2\\sqrt{27}", "11sqrt(3)", "11\\sqrt3"],
      ["9\\sqrt{5}-\\sqrt{45}", "6sqrt(5)", "6\\sqrt5"]
    ];
    const [prompt, answer, display] = options[rand(0, options.length - 1)];
    return {
      prompt: `Simplify \\(${prompt}\\).`,
      answer,
      displayAnswer: `\\(${display}\\)`,
      accepted: [answer, answer.replace("sqrt", "√"), answer.replace(/[()]/g, "")],
      steps: ["Simplify any radical that is not already simplest form.", "Rewrite the expression with like radicals.", "Add or subtract the coefficients."]
    };
  },
  radicalProduct() {
    const options = [
      ["\\sqrt6\\cdot\\sqrt3", "3sqrt(2)", "3\\sqrt2"],
      ["\\sqrt{10}\\cdot\\sqrt{15}", "5sqrt(6)", "5\\sqrt6"],
      ["\\sqrt4\\cdot\\sqrt9", "6", "6"]
    ];
    const [prompt, answer, display] = options[rand(0, options.length - 1)];
    return {
      prompt: `Simplify \\(${prompt}\\).`,
      answer,
      displayAnswer: `\\(${display}\\)`,
      accepted: [answer, answer.replace("sqrt", "√"), answer.replace(/[()]/g, "")],
      steps: ["Multiply the radicands together.", "Simplify the resulting square root.", "If both radicals are perfect squares, multiply their square roots."]
    };
  },
  radicalQuotient() {
    const options = [
      ["\\frac{\\sqrt{48}}{\\sqrt3}", "4", "4"],
      ["\\frac{\\sqrt{75}}{\\sqrt3}", "5", "5"],
      ["\\frac{\\sqrt{98}}{\\sqrt2}", "7", "7"],
      ["\\frac{\\sqrt{180}}{\\sqrt5}", "6", "6"]
    ];
    const [prompt, answer, display] = options[rand(0, options.length - 1)];
    return {
      prompt: `Simplify \\(${prompt}\\).`,
      answer,
      displayAnswer: `\\(${display}\\)`,
      accepted: [answer],
      steps: ["Divide the radicands because both expressions are square roots.", "Simplify the resulting square root.", "Check whether the quotient is a perfect square."]
    };
  },
  subtractTrinomials() {
    const first = [rand(3, 8), rand(-7, 7), rand(-9, 9)];
    const second = [rand(1, 5), rand(-7, 7), rand(-9, 9)];
    const result = first.map((value, index) => value - second[index]);
    const answer = polyText(result);
    return {
      prompt: `Subtract \\((${polyText(first)})-(${polyText(second)})\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer],
      steps: ["Distribute the subtraction sign to every term in the second trinomial.", "Combine like terms by degree.", "Write the result in descending powers."]
    };
  },
  subtractSumOfTrinomials() {
    const total = [rand(12, 20), rand(-8, 8), rand(-8, 8)];
    const parts = Array.from({ length: 4 }, () => [rand(1, 3), rand(-3, 3), rand(-3, 3)]);
    const sum = parts.reduce((acc, part) => acc.map((value, index) => value + part[index]), [0, 0, 0]);
    const result = total.map((value, index) => value - sum[index]);
    const answer = polyText(result);
    return {
      prompt: `Add the four trinomials \\((${parts.map(polyText).join("), (")})\\), then subtract that result from \\(${polyText(total)}\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer],
      steps: ["First add the four trinomials by combining like terms.", "Subtract that sum from the larger trinomial.", "Distribute the subtraction sign before combining final like terms."]
    };
  },
  multiplyBinomials() {
    const a = rand(1, 5), b = rand(-8, 8) || 3, c = rand(1, 5), d = rand(-8, 8) || -2;
    const result = [a * c, a * d + b * c, b * d];
    const answer = polyText(result);
    return {
      prompt: `Multiply \\((${linearFactorText(a, b)})(${linearFactorText(c, d)})\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer],
      steps: ["Multiply first, outer, inner, and last terms.", "Combine the two middle terms.", "Write the product as a trinomial."]
    };
  },
  squaredBinomial() {
    const a = rand(1, 4), b = rand(-7, 7) || 5;
    const result = [a * a, 2 * a * b, b * b];
    const answer = polyText(result);
    return {
      prompt: `Expand \\((${linearFactorText(a, b)})^2\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer],
      steps: ["Rewrite the squared binomial as the binomial multiplied by itself.", "Use FOIL or the square pattern.", "Combine like terms."]
    };
  },
  gcfTrinomial() {
    const g = [2, 3, 5, 6][rand(0, 3)];
    const coefficients = [g * rand(3, 8), g * rand(1, 6), -g];
    return {
      prompt: `Find the greatest common factor of \\(${polyText(coefficients)}\\).`,
      answer: `${g}`,
      accepted: [`${g}`],
      steps: ["Find the largest number that divides all three coefficients.", "Only include a variable if every term contains that variable.", "The GCF is the common factor shared by every term."]
    };
  },
  binomialTimesTrinomial() {
    const a = rand(1, 4), b = rand(-5, 5) || 2;
    const tri = [rand(1, 4), rand(-5, 5), rand(-6, 6)];
    const result = [
      a * tri[0],
      a * tri[1] + b * tri[0],
      a * tri[2] + b * tri[1],
      b * tri[2]
    ];
    const answer = cubicText(result);
    return {
      prompt: `Multiply \\((${linearFactorText(a, b)})(${polyText(tri)})\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer],
      steps: ["Distribute the binomial to every term of the trinomial.", "Multiply each pair of terms.", "Combine like terms and write in descending powers."]
    };
  },
  multiplyTrinomials() {
    const first = [rand(1, 3), rand(-4, 4), rand(-3, 3)];
    const second = [rand(1, 3), rand(-4, 4), rand(-3, 3)];
    const result = multiplyPoly(first, second);
    const answer = quarticText(result);
    return {
      prompt: `Multiply \\((${polyText(first)})(${polyText(second)})\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer],
      steps: ["Multiply each term in the first trinomial by each term in the second trinomial.", "Group like powers of x.", "Combine like terms carefully."]
    };
  },
  gcfBinomial() {
    const g = [2, 3, 5, 6, 10][rand(0, 4)];
    const xPower = rand(1, 3);
    const a = g * rand(2, 6), b = g * rand(1, 6);
    const answer = `${g}x${xPower === 1 ? "" : `^${xPower}`}`;
    return {
      prompt: `Find the greatest common factor of \\(${a}x^${xPower + 1}+${b}x^${xPower}\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer],
      steps: ["Find the greatest common factor of the coefficients.", "Use the lowest power of x that appears in every term.", "Multiply those common pieces together."]
    };
  },
  diffSquaresSimple() {
    const n = rand(3, 12);
    const answer = `(x-${n})(x+${n})`;
    return {
      prompt: `Factor \\(x^2-${n * n}\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer, `(x+${n})(x-${n})`],
      steps: ["Recognize a difference of squares.", `Rewrite ${n * n} as \\(${n}^2\\).`, "Use \\(a^2-b^2=(a-b)(a+b)\\)."]
    };
  },
  diffSquaresCoefficient() {
    const n = [3, 5, 7, 9][rand(0, 3)];
    const answer = `(2x-${n})(2x+${n})`;
    return {
      prompt: `Factor \\(4x^2-${n * n}\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer, `(2x+${n})(2x-${n})`],
      steps: ["Recognize both terms as perfect squares.", `Rewrite as \\((2x)^2-${n}^2\\).`, "Use the difference-of-squares pattern."]
    };
  },
  cubicGrouping() {
    const a = rand(1, 4), b = rand(1, 5), c = rand(-5, 5) || -3;
    const quadraticFactor = `${a === 1 ? "" : a}x^2${signed(b)}`;
    const answer = `(${quadraticFactor})(${linearFactorText(1, c)})`;
    return {
      prompt: `Factor by grouping: \\(${cubicText([a, a * c, b, b * c])}\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer, `(${linearFactorText(1, c)})(${quadraticFactor})`],
      steps: ["Group the first two terms and the last two terms.", "Factor the GCF from each group.", "Factor out the common binomial factor."]
    };
  },
  factorTrinomialA1() {
    const r = rand(2, 9), s = -rand(2, 9);
    const answer = `(x${signed(r)})(x${signed(s)})`;
    return {
      prompt: `Factor \\(${polyText([1, r + s, r * s])}\\).`,
      answer,
      displayAnswer: `\\(${answer}\\)`,
      accepted: [answer, `(x${signed(s)})(x${signed(r)})`],
      steps: ["Find two numbers that multiply to the constant term.", "Those same two numbers must add to the middle coefficient.", "Write the two binomial factors."]
    };
  },
  polynomialOperations() {
    const a = rand(2, 6), b = rand(-8, 8);
    return {
      prompt: `Expand \\((x${signed(a)})(x${signed(b)})\\).`,
      answer: `x^2${signed(a + b)}x${signed(a * b)}`,
      accepted: [`x^2${signed(a + b)}x${signed(a * b)}`],
      steps: ["Use FOIL.", "Combine the middle terms."]
    };
  },
  quadraticFeatures() {
    const h = rand(-5, 5), k = rand(-6, 6);
    return {
      prompt: `Find the vertex of \\(y=(x${signed(-h)})^2${signed(k)}\\).`,
      answer: `(${h}, ${k})`,
      accepted: [`(${h},${k})`, `${h},${k}`],
      steps: ["Vertex form is \\(y=(x-h)^2+k\\).", "The vertex is \\((h,k)\\)."]
    };
  },
  quadraticMinimumAx2C() {
    const a = rand(1, 5), c = rand(-8, 8);
    return {
      prompt: `Find the minimum point of \\(y=${a}x^2${signed(c)}\\).`,
      answer: `(0, ${c})`,
      accepted: [`(0,${c})`, `0,${c}`],
      steps: ["There is no bx term, so the axis of symmetry is x = 0.", "Substitute x = 0 into the function.", "Because a is positive, the vertex is the minimum point."]
    };
  },
  quadraticSolving() {
    const r = rand(2, 8), s = rand(-8, -2);
    return {
      prompt: `Solve \\(x^2${signed(-(r + s))}x${signed(r * s)}=0\\).`,
      answer: `x=${r} or x=${s}`,
      accepted: [`x=${r}orx=${s}`, `x=${s}orx=${r}`, `${r},${s}`, `${s},${r}`],
      steps: ["Factor the quadratic.", "Set each factor equal to zero."]
    };
  },
  solveAx2EqualsBx() {
    const a = rand(2, 6), root = rand(2, 8);
    const b = a * root;
    return {
      prompt: `Solve for x: \\(${a}x^2=${b}x\\).`,
      answer: `x=0 or x=${root}`,
      accepted: [`x=0orx=${root}`, `x=${root}orx=0`, `0,${root}`, `${root},0`],
      steps: ["Move all terms to one side.", "Factor out the common x.", "Set each factor equal to zero."]
    };
  },
  solveX2BxEqualsC() {
    const r = rand(2, 8), s = -rand(2, 8);
    const b = -(r + s);
    const c = -r * s;
    return {
      prompt: `Solve for x by factoring: \\(x^2${signed(b)}x=${c}\\).`,
      answer: `x=${r} or x=${s}`,
      accepted: [`x=${r}orx=${s}`, `x=${s}orx=${r}`, `${r},${s}`, `${s},${r}`],
      steps: ["Move the constant to the left side so the equation equals zero.", "Factor the trinomial.", "Set each factor equal to zero."]
    };
  },
  solveX2MinusC() {
    const root = rand(3, 12);
    return {
      prompt: `Solve for x by factoring: \\(x^2-${root * root}=0\\).`,
      answer: `x=${root} or x=-${root}`,
      accepted: [`x=${root}orx=-${root}`, `x=-${root}orx=${root}`, `${root},-${root}`, `-${root},${root}`],
      steps: ["Recognize a difference of squares.", "Factor into conjugate binomials.", "Set each factor equal to zero."]
    };
  },
  solveAx2EqualsC() {
    const a = [2, 3, 5][rand(0, 2)];
    const root = rand(2, 7);
    const c = a * root * root;
    return {
      prompt: `Solve for x: \\(${a}x^2=${c}\\).`,
      answer: `x=${root} or x=-${root}`,
      accepted: [`x=${root}orx=-${root}`, `x=-${root}orx=${root}`, `${root},-${root}`, `-${root},${root}`],
      steps: [`Divide both sides by ${a}.`, "Take both square roots.", "Remember to include the positive and negative solution."]
    };
  },
  solveVertexRational() {
    const a = [2, 3, 4][rand(0, 2)], h = rand(-4, 4), rootDistance = rand(1, 4);
    const k = -a * rootDistance * rootDistance;
    const left = h - rootDistance, right = h + rootDistance;
    return {
      prompt: `Solve for x: \\(${a}(x${signed(-h)})^2${signed(k)}=0\\).`,
      answer: `x=${left} or x=${right}`,
      accepted: [`x=${left}orx=${right}`, `x=${right}orx=${left}`, `${left},${right}`, `${right},${left}`],
      steps: ["Move the constant term to the other side.", "Divide by the coefficient of the squared expression.", "Take both square roots and solve for x."]
    };
  },
  solveVertexIrrational() {
    const a = [2, 3, 5][rand(0, 2)], h = rand(-4, 4), radicand = [2, 3, 5, 6, 7][rand(0, 4)];
    const k = -a * radicand;
    const answer = `x=${h}+sqrt(${radicand}) or x=${h}-sqrt(${radicand})`;
    return {
      prompt: `Solve for x: \\(${a}(x${signed(-h)})^2${signed(k)}=0\\).`,
      answer,
      displayAnswer: `\\(x=${h}\\pm\\sqrt{${radicand}}\\)`,
      accepted: [answer, `x=${h}±sqrt(${radicand})`, `${h}+sqrt(${radicand}),${h}-sqrt(${radicand})`],
      steps: ["Move the constant term to the other side.", "Divide by the coefficient of the squared expression.", "Take both square roots; the result is irrational."]
    };
  },
  minMaxStatement() {
    const a = rand(1, 5) * (Math.random() < 0.5 ? 1 : -1);
    const b = rand(-8, 8);
    const c = rand(1, 9);
    const answer = a > 0 ? "minimum" : "maximum";
    return {
      prompt: `Complete the statement: \\(y=${a}x^2${signed(b)}x-${c}\\) will have a ________.`,
      answer,
      accepted: [answer],
      steps: ["Look at the sign of the leading coefficient a.", "If a is positive, the parabola opens upward and has a minimum.", "If a is negative, the parabola opens downward and has a maximum."]
    };
  },
  axisSymmetry() {
    const a = rand(1, 5), axis = rand(-4, 5), b = -2 * a * axis, c = rand(1, 9);
    return {
      prompt: `Find the equation of the axis of symmetry for \\(y=${a}x^2${signed(b)}x-${c}\\).`,
      answer: `x=${axis}`,
      accepted: [`x=${axis}`, `${axis}`],
      steps: ["Use \\(x=-\\frac{b}{2a}\\).", "Substitute the a- and b-values from the quadratic.", "The axis of symmetry is a vertical line, so write x = number."]
    };
  },
  vertexStandard() {
    const a = rand(1, 4), h = rand(-4, 4);
    const k = -rand(a * h * h + 1, a * h * h + 9);
    const b = -2 * a * h;
    const constant = a * h * h + k;
    return {
      prompt: `Find the vertex of \\(y=${polyText([a, b, constant])}\\).`,
      answer: `(${h}, ${k})`,
      accepted: [`(${h},${k})`, `${h},${k}`],
      steps: ["Find the axis of symmetry with \\(x=-\\frac{b}{2a}\\).", "Substitute that x-value into the function.", "Write the vertex as an ordered pair."]
    };
  },
  exponentialModel() {
    const start = rand(2, 9), base = rand(2, 4), t = rand(2, 5);
    return {
      prompt: `A population follows \\(y=${start}(${base})^t\\). Find y when t=${t}.`,
      answer: `${start * base ** t}`,
      accepted: [`${start * base ** t}`],
      steps: ["Evaluate the exponent first.", "Multiply by the starting value."]
    };
  },
  exponentialFromTable() {
    const a = rand(2, 8), b = [2, 3, 4][rand(0, 2)];
    const xs = [0, 1, 2, 3];
    const ys = xs.map(x => a * b ** x);
    return {
      prompt: `Write an exponential equation of the form \\(y=a(b)^x\\) from the table. x: ${xs.join(", ")}; y: ${ys.join(", ")}.`,
      answer: `y=${a}(${b})^x`,
      displayAnswer: `\\(y=${a}(${b})^x\\)`,
      accepted: [`y=${a}(${b})^x`, `y=${a}*${b}^x`, `${a}(${b})^x`],
      steps: ["The value when x = 0 is a.", "The common multiplier from one y-value to the next is b.", "Write the equation in the form \\(y=a(b)^x\\)."]
    };
  },
  depreciationValue() {
    const start = [12000, 18000, 24000, 30000][rand(0, 3)];
    const rate = [10, 15, 20, 25][rand(0, 3)];
    const years = rand(3, 7);
    const value = Math.round(start * (1 - rate / 100) ** years);
    return {
      prompt: `A car is worth $${start.toLocaleString()} and depreciates by ${rate}% each year. What is it worth after ${years} years? Round to the nearest dollar.`,
      answer: `$${value.toLocaleString()}`,
      accepted: [`$${value.toLocaleString()}`, `${value}`],
      steps: [`Depreciating by ${rate}% means the car keeps ${100 - rate}% each year.`, `Use \\(${start}(1-${rate / 100})^${years}\\).`, "Round the result to the nearest dollar."]
    };
  },
  functionIdentification() {
    return {
      prompt: "A relation contains (2, 5), (2, 7), and (4, 9). Is it a function?",
      answer: "no",
      accepted: ["no", "notafunction"],
      steps: ["A function cannot assign one input to two different outputs.", "The input 2 appears twice with different outputs."]
    };
  },
  linearRepresentations() {
    const m = rand(-5, 5) || -2, b = rand(-6, 6), x = rand(-4, 5);
    return {
      prompt: `Does the point \\(${`(${x},${m * x + b})`}\\) lie on \\(y=${m}x${signed(b)}\\)?`,
      answer: "yes",
      accepted: ["yes", "y"],
      steps: ["Substitute the x-value into the equation.", "If the result equals the y-value, the point is on the line."]
    };
  },
  growthModel() {
    return {
      prompt: "A savings account increases by $5 each week. Is this linear or exponential growth?",
      answer: "linear",
      accepted: ["linear"],
      steps: ["Adding the same amount each time is linear.", "Multiplying by the same factor or percent each time is exponential."]
    };
  }
};
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function graphSvg({ m = null, b = 0, vertical = null, horizontal = null, dashed = false, shade = null }) {
  const size = 240;
  const pad = 22;
  const scale = (size - pad * 2) / 12;
  const xToPx = (x) => pad + (x + 6) * scale;
  const yToPx = (y) => pad + (6 - y) * scale;
  const lineStyle = dashed ? 'stroke-dasharray="7 5"' : "";
  const grid = Array.from({ length: 13 }, (_, i) => i - 6).map(v => `
    <line x1="${xToPx(v)}" y1="${pad}" x2="${xToPx(v)}" y2="${size - pad}" class="grid-line"></line>
    <line x1="${pad}" y1="${yToPx(v)}" x2="${size - pad}" y2="${yToPx(v)}" class="grid-line"></line>
  `).join("");
  let boundary = "";
  let shading = "";
  if (vertical !== null) {
    const x = xToPx(vertical);
    boundary = `<line x1="${x}" y1="${pad}" x2="${x}" y2="${size - pad}" class="boundary-line" ${lineStyle}></line>`;
    if (shade === "right") shading = `<rect x="${x}" y="${pad}" width="${size - pad - x}" height="${size - pad * 2}" class="shade-region"></rect>`;
  } else if (horizontal !== null) {
    const y = yToPx(horizontal);
    boundary = `<line x1="${pad}" y1="${y}" x2="${size - pad}" y2="${y}" class="boundary-line" ${lineStyle}></line>`;
    if (shade === "below") shading = `<rect x="${pad}" y="${y}" width="${size - pad * 2}" height="${size - pad - y}" class="shade-region"></rect>`;
    if (shade === "above") shading = `<rect x="${pad}" y="${pad}" width="${size - pad * 2}" height="${y - pad}" class="shade-region"></rect>`;
  } else {
    const x1 = -6, x2 = 6, y1 = m * x1 + b, y2 = m * x2 + b;
    const p1 = `${xToPx(x1)},${yToPx(y1)}`;
    const p2 = `${xToPx(x2)},${yToPx(y2)}`;
    boundary = `<line x1="${xToPx(x1)}" y1="${yToPx(y1)}" x2="${xToPx(x2)}" y2="${yToPx(y2)}" class="boundary-line" ${lineStyle}></line>`;
    if (shade === "below") shading = `<polygon points="${p1} ${p2} ${xToPx(6)},${yToPx(-6)} ${xToPx(-6)},${yToPx(-6)}" class="shade-region"></polygon>`;
    if (shade === "above") shading = `<polygon points="${p1} ${p2} ${xToPx(6)},${yToPx(6)} ${xToPx(-6)},${yToPx(6)}" class="shade-region"></polygon>`;
  }
  return `
    <svg class="practice-graph" viewBox="0 0 ${size} ${size}" role="img" aria-label="Coordinate plane graph">
      <defs><clipPath id="graph-clip"><rect x="${pad}" y="${pad}" width="${size - pad * 2}" height="${size - pad * 2}"></rect></clipPath></defs>
      <rect x="${pad}" y="${pad}" width="${size - pad * 2}" height="${size - pad * 2}" class="graph-bg"></rect>
      ${grid}
      <line x1="${pad}" y1="${yToPx(0)}" x2="${size - pad}" y2="${yToPx(0)}" class="axis-line"></line>
      <line x1="${xToPx(0)}" y1="${pad}" x2="${xToPx(0)}" y2="${size - pad}" class="axis-line"></line>
      <g clip-path="url(#graph-clip)">${shading}${boundary}</g>
      <text x="${size - 16}" y="${yToPx(0) - 5}" class="axis-label">x</text>
      <text x="${xToPx(0) + 5}" y="${pad + 12}" class="axis-label">y</text>
    </svg>
  `;
}

function renderPractice(problem) {
  const generator = practice[problem.practiceType] || practice[problem.topic] || practice.functionEvaluation;
  const item = generator();
  const box = $("practiceBox");
  box.classList.remove("hidden");
  box.innerHTML = `
    <h3>Similar Practice: ${PRACTICE_LABELS[problem.practiceType] || TOPICS[problem.topic]}</h3>
    <p class="practice-prompt">${item.prompt}</p>
    ${item.visual || ""}
    <div class="answer-line">
      <input id="practiceInput" placeholder="Type your answer">
      <button class="primary" id="checkPractice">Check</button>
    </div>
    <p class="practice-feedback" id="practiceFeedback"></p>
    <div class="action-row">
      <button class="soft" id="showPracticeAnswer">Show Answer</button>
      <button class="ghost" id="newPractice">New Similar Problem</button>
    </div>
    <div class="steps-box hidden" id="practiceSteps">
      <p class="answer-text">Answer: ${item.displayAnswer || escapeHtml(item.answer)}</p>
      <ol class="step-list">${item.steps.map(step => `<li>${step}</li>`).join("")}</ol>
    </div>
  `;
  $("checkPractice").addEventListener("click", () => {
    const attempt = cleanAnswer($("practiceInput").value);
    const ok = item.accepted.map(cleanAnswer).includes(attempt);
    $("practiceFeedback").textContent = ok ? "Correct. Your answer matches this practice problem." : "Not yet. Check signs, exponents, and formatting, then try again.";
    $("practiceFeedback").className = `practice-feedback ${ok ? "ok" : "no"}`;
  });
  $("showPracticeAnswer").addEventListener("click", () => $("practiceSteps").classList.remove("hidden"));
  $("newPractice").addEventListener("click", () => renderPractice(problem));
  if (window.MathJax?.typesetPromise) MathJax.typesetPromise([box]);
}

function powerText(base, exponent) {
  if (exponent === 0) return "";
  if (exponent === 1) return base;
  return `${base}^${exponent}`;
}

function formatNumber(n) {
  if (Number.isInteger(n)) return `${n}`;
  const abs = Math.abs(n);
  const denominators = [2, 3, 4, 5];
  for (const d of denominators) {
    const numerator = abs * d;
    if (Math.abs(numerator - Math.round(numerator)) < 1e-9) {
      const sign = n < 0 ? "-" : "";
      return `${sign}\\frac{${Math.round(numerator)}}{${d}}`;
    }
  }
  return `${Number(n.toFixed(2))}`;
}

function signedNumber(n) {
  if (n < 0) return `-${formatNumber(Math.abs(n))}`;
  return `+${formatNumber(n)}`;
}

function linearEquationText(m, b) {
  if (b === 0) return `y=${formatNumber(m)}x`;
  return `y=${formatNumber(m)}x${signedNumber(b)}`;
}

function termText(coefficient, variablePart, isFirst = false) {
  if (coefficient === 0) return "";
  const sign = coefficient < 0 ? "-" : (isFirst ? "" : "+");
  const abs = Math.abs(coefficient);
  const number = variablePart && abs === 1 ? "" : `${abs}`;
  return `${sign}${number}${variablePart}`;
}

function polyText([a, b, c]) {
  const terms = [
    termText(a, "x^2", true),
    termText(b, "x"),
    termText(c, "")
  ].filter(Boolean);
  return terms.join("") || "0";
}

function linearFactorText(a, b) {
  return `${a === 1 ? "" : a}x${signed(b)}`;
}

function cubicText([a, b, c, d]) {
  const terms = [
    termText(a, "x^3", true),
    termText(b, "x^2"),
    termText(c, "x"),
    termText(d, "")
  ].filter(Boolean);
  return terms.join("") || "0";
}

function quarticText([a, b, c, d, e]) {
  const terms = [
    termText(a, "x^4", true),
    termText(b, "x^3"),
    termText(c, "x^2"),
    termText(d, "x"),
    termText(e, "")
  ].filter(Boolean);
  return terms.join("") || "0";
}

function multiplyPoly(first, second) {
  const result = Array(first.length + second.length - 1).fill(0);
  first.forEach((a, i) => {
    second.forEach((b, j) => {
      result[i + j] += a * b;
    });
  });
  return result;
}

function signed(n) {
  return n < 0 ? `${n}` : `+${n}`;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("click", (event) => {
  const problemButton = event.target.closest("[data-problem]");
  if (problemButton) {
    renderDetail(Number(problemButton.dataset.problem));
    return;
  }

  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) {
    state.topic = topicButton.dataset.topic;
    renderFilters();
    renderDashboard();
    return;
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    state.view = viewButton.dataset.view;
    document.querySelectorAll("[data-view]").forEach(btn => btn.classList.toggle("active", btn === viewButton));
    renderDashboard();
    return;
  }

  if (event.target.id === "showAnswer") {
    $("answerText").classList.remove("hidden");
    $("showAnswer").classList.add("hidden");
    $("showSteps").classList.remove("hidden");
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([$("detailPanel")]);
  }

  if (event.target.id === "showSteps") {
    $("stepsBox").classList.remove("hidden");
    $("showSteps").classList.add("hidden");
  }

  if (event.target.id === "markChecked" && state.selected) {
    if (!state.checked.includes(state.selected)) state.checked.push(state.selected);
    saveProgress();
    renderDashboard();
  }

  if (event.target.id === "startPractice" && state.selected) {
    const problem = PROBLEMS.find(p => p.n === state.selected);
    renderPractice(problem);
  }

  if (event.target.id === "showPacket") {
    $("packetBox").classList.toggle("hidden");
  }

  if (event.target.id === "resetProgress") {
    state.checked = [];
    saveProgress();
    renderDashboard();
  }
});

$("searchBox").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderDashboard();
});

renderFilters();
renderDashboard();
