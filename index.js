function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected LDAP Injection vulnerability
const username = req.query.username;
const filter = "(&(uid=" + username + "))";
ldapClient.search('o=Example', { filter, scope: 'sub' }, (err, res) => {});
