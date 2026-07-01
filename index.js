function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Arbitrary File Read vulnerability
const filePath = req.query.path;
res.sendFile(filePath);
