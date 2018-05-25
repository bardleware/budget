module.exports = function ({ incomeStore }) {
  const get = () => Promise.resolve(incomeStore.get())
  const getOne = id => Promise.resolve(incomeStore.getOne(id))
  const create = income => Promise.resolve(incomeStore.create(income))
  const update = (id, prop, payload) => Promise.resolve(incomeStore.update(id, prop, payload))

  return {
    get,
    getOne,
    create,
    update
  }
}
