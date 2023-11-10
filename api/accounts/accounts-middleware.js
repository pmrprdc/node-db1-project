const AccountsModel = require('./accounts-model')
const database = require('../../data/db-config')



exports.checkAccountPayload = async(req, res, next) => {
  const {name, budget} = req.body;
  if (name === undefined || budget === undefined) {
    next({ status: 400, message: 'name and budget are required' });
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({ status: 400, message: 'name of account must be between 3 and 100' });
  } else if (typeof budget !== 'number' || isNaN(budget)) {
    next({ status: 400, message: 'budget of account must be a number' });
  } else if (budget < 0 || budget > 1000000) {
    next({ status: 400, message: 'budget of account is too large or too small' });
  }else {
    req.body.name = name.trim();
    next();
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const trimmedName = req.body.name.trim();
    const existingAccount = await AccountsModel.findByName(trimmedName);

    if (existingAccount) {
      res.status(400).json({ message: 'that name is taken' });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountId initiated")
  next();
}
