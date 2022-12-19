import bcrypt from 'bcryptjs'

const users =  [
{ 
    name: 'Admin User',
    email:"admin@example.com",
    password: bcrypt.hashSync('123456',10), // hashing the pswd synchronusly
    isAdmin: true
},
{ 
    name: 'John Doe',
    email:"john@example.com",
    password: 'jjj'
},
{ 
    name: 'oggy sharma',
    email:"oggy@example.com",
    password: 'ooo'
},

]

export default users