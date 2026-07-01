function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected XPath Injection vulnerability
const search = req.query.search;
const xpath = require('xpath');
const doc = new Dom().parseFromString(xml);
const nodes = xpath.select("//user[username/text()='" + search + "']", doc);
