const {string, number, object, array} = require('yup');

const userSchema = object().shape({
        first_name: string()
            .min(3, 'this field must be at first least 3 characters.')
            .max(50, 'this field must be at most 50 characters.')
            .required('this field must not be empty.'),
        last_name: string()
            .min(3, 'this field must be at least 3 characters.')
            .max(50, 'this field must be at most 50 characters.')
            .required('this field must not be empty.')
     })

module.exports.userSchema = userSchema;