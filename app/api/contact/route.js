import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Load MongoDB URI from environment variables
const uri = process.env.MONGODB_URI; 

// API Route to handle POST requests
export async function POST(request) {
  try {
    const body = await request.json();

    // Make sure body is an array (required by insertMany)
    // if (!Array.isArray(body)) {
    //   return NextResponse.json({ message: 'Input must be an array of documents' }, { status: 400 });
    // }

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db('Contact'); // 👈 replace with your DB name
    const collection = db.collection('ContactDB'); // 👈 replace with your collection name

    // Insert multiple documents
    const result = await collection.insertOne(body); 

    // Close the client connection
    await client.close();

    // Return success response
    return NextResponse.json({ message: 'Form data inserted successfully', insertedCount: result.insertedCount }, { status: 200 });

  } catch (error) {
    console.error('Error inserting documents:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
