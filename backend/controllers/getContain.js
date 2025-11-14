const prisma = require("../shortcut/prisma_initilization");
const getContain = async (req, res) => {
  try {
    const contain = await prisma.contain.findMany();
    if (!contain) {
      console.log("Failed to get contain");
      return res.status(503).json("Failed to get contain");
    }
    const safeParseNestedString = (jsonString) => {
      try {
        if (!jsonString) return null;
        let cleanedString = jsonString.replace(/\\r\\n|\\n/g, "");
        cleanedString = cleanedString.replace(/`/g, '"');
        cleanedString = cleanedString.replace(/'/g, '"');
        cleanedString = cleanedString.replace(/(\w+):/g, '"$1":');
        cleanedString = cleanedString.replace(/,\s*([\]}])/g, "$1");

        return JSON.parse(cleanedString);
      } catch (e) {
        console.error("Failed to parse nested JSON:", jsonString, e);
        return null;
      }
    };
    const transformedContainData = contain.map((item) => {
      return {
        ...item,
        languages: JSON.parse(item.languages.replace(/'/g, '"')),
        loginPageContain: safeParseNestedString(item.loginPageContain),
        terms: safeParseNestedString(item.terms),
      };
    });
    return res.status(200).json({
      message: "Successfully got contain",
      data: transformedContainData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { getContain };
