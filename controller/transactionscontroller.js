const knex = require("knex")(require("../knexfile"));
const hostPath = "http://localhost:8080/";

// Get all transactions
function getAllTransactions(req, res) {
  knex("transactions")
    .select("id", "date", "type", "amount", "company")
    .then((transactions) => {
      if (transactions.length === 0) {
        return res.status(404).send({ message: "No transactions found." });
      }
      return res.status(200).json(transactions);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    });
}

module.exports = {
  getAllTransactions,
};
