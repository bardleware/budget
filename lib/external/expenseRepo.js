module.exports = function ({ expenseStore }) {
  const get = () => Promise.resolve(expenseStore.get())
  const getOne = id => Promise.resolve(expenseStore.getOne(id))
  const create = income => Promise.resolve(expenseStore.create(income))
  const update = (id, prop, payload) => Promise.resolve(expenseStore.update(id, prop, payload))

  return {
    get,
    getOne,
    create,
    update
  }
}
