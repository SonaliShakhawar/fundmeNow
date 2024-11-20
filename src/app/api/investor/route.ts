import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db"; // Adjust the path based on your file structure
import { ObjectId } from "mongodb"; // For handling MongoDB ObjectIds

// POST - Create or update an investor
export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name"); // Replace with your database name
    const investorsCollection = db.collection("investors");

    const body = await req.json();
    const {
      investorName,
      email,
      phoneNumber,
      investmentFocus,
      minimumInvestment,
      maximumInvestment,
      linkedinProfile,
      additionalDetails,
    } = body;

    if (
      !investorName ||
      !email ||
      !phoneNumber ||
      !investmentFocus ||
      !minimumInvestment ||
      !maximumInvestment ||
      !linkedinProfile
    ) {
      return NextResponse.json(
        { message: "Please fill all the required fields." },
        { status: 400 }
      );
    }

    const existingInvestor = await investorsCollection.findOne({
      email,
    });

    if (existingInvestor) {
      const updatedInvestor = await investorsCollection.updateOne(
        { email },
        {
          $set: {
            investorName,
            phoneNumber,
            investmentFocus,
            minimumInvestment,
            maximumInvestment,
            linkedinProfile,
            additionalDetails,
          },
        }
      );
      return NextResponse.json(
        { message: "Investor updated successfully!" },
        { status: 200 }
      );
    }

    const newInvestor = await investorsCollection.insertOne({
      investorName,
      email,
      phoneNumber,
      investmentFocus,
      minimumInvestment,
      maximumInvestment,
      linkedinProfile,
      additionalDetails,
    });

    return NextResponse.json(
      { message: "Investor created successfully!", investor: newInvestor },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in POST:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// GET - Fetch all investors or a single investor by ID
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name"); // Replace with your database name
    const investorsCollection = db.collection("investors");

    // Parse query parameters for filtering (if needed)
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch investor by ID
      const investor = await investorsCollection.findOne({ _id: new ObjectId(id) });

      if (!investor) {
        return NextResponse.json(
          { message: "Investor not found." },
          { status: 404 }
        );
      }

      return NextResponse.json({ investor }, { status: 200 });
    }

    // Fetch all investors
    const investors = await investorsCollection.find({}).toArray();

    return NextResponse.json({ investors }, { status: 200 });
  } catch (error: any) {
    console.error("Error in GET:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
