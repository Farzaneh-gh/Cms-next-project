import connectToDB from "@/utils/db";
import courseModel from "@/models/course";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, price, teacher, image } = req.body;

    if (!title.trim() || !price < 0 || !teacher.trim()) {
      return res.status(422).json({ message: "inputs are not valid" });
    }
    if (!image || !image.name || !image.data || !image.contentType) {
      return res.status(422).json({ message: "Image data is invalid" });
    }
    try {
      connectToDB();
      await courseModel.create({ title, price, teacher, image });
      return res.status(201).json({ message: "course created successfully" });
    } catch (error) {
      console.log("error creating course =>", error.message);
    }
    // Return detailed error for debugging in development
    return res.status(500).json({ message: "something went wrong" });
  }
};

export default handler;
