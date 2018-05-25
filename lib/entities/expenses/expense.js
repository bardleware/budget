const { struct } = require('superstruct')

module.exports.Expense = struct({
  id: 'number?',
  timeStamp: 'date?',
  name: 'string',
  dueDate: 'date',
  amount: 'number',
  actual: 'number?',
  frequency: 'string'
})
