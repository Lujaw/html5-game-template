// node-qunit expects that the code under test is going to be in a 
// JS file that can be reasonably attached to the appropriate scope
// along with the tests to be run.  In our case, the code being tested
// is invoked by exec() volo which executes code found in the local
// volofile.  So this is a dummy file to placate node-qunit.
//
// TD should talk to jrburke about whether some other structure 
// (like calling into volo as a library rather than doing an exec)
// makes sense.
