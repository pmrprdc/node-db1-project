const express = require('express')
const router = express.Router()
const accountsModel = require('./accounts-model')
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware');

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

router.post('/',checkAccountPayload,checkAccountNameUnique, async(req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accountData = req.body;
    const newAccount = await accountsModel.create(accountData);
    if (newAccount) {
      res.status(201).json(newAccount);
    } else {
      res.status(400).json({ message: "Failed to create the account" });
    }
  } catch (err) {
    next(err);
  }
  
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})


router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})




router.use((err, req, res, next) => {
  // Log the error internally
  console.log(err);

  // Determine if the error is a known client-side error or a server-side error
 

  // Respond with a detailed message in development, simpler message in production
  // Set a default error status if not provided
  const errorStatus = err.status || 500;

  // Respond with the appropriate status code and message
  res.status(errorStatus).json({
    message: err.message || "There was an error"//
  });
});

module.exports = router;

