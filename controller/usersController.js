const knex = require("knex")(require("../knexfile"));
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();




// Get users Details
const hostPath = "http://localhost:8080/"
function getSingleUser(req, res) {
  const userId = req.params.id;
  knex("users")
    .select(
      "id",
      "first_name",
      "last_name",
      "email",
      "phone_number",
      "street_number",
      "city",
      "province",
      "country",
      "username",
      "password",
      "created_at",
      "updated_at",
      "img",
      "balance",
      "last_opened",
      "last_payment",
      "unique_id",
      "last_payment_date",
      "last_month_expense"
    )
    .where({ id: userId })
    .then((result) => {
      if (result.length === 0) {
        return res.status(404).send({ message: `User ID ${userId} not found.` });
      }

      const updatedUser = {
        ...result[0],
        img: hostPath + result[0].img,
      };
      console.log(updatedUser);
      return res.status(200).json(updatedUser);
    })
    .catch((err) => {
      console.log(
        `getSingleUser: Error retrieving data for the user ID ${userId}: ${err}`
      );
      return res
        .status(400)
        .send(`Error retrieving data for the user ID ${userId}`);
    });
}
// update selected user data
function updateUsers(req, res) {
  const { first_name, last_name, street_number, province , country , phone_number, email, username, password, confirm_password } = req.body;
  const userId = req.params.id;
  const updatedUsers={...req.body};
  knex('users')
  .where({ id: userId })
    .update({
      first_name,
      last_name,
      phone_number,
      email,
      username,
      password,
      confirm_password,
      street_number,
      province ,
      country 
    
    })
    .then(() => {
  
      res.sendStatus(200); 
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to update user profile' });
    });
}


function updateBalance(req, res) {
  const  userId  = req.params;
  const { balance } = req.body;
// console.log("balance",balance);

//   console.log("userId", userId);

  knex("users")
    .where("id", userId)
    .update({ balance })
    .then(() => {
      res.sendStatus(200);
      
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
}


// Add new user when someone signup
function newUsers(req, res) {
  const {
    first_name,
    last_name,
    street_number,
    city,
    province,
    country,
    phone_number,
    email,
    username,
    password,
    confirm_password,
  } = req.body;
  console.log("pass",password)
  
  // Check if the passwords match before proceeding
  if (password !== confirm_password) {
    return res.status(400).json({ error: 'Passwords do not match.' });
    
  }

  // Generate a salt with a cost of 10
  const saltRounds = 10;

  // Hash the password with the generated salt
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    console.log("confffirm",confirm_password )
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update user profile' });
    }

    const newUser = {
      first_name,
      last_name,
      phone_number,
      email,
      username,
      password: hashedPassword, // Save the hashed password to the database
      confirm_password: hashedPassword,
      street_number,
      city,
      province,
      country,
      img:'',
      balance:'',
      last_opened:'',
      last_payment:'',
      last_payment_date:'2023-06-11',
      last_month_expense:'',
    };

    knex("users")
      .insert(newUser)
      .then(() => {
        res.status(201).json({ message: 'User created successfully', user: newUser });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
      });
  });
}

function generateAccessToken(user) {
  // Use jwt.sign() to generate the access token
  const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '10s' });
  return accessToken;
}

function userLogin (req,res) {
const { username, password} = req.body;

knex('users')
.where('username',username)
.first()
.then((user)=>{
  if(!user){
    return res.status(401).json(
      {error:'Invalid username or password' });
    
  }
 // Compare the provided password with the hashed password in the database
 bcrypt.compare(password, user.password, (err, isPasswordMatch) => {
  if (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to login' });
  }

  if (!isPasswordMatch) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const accessToken = generateAccessToken({ username: user.username, userId: user.id });

  // Return the token to the frontend
  res.json({ userId: user.id, accessToken });
});
})
.catch((error) => {
console.error('Error during login:', error);
res.status(500).json({ error: 'Failed to login' });
});
}


module.exports = {
updateUsers,
getSingleUser,
updateBalance,
newUsers,
userLogin,
};