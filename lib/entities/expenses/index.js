const { Expense } = require('./expense')

module.exports = function ({ expenseRepo }) {
  const get = () => expenseRepo.get()
  const getOne = id => expenseRepo.getOne(id)

  const update = (id, prop, payload) => expenseRepo.update(id, prop, payload)

  const create = expense => {
    expense.timeStamp = new Date()
    expense.dueDate = new Date(expense.dueDate) // use `YYYY-MM-DD`

    const { error, data } = Expense.validate(expense)

    return error ? Promise.reject(new Error(data)) : expenseRepo.create(expense)
  }

  return {
    get,
    getOne,
    create,
    update
  }
}
