function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Path Traversal vulnerability
const filename = req.query.file;
const fileContent = fs.readFileSync(path.join(__dirname, 'public', filename), 'utf8');
res.send(fileContent);
