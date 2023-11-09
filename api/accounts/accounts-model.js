const database = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
  return database('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  return database('accounts') // Replace 'accounts' with your actual table name
    .select('*')
    .where({ id }).first();
}

const create = async (account) => {
  // Insert the account and get the ID of the newly inserted account
  const [id] = await database('accounts') // Replace 'accounts' with your actual table name
    .insert(account);

  // Now, retrieve the newly inserted account using the obtained ID
  return database('accounts') // Replace 'accounts' with your actual table name
    .where({ id })
    .first(); // This will return only the first record found instead of an array
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
 return database(accounts).where({ id }) // Assuming your identifier column is named 'id'
  .update(account)
  .returning('*');
}

const deleteById = id => {
  // DO YOUR MAGIC
  return database('accounts') // Replace 'accounts' with your actual table name
  .where({ id }) // Assuming your identifier column is named 'id'
  .del();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
