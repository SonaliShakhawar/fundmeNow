"use client"; // Ensure the code runs on the client side

import { useState, useEffect } from "react";

// Define types for the campaign object
interface Campaign {
  _id: string;
  startupName: string;
  founderName: string;
  description: string;
  fundingGoal: number;
  industry: string;
  website: string;
  pitch: string;
  amountRaised: number | null;
  deadline: string | null;
  image: string | null;
}

// Modal component for displaying campaign details
interface ModalProps {
  campaign: Campaign | null;
  onClose: () => void;
}

function Modal({ campaign, onClose }: ModalProps) {
  if (!campaign) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>{campaign.startupName}</h2>
        <p><strong>Founder:</strong> {campaign.founderName}</p>
        <p><strong>Description:</strong> {campaign.description}</p>
        <p><strong>Funding Goal:</strong> ${campaign.fundingGoal}</p>
        <p><strong>Industry:</strong> {campaign.industry}</p>
        <p><strong>Website:</strong> <a href={campaign.website} target="_blank" rel="noopener noreferrer">{campaign.website}</a></p>
        <p><strong>Pitch:</strong> {campaign.pitch}</p>
        <p><strong>Amount Raised:</strong> ${campaign.amountRaised || 0}</p>
        <p><strong>Deadline:</strong> {campaign.deadline || "N/A"}</p>

        <button
          onClick={onClose}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6600",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function LatestCampaignPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]); // State to hold campaigns data
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null); // State for selected campaign
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal visibility

  // Fetch the campaigns from the server when the component is mounted
  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await fetch("/api/campaign");
        if (response.ok) {
          const data = await response.json();
          setCampaigns(data.campaigns); // Assuming the response has a "campaigns" array
        } else {
          console.error("Error fetching campaigns:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCampaigns();
  }, []);

  // Handle opening the modal with campaign details
  const handleViewDetails = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCampaign(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>FundMe</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </a>
          <a href="/explore" style={{ color: "#fff", textDecoration: "none" }}>
            Explore
          </a>
          <a href="/categories" style={{ color: "#fff", textDecoration: "none" }}>
            Categories
          </a>  
        </div>
      </div>

      {/* Latest Campaigns Section */}
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          margin: "0 auto",
          padding: "20px",
          maxWidth: "1200px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Latest Campaigns</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                margin: "10px",
                padding: "20px",
                width: "30%",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Replace `campaign.image` with the actual image field */}
              <img
                src={campaign.image || "https://via.placeholder.com/150"}
                alt={campaign.startupName}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <h3>{campaign.startupName}</h3>
              <p>Category: {campaign.industry}</p>
              <p>
                ${campaign.amountRaised || 0} raised of ${campaign.fundingGoal}
              </p>
              <p>Deadline: {campaign.deadline || "N/A"}</p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#ff6600",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
                onClick={() => handleViewDetails(campaign)} // Open modal with selected campaign data
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        <button
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            backgroundColor: "#ff6600",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => console.log("Load More campaigns")}
        >
          Load More
        </button>
      </div>

      {/* Modal to show campaign details */}
      {isModalOpen && <Modal campaign={selectedCampaign} onClose={closeModal} />}

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2024 FundMe. All rights reserved.</p>
      </div>
    </div>
  );
}
