function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Open Redirect vulnerability
const redirectUrl = req.query.url;
res.redirect(redirectUrl);
