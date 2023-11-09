const express = require('express')
const router = express.Router()
const accountsModel = require('./accounts-model')

router.get('/', async(req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await accountsModel.getAll(); // Use the getAll function from your model
    res.status(200).json(accounts);
  } catch (err) {
    // Passes errors into the error handler
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params; // Destructure the id from request parameters
    const account = await accountsModel.getById(id); // Use the getById function from your model

    // If the account is found, send it back, otherwise respond with a 404
    if (account) {
     return res.status(200).json(account);
    } else {
      return  res.status(404).json({ message: "Account not found" });
    }
  } catch (err) {
    // Passes errors into the error handler
    next(err);
  }
});

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.statis || 500).json({message: err.message || "server errorr"})
})

module.exports = router;
