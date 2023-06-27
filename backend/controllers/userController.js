const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const { secretKey } = require("../config");

const userloginregister = {
  registerUser: async (req, res) => {
    const { emailaddress, password } = req.body;
    try {
      const existingUser = await User.findOne({ emailaddress });
      if (existingUser) {
        return res.status(409).json({ message: "emailaddress already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ emailaddress, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.log(emailaddress, password);
      console.log(error);
      res.status(500).json({ message: "An error occurred" });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { emailaddress, password } = req.body;

      const user = await User.findOne({ emailaddress });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid emailaddress or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid emailaddress or password" });
      }

    //   const token = jwt.sign({ userId: user._id }, secretKey, {
    //     expiresIn: "1h",
    //   });
         res.status(200).json({message: "Login successful"})
    //   res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "An error occurred" });
    }
  },
};

module.exports = userloginregister