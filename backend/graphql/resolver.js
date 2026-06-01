const User = require("../models/user");
const bcrypt = require("bcryptjs");
const validator = require("validator");

module.exports = {
  createUser: async ({ input }, req) => {
    const errors = [];
    if (!validator.isEmail(input.email)) {
      errors.push({ message: "Invalid email." });
    }
    if (
      validator.isEmpty(
        input.password ||
          !validator.isLength(input.password, { min: 5 }),
      )
    ) {
      errors.push({ message: "Password too short!" });
    }
    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.statusCode = 422;
      error.data = errors;
      throw error;
    }

    const existingUser = await User.findOne({ email: input.email });

    if (existingUser) {
      throw new Error("User already exists.");
    }

    const hashedPassword = await bcrypt.hash(input.password, 12);

    const user = new User({
      email: input.email,
      name: input.name,
      password: hashedPassword,
    });

    const createdUser = await user.save();
    return { ...createdUser._doc, _id: createdUser._id.toString() };
  },
};
