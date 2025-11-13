const prisma = require("../shortcut/prisma_initilization");
const getRecord = async (req, res) => {
  try {
    const getData = await prisma.services.findMany({ orderBy: { id: "asc" } });
    if (!getData) {
      console.log("Unable to fetch data from DB");
      return res.status(503).json({ message: "Unable to fetch data from DB" });
    }
    console.log("Successfully fetched data");
    return res
      .status(200)
      .json({ message: "Successfully fetched data", records: getData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
const updateRecord = async (req, res) => {
  const { updateData } = req.body;
  if (!updateData) {
    return res.status(404).json({ message: "Missing Data to update" });
  }
  const updateMultipleRecord = updateData.map((record) => {
    const { id, ...otherData } = record;
    return prisma.services.update({ where: { id: id }, data: otherData });
  });
  try {
    const makeUpdate = await prisma.$transaction(updateMultipleRecord);
    if (!makeUpdate) {
      console.log("Failed to update data");
      return res.status(503).json({ message: "Failed to update data" });
    }
    return res.status(200).json({ message: "Successfully Updated Data" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { getRecord, updateRecord };
