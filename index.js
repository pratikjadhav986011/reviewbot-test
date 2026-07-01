function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected XXE vulnerability
const libxmljs = require("libxmljs");
const xml = req.body.xml;
const xmlDoc = libxmljs.parseXml(xml, { noent: true, dtdload: true });
res.send(xmlDoc.toString());
