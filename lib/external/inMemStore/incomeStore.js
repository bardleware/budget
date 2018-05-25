module.exports = function () {
  let incomeStore = []
  let id = 0

  function create (income) {
    income.id = id++
    incomeStore.push(income)
    return incomeStore
  }

  function get () { return incomeStore }

  function getOne (id) {
    return incomeStore.find(income => income.id === id)
  }

  function update (id, prop, payload) {
    incomeStore = incomeStore.reduce((allIncome, currentIncome) => {
      if (currentIncome.id === id) {
        currentIncome[prop] = payload
      }
      allIncome.push(currentIncome)

      return allIncome
    }, [])

    return incomeStore
  }

  return {
    create,
    get,
    getOne,
    update
  }
}
