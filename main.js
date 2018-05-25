const {
  createContainer,
  asFunction
} = require('awilix')

const income = require('./lib/entities/income')
const expenses = require('./lib/entities/expenses')
const { incomeStore, expenseStore } = require('./lib/external/inMemStore')

module.exports = () => {
  const container = createContainer()

  container.register({
    incomeStore: asFunction(incomeStore).singleton(),
    expenseStore: asFunction(expenseStore).singleton(),
    incomeRepo: asFunction(require('./lib/external/incomeRepo')),
    expenseRepo: asFunction(require('./lib/external/expenseRepo')),
    income: asFunction(income),
    expenses: asFunction(expenses)
  })

  return container
}
