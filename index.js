function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Dangerous eval() vulnerability
const expression = req.query.expr;
const result = eval(expression);
res.json({ result });
