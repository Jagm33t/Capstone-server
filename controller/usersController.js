const knex = require("knex")(require("../knexfile"));


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
// // Function to update the user's balance in the database
// function updateBalance(req, res) {
//   console.log("request", req.body);
//   const { balance } = req.body;
//   const userId = req.params.userId;

//   knex('users')
//     .where('id', userId)
//     .increment('balance', balance)
//     .then(() => {
//       console.log('Balance updated successfully');
//       res.status(200).json({ message: 'Balance updated successfully' });
//     })
//     .catch((error) => {
//       console.error('Failed to update balance:', error);
//       res.status(500).json({ message: 'Failed to update balance' });
//     });
// };




function updateBalance(req, res) {
  // const { userId } = req.params;
  const { balance } = req.body;
console.log("balance",balance);

  // console.log("userId", userId);

  knex("users")
    .where("id", 1)
    .update({ balance })
    .then(() => {
      res.sendStatus(200);
      
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
}

module.exports = {
  updateUsers,
  getSingleUser,
  updateBalance
};