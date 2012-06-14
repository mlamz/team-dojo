var fs = require('fs')
,	stubJson;

stubJson = {"Network":{"Programmer":[{"name":"Bill","Recommendations":{"Recommendation":["Jason","Jill","Nick","Stu"]},"Skills":{"Skill":["Ruby","Perl","PHP"]}},{"name":"Dave","Recommendations":{"Recommendation":"Jill"},"Skills":{"Skill":["Java","C#"]}},{"name":"Ed","Recommendations":{"Recommendation":["Liz","Rick"]},"Skills":{"Skill":["C++","Python"]}},{"name":"Frank","Recommendations":{"Recommendation":"Nick"},"Skills":{"Skill":["Perl","Ruby","C++"]}},{"name":"Jason","Recommendations":{"Recommendation":["Dave","Liz"]},"Skills":{"Skill":["Java","Ruby"]}},{"name":"Jill","Recommendations":{"Recommendation":"Nick"},"Skills":{"Skill":["C++","Ruby"]}},{"name":"Liz","Recommendations":{"Recommendation":"Bill"},"Skills":{"Skill":["C#","C++","Java"]}},{"name":"Nick","Recommendations":{"Recommendation":"Stu"},"Skills":{"Skill":["C#","Java"]}},{"name":"Rick","Recommendations":{"Recommendation":"Ed"},"Skills":{"Skill":["Java","PHP"]}},{"name":"Stu","Recommendations":{"Recommendation":"Frank"},"Skills":{"Skill":["C++","Perl"]}}]}};

function display(){
	var output = "Programmers\tSkills\tRecommends\n"
	,	programmer = stubJson.Network.Programmer[0];
	
	output += programmer.name + "\t" + programmer.Skills.Skill.join(", ") + "\t" + programmer.Recommendations.Recommendation.join(", ");
	
	return output;
}  

console.log(display());

module.exports = {
  display: display
}