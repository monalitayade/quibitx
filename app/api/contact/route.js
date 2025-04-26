import { NextResponse } from "next/server";
import {MongoClient} from 'mongodb';
const uri = process.env.MONGODB_URI;

export async function POST(req){
    try{
        const body = await req.json();
        const client = await MongoClient.connect(uri);
        const db = client.db('Contact');
        const collection = db.collection('ContactDB');
        //await collection.insertMany(body);

        //client.close();

        const documents = Array.isArray(body) ? body : [body];
        // if(!Array.isArray(body)){
        //     client.close();
        //     return NextResponse.json({message:'Expected an arry of documents'}, {status:400});
        // }
        await collection.insertMany(documents);
        client.close();
        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 })
    } catch(error){
        console.error('Error inserting documents:', error);
        return NextResponse.json({message:'Error submitting form'}, {status:500});

    }
}