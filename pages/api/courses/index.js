import connectToDB from "@/utils/db";
import courseModel from "@/models/course";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title } = req.body;

    if (!title.trim() || title.length < 5) {
      return res.status(422).json({ message: "title is not valid" });
    }

    try {
      connectToDB();
      await courseModel.create({ title });
      return res.status(201).json({ message: "course created successfully" });
    } catch (error) {
      console.log("error creating course =>", error.message);
    }
    // Return detailed error for debugging in development
    return res.status(500).json({ message: "something went wrong" });
  }
};

export default handler;
