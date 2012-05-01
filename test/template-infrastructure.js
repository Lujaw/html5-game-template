// intended to be run in node-qunit only, not in the browser

QUnit.module("volo test");

// figure out default options for node-qunit

// TD running "volo test" executes qunit by default
test('test that setting voloTestCommand to ', function() {
  ok(dummyFunction);
});

//TD setting voloTestCommand to something else executes that

//TD any flags passed to volo test get appended to the test command

//TD stdout & stderr are passed through

//TD test command exit of 0 causes volo exit of 0

//TD test command non-zero exit code causes volo to complain and exit with
//   same status
