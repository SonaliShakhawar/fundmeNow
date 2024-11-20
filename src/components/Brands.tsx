import React from "react";

function Brands() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Co-invest with the best
      </h1>
      <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
        Some of the top names in venture capital have invested in the same
        companies that raise on Republic.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Andreessen_Horowitz_Logo.png/1200px-Andreessen_Horowitz_Logo.png"
          alt="Andreessen Horowitz"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Techstars-logo.png/640px-Techstars-logo.png"
          alt="Techstars"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sequoia_Capital_logo.svg/1024px-Sequoia_Capital_logo.svg.png"
          alt="Sequoia"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kleiner_Perkins_Caufield_and_Byers_logo.png/640px-Kleiner_Perkins_Caufield_and_Byers_logo.png"
          alt="Kleiner Perkins"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lerer_Hippeau_logo.png/640px-Lerer_Hippeau_logo.png"
          alt="Lerer Hippeau"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/500_Global_logo.png/640px-500_Global_logo.png"
          alt="500 Startups"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Brands;
