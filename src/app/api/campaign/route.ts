import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db"; // Adjust the path based on your file structure
import { ObjectId } from "mongodb"; // For handling MongoDB ObjectIds

// POST - Create or update a campaign
export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name"); // Replace with your database name
    const campaignsCollection = db.collection("campaigns");

    const body = await req.json();
    const {
      startupName,
      founderName,
      description,
      fundingGoal,
      industry,
      website,
      pitch,
    } = body;

    if (
      !startupName ||
      !founderName ||
      !fundingGoal ||
      !industry ||
      !website ||
      !pitch
    ) {
      return NextResponse.json(
        { message: "Please fill all the required fields." },
        { status: 400 }
      );
    }

    const existingCampaign = await campaignsCollection.findOne({
      startupName,
    });

    if (existingCampaign) {
      const updatedCampaign = await campaignsCollection.updateOne(
        { startupName },
        {
          $set: {
            founderName,
            description,
            fundingGoal,
            industry,
            website,
            pitch,
          },
        }
      );
      return NextResponse.json(
        { message: "Campaign updated successfully!" },
        { status: 200 }
      );
    }

    const newCampaign = await campaignsCollection.insertOne({
      startupName,
      founderName,
      description,
      fundingGoal,
      industry,
      website,
      pitch,
    });

    return NextResponse.json(
      { message: "Campaign created successfully!", campaign: newCampaign },
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

// GET - Fetch all campaigns
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name"); // Replace with your database name
    const campaignsCollection = db.collection("campaigns");

    // Parse query parameters for filtering (if needed)
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch campaign by ID
      const campaign = await campaignsCollection.findOne({ _id: new ObjectId(id) });

      if (!campaign) {
        return NextResponse.json(
          { message: "Campaign not found." },
          { status: 404 }
        );
      }

      return NextResponse.json({ campaign }, { status: 200 });
    }

    // Fetch all campaigns
    const campaigns = await campaignsCollection.find({}).toArray();

    return NextResponse.json({ campaigns }, { status: 200 });
  } catch (error: any) {
    console.error("Error in GET:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
