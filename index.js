function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Template Injection vulnerability
const ejs = require('ejs');
const template = 'Hello <%= name %>';
const rendered = ejs.render(template, { name: req.query.name });
