const router = require("express").Router();
const transactionController = require('../controller/transactionscontroller');


const{
  getAllTransactions,
  postToTransaction
} = transactionController;

// GET /transactions - Get all transactions
router.get('/', getAllTransactions);
router.post('/',  postToTransaction );
module.exports = router;
