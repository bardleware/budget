const createContainer = require('./main')

const container = createContainer()

const income = container.resolve('income')
const expenses = container.resolve('expenses')

income.create({
  name: 'Job1',
  plannedAmount: 200,
  frequency: '2 weeks'
})
.then(console.log)

// {
//   timeStamp: 'date?',
//   name: 'string',
//   plannedAmount: 'number',
//   actualAmount: 'number?',
//   frequency: 'string'
// }

expenses.create({
  name: 'Much Expense',
  dueDate: '2018-06-12',
  amount: 90,
  frequency: 'Monthly'
})
.then(console.log)

// {
//   id: 'number?',
//   timeStamp: 'date?',
//   name: 'string',
//   dueDate: 'date',
//   amount: 'number',
//   actual: 'number?',
//   frequency: 'string'
// }
