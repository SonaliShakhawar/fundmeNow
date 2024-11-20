import { model, models, Schema } from "mongoose";

export type Investor = {
  investorName: string;
  email: string;
  phoneNumber: string;
  investmentFocus: string;
  minimumInvestment: number;
  maximumInvestment: number;
  linkedinProfile: string;
  additionalDetails?: string; // Optional
};

const investorSchema = new Schema<Investor>({
  investorName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /\S+@\S+\.\S+/.test(value),
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /^\d{10,15}$/.test(value), // Adjust the regex for your phone number format
      message: (props) => `${props.value} is not a valid phone number.`,
    },
  },
  investmentFocus: { type: String, required: true },
  minimumInvestment: { type: Number, required: true },
  maximumInvestment: { type: Number, required: true },
  linkedinProfile: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/.test(value),
      message: (props) => `${props.value} is not a valid LinkedIn profile URL.`,
    },
  },
  additionalDetails: { type: String },
});

export const InvestorModel = models?.Investor || model<Investor>("Investor", investorSchema);
