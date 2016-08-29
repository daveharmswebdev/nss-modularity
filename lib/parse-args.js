'use strict'

module.exports = function(args) {
	if (args.length === 1) {
		return { count: 1, sides: args[0] }
	} else {
		return { count: args[0], sides: args[1] }
	}
}