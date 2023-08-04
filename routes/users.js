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
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });
  console.log("token",token)
  
  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) return res.status(403).json({ error: 'Invalid token.' });
    console.log("decoded",decodedToken.userId)
    try {
      const userId = decodedToken.userId;
      const user = await getUserById(userId);
      

      if (!user) {
        return res.status(404).json({ error: `User ID ${userId} not found.` });
      }

      req.user = user;
      
      
      next();
    } catch (error) {
      console.error(`Error fetching user data for the token: ${error}`);
      return res.status(500).json({ error: 'Failed to fetch userss data.' });
    }
  });
};

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
