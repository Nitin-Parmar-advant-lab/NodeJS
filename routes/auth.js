const express = require("express");
const { check, body } = require("express-validator");

const User = require("../models/user");

const authController = require("../controllers/auth");

const router = express.Router();

router.put(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom(async (value, { req }) => {
        const user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject("Email address already exists!");
        }
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Please enter a password with at least 5 characters"),
    body("name")
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage(
        "Please enter a name with at least 2 and at most 100 characters",
      ),
  ],
  authController.signup,
);

router.post('/login', authController.login);

module.exports = router;
