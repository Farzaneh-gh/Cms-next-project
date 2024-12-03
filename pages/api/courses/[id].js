import courseModel from "@/models/course";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  const id = req.query.id;
  if (!isValidObjectId(id)) {
    return res.staus(400).json({ message: "id is not valid" });
  }
  try {
    connectToDB();
    const result = await courseModel.findOneAndDelete({ _id: id });
    if (!result) {
      return res.status(404).json({ message: "course not found" });
    }
    return res.status(200).json({ message: "course deleted successfully" });
  } catch (error) {
    console.log("error deleting course =>", error.message);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export default handler;
