const router = require("express").Router();
const usersController = require("../controller/usersController");

const {
  getSingleUser
} = usersController;

router.get("/:id" , getSingleUser );



module.exports = router;