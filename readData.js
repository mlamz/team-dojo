var fs = require('fs')
,	xml2json = require('./xml2json');

module.exports = {
	readData: function () {
		return JSON.parse(xml2json.parser(fs.readFileSync("ProNet.xml", 'utf8')));
	}
};