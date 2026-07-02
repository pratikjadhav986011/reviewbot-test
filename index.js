// Injected SQL Injection vulnerability
const userId = req.query.id;
const query = "SELECT * FROM users WHERE id = '" + userId + "'";
db.query(query, (err, results) => {
  if (err) return res.status(500).json({ error: err.message });
  res.json(results);
});
