// intended to be run in node-qunit only, not in the browser

QUnit.module("volo test");

// figure out default options for node-qunit

var v = require('volo');

test('executing "volo test" runs qunit on test/template-infrastructure.js', 
  function() {
    ok(v.test(), "v.test() executed without exploding");
});


//TD setting voloTestCommand to something else executes that

//TD any flags passed to volo test get appended to the test command

//TD stdout & stderr are passed through

//TD test command exit of 0 causes volo exit of 0

//TD test command non-zero exit code causes volo to complain and exit with
//   same status
