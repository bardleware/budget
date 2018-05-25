module.exports = function () {
  let expenseStore = []
  let id = 0

  const create = expense => {
    expense.id = id++
    expenseStore.push(expense)
    return expenseStore
  }

  const get = () => expenseStore

  function getOne (id) {
    return expenseStore.find(expense => expense.id === id)
  }

  function update (id, prop, payload) {
    expenseStore = expenseStore.reduce((allExpenses, currentExpense) => {
      if (currentExpense.id === id) {
        currentExpense[prop] = payload
      }
      allExpenses.push(currentExpense)

      return allExpenses
    }, [])

    return expenseStore
  }

  return {
    create,
    update,
    get,
    getOne
  }
}
