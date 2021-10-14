const yup = require('yup');

module.exports = {
    checkEmailSchema: yup.object({
    email: yup.string().email(),
    uniquekey: yup.string()
}),
}


