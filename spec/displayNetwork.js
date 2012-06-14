var should = require('chai').should()
,	displayNetwork = require("../displayNetwork");

describe("when I call display", function () {
  var output = displayNetwork.display();
  it("should show me a three column display", function () {
    output.should.equal("Programmers");
  });
});