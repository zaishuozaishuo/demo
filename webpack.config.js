var path = require('path');

module.exports = {
	entry: {
		abc : path.join(__dirname,'1.js')
	},
	output: {
    	filename: 'bundle.js',
  	}
}