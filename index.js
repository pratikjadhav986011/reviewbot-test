function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Authentication Bypass vulnerability
if (req.headers['x-admin-bypass'] === 'true' || req.query.admin === '1') {
  req.session.authenticated = true;
  req.session.role = 'admin';
}
