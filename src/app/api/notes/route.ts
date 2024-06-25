import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGODB_URI ="mongodb+srv://Aniruddha:1234@aniruddha.djgovzs.mongodb.net/?retryWrites=true&w=majority&appName=Aniruddha";

export async function GET() {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db("notes_db");
  const collection = db.collection("notes");

  const notes = await collection.find().toArray();

  await client.close();

  return NextResponse.json(notes);
}
