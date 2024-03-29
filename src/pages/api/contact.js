import { MongoClient } from "mongodb"

async function handler(req, res) {
  console.log("api/contact")
  if (req.method === "POST") {
    const { email, name, message } = req.body
    const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.enpyj.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." })
      return
    }

    const newMessage = {
      email,
      name,
      message,
    }

    let client

    try {
      client = await MongoClient.connect(uri)
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection("messages").insertOne(newMessage)
      newMessage.id = result.insertedId
      console.log("success newMessage", newMessage)
    } catch (error) {
      client.close()
      res.status(500).json({ message: "Storing message failed!" })
      return
    }

    client.close()

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage })
  }
}

export default handler
