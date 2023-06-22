const router = require("express").Router();
const transactionController = require('../controller/transactionscontroller');


const{
  getAllTransactions
} = transactionController;

// GET /transactions - Get all transactions
router.get('/', getAllTransactions);

module.exports = router;
