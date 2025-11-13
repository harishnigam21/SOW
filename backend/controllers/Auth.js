const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = require("../shortcut/prisma_initilization");
const SignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "Missing Important Field" });
  }
  try {
    const validUser = await prisma.users.findUnique({
      where: { email: email },
    });
    if (!validUser) {
      console.log(
        "Email ID not registered yet, Please visit our registration page"
      );
      return res.status(403).json({
        message:
          "Email ID not registered yet, Please visit our registration page",
      });
    }
    const checkPassword = await bcrypt.compare(password, validUser.password);
    if (!checkPassword) {
      console.log(`${email} Incorrect Password`);
      return res.status(401).json({ message: "Incorrect Password" });
    }

    const accessToken = jwt.sign(
      { email: validUser.email },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "1d" }
    );
    const referenceToken = jwt.sign(
      { email: validUser.email },
      process.env.REFERENCE_TOKEN_KEY,
      { expiresIn: "1d" }
    );

    const updateReferenceToken = await prisma.users.update({
      where: { id: validUser.id },
      data: { reference_token: referenceToken },
    });
    if (!updateReferenceToken) {
      console.log("Failed to update token for your session");
      return res
        .status(400)
        .json({ message: "Failed to update token for your session" });
    }

    res.cookie("jwt", referenceToken, {
      sameSite: "None",
      httpOnly: true,
      secure: true,
      maxAge: 5 * 60 * 60 * 1000,
    });
    console.log("Successfully Updated token for your session");
    console.log("Successfully Logged In");
    return res.status(200).json({
      message: "Successfully Logged In",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { SignIn };
