function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected XSS vulnerability
const name = req.query.name;
res.send("<h1>Hello " + name + "</h1>");
