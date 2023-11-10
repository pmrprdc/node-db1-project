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

const updateById = async (id, account) => {
  const updated = await database('accounts').where({ id }).update(account);
  if (updated) {
    return database('accounts').where({ id }).first();
  } else {
    return null; // or appropriate handling if no update occurred
  }
}


const deleteById = id => {
  // DO YOUR MAGIC
  return database('accounts') // Replace 'accounts' with your actual table name
  .where({ id }) // Assuming your identifier column is named 'id'
  .del();
}

const findByName = async name => {
  const trimmedName = name.trim();
  const account = await database('accounts') // Replace 'accounts' with your actual table name
    .where('name', trimmedName)
    .first(); // This will return only the first record found with that name

  return account; // Returns the account if found, or undefined if not found
};


module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  findByName
 
  
}
