it('should only test in the correct environment', function() {
  if (/* check test environment */) {
    // make assertions
  } else {
    // do nothing
  }
});
// 这样的用例如果走到了do
// nothing逻辑，在报告中会被标记为pass。比较推荐的做法是，在before钩子函数中检查测试需要的上下文环境，不具备则跳过。

before(function() {
  if (/* check test environment */) {
    // setup code
  } else {
    this.skip();
  }
});