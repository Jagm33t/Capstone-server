const knex = require("knex")(require("../knexfile"));

//Get functions
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
module.exports = {
  getSingleUser,
};