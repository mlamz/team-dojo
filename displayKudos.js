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
		
		rankedProgrammers = rankedProgrammers.sort(function (programmer) {
			return programmer.kudos;
		});
		
		for(i = 0; i < programmerCount; i = i + 1){
			programmer = rankedProgrammers[i];
			output += "\n" + programmer.name + "\t" + kudos.calculate();
		}
		
		return output;
	};

console.log(displayKudos());

module.exports = {
	displayKudos: displayKudos 
}

