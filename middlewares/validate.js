 function validate(schema){
    return async function(req, res, next){
        try{
            await schema.validate(req.body, { abortEarly: false });
            next();
        }
        catch(err){
            console.log(err)
            return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: err.errors, // contains all error messages
      });
        }
    }
}

module.exports = validate;