'use strict'

const { randomInt } = require('./math')

let dice = {}

dice.roll = (diceNotation) => {
	const [count,sides] = diceNotation.split('d').map( num => +num )
	return Array(count).fill(1)
		.map(() => randomInt(sides, 1))
		.reduce((a,b) => a+b)
}

dice.toDiceNotation = ({count,sides}) => `${count}d${sides}`


module.exports = dice