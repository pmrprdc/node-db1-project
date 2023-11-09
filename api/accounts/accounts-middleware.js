exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body;
  if (name === undefined || budget === undefined) {
    return res.status(400).json({ message: "name and budget are required" });
  }

  const trimmedName = name.trim();
  if (trimmedName.length < 3 || trimmedName.length > 100) {
    return res.status(400).json({ message: "name of account must be between 3 and 100" });
  }

  const budgetNumber = Number(budget);
  if (isNaN(budgetNumber)) {
    return res.status(400).json({ message: "budget of account must be a number" });
  }

  if (budgetNumber < 0 || budgetNumber > 1000000) {
    return res.status(400).json({ message: "budget of account is too large or too small" });
  }

  // If all checks pass, add trimmed name and numeric budget to the request body
  // for further middleware or the final route handler to use
  req.body.name = trimmedName;
  req.body.budget = budgetNumber;

  console.log("checkAccountPayload completed");
  next();
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountNameUnique middleware inititated ")
  next()
  
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountId initiated")
  next();
}
