var should = require('chai').should()
,	displayNetwork = require("../displayNetwork");

describe("when I call display", function () {
  var output = displayNetwork.display();
  it("should show me a three column display", function () {
    output.indexOf("Programmers\tSkills\tRecommends").should.equal(0);
  });
  
  it("should show the correct data for the first programmer", function () {
    var firstProgrammer = output.split("\n")[1];
    
    firstProgrammer.should.equal("Bill\tRuby, Perl, PHP\tJason, Jill, Nick, Stu");
  });
  
  it("should show the correct number of programmers", function () {
  	var programmerCount = output.split("\n").length - 1;
  	
  	programmerCount.should.equal(10);
  });
});