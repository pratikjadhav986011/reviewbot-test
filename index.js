function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Hardcoded Secret vulnerability
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE";
const conn = new AWS.Connection({ secret: AWS_SECRET_KEY });
