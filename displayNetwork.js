var fs = require('fs')
,	xml2json = require('./xml2json');

function display(){
  	return "Programmers\tSkills\tRecommends\n"; 
}
  
console.log(display());

var file = fs.readFile("ProNet.xml", 'utf8', function(err, data){
//	console.log(data);
	console.log(xml2json.parser(data));

});


module.exports = {
  display: display
}