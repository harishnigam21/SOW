const prisma = require("../shortcut/prisma_initilization");
const verifyUser = async (req, res) => {
  const user = req.user;
  const cookies = req.cookies;
  if (!cookies || !cookies.jwt) {
    console.log("Missing Important cookies");
    return res.status(404).json({ message: "Missing Important cookies" });
  }
  try {
    const checkUser = await prisma.users.findUnique({ where: { email: user } });
    if (!checkUser) {
      return res.status(401).json({
        message: "You are not valid user, please Sign In to move further",
      });
    }
    console.log("Successfully Verified");
    return res.status(200).json({ message: "Successfully Verified User" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { verifyUser };
