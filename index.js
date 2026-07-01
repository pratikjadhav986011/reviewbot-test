function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected SSRF vulnerability
const targetUrl = req.query.url;
const axios = require('axios');
axios.get(targetUrl).then(response => {
  res.send(response.data);
});
