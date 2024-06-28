import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGODB_URI =process.env.MONGODB_URI;

export async function GET() {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }
  const client = new MongoClient(MONGODB_URI, {
    ssl: true,
  });
  await client.connect();
  const db = client.db("notes_db");
  const collection = db.collection("notes");
  console.log("connection successs");
  const notes = await collection.find().toArray();

  await client.close();

  return NextResponse.json(notes);
}
