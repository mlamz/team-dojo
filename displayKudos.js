var	kudos = require("./kudos")
,	readData = require('./readData')

,	displayKudos = function () {
		var json = readData.readData()
		,	output = "Programmer\tKudos"
		,	programmerCount = json.Network.Programmer.length
		,	i
		,	programmer
		,	rankedProgrammers = [];
	
		for(i = 0; i < programmerCount; i = i + 1){
			programmer = json.Network.Programmer[i];
			rankedProgrammers.push({name: programmer.name, kudos: kudos.calculate()});

		}
		
		rankedProgrammers = rankedProgrammers.sort(function (a, b) {
			return b.kudos - a.kudos;
		});
		
		for(i = 0; i < programmerCount; i = i + 1){
			programmer = rankedProgrammers[i];
			output += "\n" + programmer.name + "\t" + programmer.kudos;
		}
		
		return output;
	};

console.log(displayKudos());

module.exports = {
	displayKudos: displayKudos 
}

