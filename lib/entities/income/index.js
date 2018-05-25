const { Income } = require('./income')

module.exports = function ({ incomeRepo }) {
  const get = () => incomeRepo.get()
  const getOne = id => incomeRepo.getOne(id)

  const update = (id, prop, payload) => incomeRepo.update(id, prop, payload)

  const create = income => {
    income.timeStamp = new Date()

    const [error, data] = Income.validate(income)

    return error ? Promise.reject(new Error(data)) : incomeRepo.create(income)
  }

  return {
    get,
    getOne,
    create,
    update
  }
}
