const express = require('express');
const router = express.Router();
const loginInfo = require('../middlewares/loginInfo');
const usersController = require('../controllers/usersControllers');

router.get(
  '/',
  loginInfo.verifyAuthFields,
  loginInfo.verifyExistance,
  loginInfo.hasValidToken,
  usersController.login
);

router.post(
  '/',
  usersController.postNewUser
  
);



module.exports = router;