"use client";
import { useState } from "react";

export default function InvestorOnboarding() {
  const [formData, setFormData] = useState({
    investorName: "",
    email: "",
    phoneNumber: "",
    investmentFocus: "",
    minimumInvestment: "",
    maximumInvestment: "",
    linkedinProfile: "",
    additionalDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/investor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit the onboarding form.");
      }

      alert("Investor onboarding successful!");
      setFormData({
        investorName: "",
        email: "",
        phoneNumber: "",
        investmentFocus: "",
        minimumInvestment: "",
        maximumInvestment: "",
        linkedinProfile: "",
        additionalDetails: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(error.message || "An error occurred while onboarding.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-8 mt-10 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Investor Onboarding</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Fields */}
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-lg font-medium text-gray-700">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </label>
            {key === "additionalDetails" ? (
              <textarea
                name={key}
                value={formData[key as keyof typeof formData]}
                onChange={handleChange}
                rows={4}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            ) : (
              <input
                type={key === "email" ? "email" : key.includes("Investment") ? "number" : "text"}
                name={key}
                value={formData[key as keyof typeof formData]}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className={`w-full py-3 font-bold rounded-md ${
            isSubmitting
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Complete Onboarding"}
        </button>
      </form>
    </section>
  );
}
