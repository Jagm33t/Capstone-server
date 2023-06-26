const router = require("express").Router();
const usersController = require("../controller/usersController");

const {
  getSingleUser,
  updateUsers,
  updateBalance
} = usersController;

router.get("/:id", getSingleUser);
router.put("/:id", updateUsers);
router.put("/:id/updatebalance", updateBalance);

module.exports = router;
