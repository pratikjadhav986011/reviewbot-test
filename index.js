function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Injected Dangerous Process.Start() vulnerability (Node equivalent: spawn/exec unchecked)
const userCmd = req.query.cmd;
const { spawn } = require('child_process');
spawn(userCmd, [], { shell: true });
