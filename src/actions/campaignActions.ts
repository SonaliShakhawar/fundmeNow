import { NextApiRequest, NextApiResponse } from "next";
import { CampaignModel } from "@/models/Campagin";
import mongoose from "mongoose";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    
  await mongoose.connect(process.env.MONGODB_URI as string);
    const {
      startupName,
      founderName,
      description,
      fundingGoal,
      industry,
      website,
      pitch,
    } = req.body;

    if (!startupName || !founderName || !fundingGoal || !industry || !website || !pitch) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const campaign = await CampaignModel.create({
      startupName,
      founderName,
      description,
      fundingGoal,
      industry,
      website,
      pitch,
    });

    return res.status(201).json({ message: "Campaign created successfully!", campaign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
