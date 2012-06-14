var json
,	readData = require('./readData');

json = readData.readData();

function maybeArrayToString(input) {
	if(input.join) return input.join(", ");
	else return input;
}

function display(){
	var output = "Programmers\tSkills\tRecommends"
	,	programmerCount = json.Network.Programmer.length
	,	i
	,	programmer;
	
	for(i = 0; i < programmerCount; i = i + 1){
		programmer = json.Network.Programmer[i];
		output += "\n" + programmer.name + "\t" + maybeArrayToString(programmer.Skills.Skill) + "\t" + maybeArrayToString(programmer.Recommendations.Recommendation);
	}
		
	return output;
}  

console.log(display());

module.exports = {
  display: display
}