it('should only test in the correct environment', function() {
  if (/* check test environment */) {
    // make assertions
  } else {
    this.skip();
  }
});