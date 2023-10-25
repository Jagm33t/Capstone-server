const router = require("express").Router();
const usersController = require("../controller/usersController");
require('dotenv').config();



const {
  getSingleUser,
  updateUsers,
  updateBalance,
  newUsers,
  userLogin,
  
 
} = usersController;

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  console.log("req",req)
  const token = req.header('Authorization')?.split(' ')[1];
  if(token == null)return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
   if (err) {
     console.log(err);
     return res.sendStatus(403);
 
     // if it returns error console.log(err)
   }
   req.user = user;
   next();
 });
 
 }

router.get("/:id", getSingleUser);
router.put("/:id", updateUsers);
router.put("/:id/updatebalance", updateBalance);
router.post("/new",newUsers);
router.post("/login", userLogin);
router.get("/me", authenticateToken, (req, res) => {
  console.log("req",req)
  const userData = req.user 
  
  res.json(userData);
});

module.exports = router;
