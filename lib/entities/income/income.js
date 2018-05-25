const { struct } = require('superstruct')

module.exports.Income = struct({
  id: 'number?',
  timeStamp: 'date?',
  name: 'string',
  plannedAmount: 'number',
  actualAmount: 'number?',
  frequency: 'string'
})

exports.validate = function (income) {
  const [ error, data ] = Income.validate(income)

  return {
    error,
    data
  }
}
