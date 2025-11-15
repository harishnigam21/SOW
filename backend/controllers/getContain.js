const prisma = require("../shortcut/prisma_initilization");
const getContain = async (req, res) => {
  try {
    const contain = await prisma.contain.findMany();
    if (!contain) {
      console.log("Failed to get contain");
      return res.status(503).json("Failed to get contain");
    }
    const result = contain.reduce((acc, row) => {
      const { languages, page, target, value } = row;

      if (!acc[languages]) acc[languages] = {};
      if (!acc[languages][page]) acc[languages][page] = {};

      acc[languages][page][target] = value;

      return acc;
    }, {});
    console.log("Successfully got contain");
    return res.status(200).json({
      message: "Successfully got contain",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { getContain };
