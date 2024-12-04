import courseModel from "@/models/course";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();
  const id = req.query.id;
  if (req.method === "DELETE") {
    if (isValidObjectId(id)) {
      try {
        const result = await courseModel.findOneAndDelete({ _id: id });
        if (!result) {
          return res.status(404).json({ message: "course not found" });
        }
        return res.status(200).json({ message: "course deleted successfully" });
      } catch (error) {
        console.log("error deleting course =>", error.message);
        return res.status(500).json({ message: "something went wrong" });
      }
    } else {
      return res.status(422).json({ message: "course ID is not valid" });
    }

    // Return detailed error for debugging in development
  } else if (req.method === "PUT") {
    const { title, price, teacher, image } = req.body;
    if (isValidObjectId(id)) {
      if (!title.trim() || !price < 0 || !teacher.trim()) {
        return res.status(422).json({ message: "inputs are not valid" });
      }
      if (!image || !image.name || !image.data || !image.contentType) {
        return res.status(422).json({ message: "Image data is invalid" });
      }

      try {
        await courseModel.findOneAndUpdate(
          { _id: id },
          { title, price, teacher, image }
        );
        return res.status(200).json({ message: "course updated successfully" });
      } catch (error) {
        res.status(500).json({ message: "something went wrong" });
      }
    } else {
      return res.status(422).json({ message: "course ID is not valid" });
    }
  }
};
export default handler;
