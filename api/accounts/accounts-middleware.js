exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log("checkAccountPauload initiated")
  next();

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
