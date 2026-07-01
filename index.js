function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Authorization Bypass vulnerability
const docId = req.query.id;
// Missing ownership or role check, direct ID object reference (IDOR)
const document = db.getDocument(docId);
res.json(document);
