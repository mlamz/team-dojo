var fs = require('fs')
,	stubJson;

stubJson = {"Network":{"Programmer":[{"name":"Bill","Recommendations":{"Recommendation":["Jason","Jill","Nick","Stu"]},"Skills":{"Skill":["Ruby","Perl","PHP"]}},{"name":"Dave","Recommendations":{"Recommendation":"Jill"},"Skills":{"Skill":["Java","C#"]}},{"name":"Ed","Recommendations":{"Recommendation":["Liz","Rick"]},"Skills":{"Skill":["C++","Python"]}},{"name":"Frank","Recommendations":{"Recommendation":"Nick"},"Skills":{"Skill":["Perl","Ruby","C++"]}},{"name":"Jason","Recommendations":{"Recommendation":["Dave","Liz"]},"Skills":{"Skill":["Java","Ruby"]}},{"name":"Jill","Recommendations":{"Recommendation":"Nick"},"Skills":{"Skill":["C++","Ruby"]}},{"name":"Liz","Recommendations":{"Recommendation":"Bill"},"Skills":{"Skill":["C#","C++","Java"]}},{"name":"Nick","Recommendations":{"Recommendation":"Stu"},"Skills":{"Skill":["C#","Java"]}},{"name":"Rick","Recommendations":{"Recommendation":"Ed"},"Skills":{"Skill":["Java","PHP"]}},{"name":"Stu","Recommendations":{"Recommendation":"Frank"},"Skills":{"Skill":["C++","Perl"]}}]}};

function maybeArrayToString(input) {
	if(input.join) return input.join(", ");
	else return input;
}

function display(){
	var output = "Programmers\tSkills\tRecommends"
	,	programmerCount = stubJson.Network.Programmer.length
	,	i
	,	programmer;
	
	for(i = 0; i < programmerCount; i = i + 1){
		programmer = stubJson.Network.Programmer[i];
		output += "\n" + programmer.name + "\t" + maybeArrayToString(programmer.Skills.Skill) + "\t" + maybeArrayToString(programmer.Recommendations.Recommendation);
	}
		
	return output;
}  

console.log(display());

module.exports = {
  display: display
}