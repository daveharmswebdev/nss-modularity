'use strict'

process.title = 'Dice Roll'

const { argv: [,, ...args] } = process
const { count, sides } = require('./parse-args')(args)
const { roll, toDiceNotation } = require('./dice')

const dice = toDiceNotation({count, sides})
const total = roll(dice)

console.log(total)




// const [,,...args] = process.argv
// const parse = require('./parse-args')
// const dice = require('./dice')

// let countAndSides = parse([...args])
// let diceNotation = dice.toDiceNotation(countAndSides)
// let roll = dice.roll(diceNotation)

// console.log(roll)

