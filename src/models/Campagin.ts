import { model, models, Schema } from "mongoose";

export type Campaign = {
  description?: string; // Optional
  founderName: string;
  fundingGoal: number;
  industry: "Finance" | "Technology" | "Healthcare" | "Education" | "E-commerce";
  pitch: string;
  startupName: string;
  website: string;
};

const campaignSchema = new Schema<Campaign>({
  description: { type: String },
  founderName: { type: String, required: true },
  fundingGoal: { type: Number, required: true },
  industry: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => 
        ["Finance", "Technology", "Healthcare", "Education", "E-commerce"].includes(value),
      message: (props) => `${props.value} is not a valid industry.`,
    },
  },
  pitch: { type: String, required: true },
  startupName: { type: String, required: true },
  website: { type: String, required: true },
});

export const CampaignModel = models?.Campaign || model<Campaign>("Campaign", campaignSchema);
