import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import axios from "axios";
const TELEGRAM_TOKEN = "7078522339:AAFKaETRWP0-8a6zLff3SCxs5E0fsA3SgrA";
const MONGODB_URI =
  "mongodb+srv://Aniruddha:1234@aniruddha.djgovzs.mongodb.net/?retryWrites=true&w=majority&appName=Aniruddha";

export async function POST(req: Request) {
  const body = await req.json();

  if (body.message && body.message.text) {
    const { chat, text } = body.message;
    if (!MONGODB_URI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      );
    }
    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db("notes_db");
    const collection = db.collection("notes");

    // Store the message
    await collection.insertOne({
      chatId: chat.id,
      text: text,
      createdAt: new Date(),
    });

    await client.close();

    // Reply to the user
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    await axios.post(url, {
      chat_id: chat.id,
      text: "Note saved successfully!",
    });
  }

  return NextResponse.json({ ok: true });
}
