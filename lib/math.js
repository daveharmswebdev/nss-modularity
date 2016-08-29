'use strict'

let math = {}

math.randomInt = (upper, lower) => {
	return Math.floor(Math.random() * upper) + lower
}

module.exports = math