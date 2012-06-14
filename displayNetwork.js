var fs = require('fs');

function display(){
  	
	var fileContents = fs.readFileSync("ProNet.xml", 'utf8');
  	return "Programmers\tSkills\tRecommends";
}
  
console.log(display());



module.exports = {
  display: display
}