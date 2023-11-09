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
  console.error(err);

  // Determine if the error is a known client-side error or a server-side error
  const isClientError = err.status >= 400 && err.status < 500;

  // Respond with a detailed message in development, simpler message in production
  const responseMessage = process.env.NODE_ENV === 'development' || isClientError
    ? err.message
    : "An unexpected error has occurred";

  // Set a default error status if not provided
  const errorStatus = err.status || 500;

  // Respond with the appropriate status code and message
  res.status(errorStatus).json({
    message: responseMessage,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) // Include stack trace in development mode
  });
});

module.exports = router;

