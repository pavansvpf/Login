module.exports = {
    adminmail: {
        service: 'email service here eg-gmail',
        auth: {
            user: 'your email here',
            pass: 'your password here'
        }
    },
    authorization: {
        google: {
            clientID: '',
            clientSecret: '',
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        facebook: {
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'name', 'picture.type(large)', 'email']
        }
    }
 }
 