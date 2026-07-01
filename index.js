function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Command Injection vulnerability
const host = req.query.host;
const { exec } = require('child_process');
exec("ping -c 1 " + host, (err, stdout, stderr) => {
  res.send(stdout);
});
