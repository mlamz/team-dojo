var fs = require('fs')
,	xml2json = require('./xml2json')
,	json;

json = JSON.parse(xml2json.parser(fs.readFileSync("ProNet.xml", 'utf8')));

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

function readXml(){
	
	return callback((file));
}


console.log(display());

module.exports = {
  display: display
}