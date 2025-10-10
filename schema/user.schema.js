const { object, string, number, ref} = require('yup');

function isEmailLengthValid(email){
    if(!email) return false;
    const parts = email.split('@');
    const local = parts[0];
    return local.length <= 64;
}

const registerSchema = object().shape({
        username: string()
            .min(3, 'Username must be at first least 3 characters long.')
            .max(50, 'Username must be at most 50 characters long.')
            .required('Username is required.'),
        
        email: string()
            .email('This field should be a valid email address.')
            .max(100, 'This field must be at most 50 characters long')
            .required('This field must not be empty.')
            .test('is-valid-email-length', 'The part before @ of the email can be maximum 64 characters.', 
                email => isEmailLengthValid(email)),
 
        password: string()
            .min(8, 'This field must be at least 8 characters long')
            .max(50, 'This field must be at most 50 characters long')
            .required('This field must not be empty'),

        confirm_password: string()
        .required('This field must not be empty')
        .oneOf([ref('password'), null], 'Passwords must match')
     })

module.exports = registerSchema;