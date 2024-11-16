import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#111",
    color: "#fff",
    padding: "20px 40px",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap" as "wrap", // Explicitly define the flexWrap value
    gap: "20px",
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "200px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    marginBottom: "10px",
    fontWeight: "bold",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: "5px",
    cursor: "pointer",
  };

  const languageButtonStyle = {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const footerBottomStyle = {
    borderTop: "1px solid #333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10px",
    marginTop: "20px",
    fontSize: "0.9rem",
    flexWrap: "wrap" as "wrap", // Explicitly define the flexWrap value
  };

  const socialIconStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const socialLinkStyle = {
    color: "#fff",
    fontSize: "1.2rem",
    textDecoration: "none",
  };

  const highlightStyle = {
    color: "#FFA500",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>ABOUT</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Terms</li>
            <li style={listItemStyle}>Privacy</li>
            <li style={listItemStyle}>About us</li>
            <li style={listItemStyle}>Support</li>
            <li style={listItemStyle}>How it works</li>
            <li style={listItemStyle}>Blog</li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>CATEGORIES</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Animals</li>
            <li style={listItemStyle}>Business</li>
            <li style={listItemStyle}>Charity</li>
            <li style={listItemStyle}>Community</li>
            <li style={listItemStyle}>Competitions</li>
            <li style={listItemStyle}>View all →</li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>LINKS</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Explore</li>
            <li style={listItemStyle}>Gallery</li>
            <li style={listItemStyle}>Create Campaign</li>
            <li style={listItemStyle}>Featured Campaign</li>
            <li style={listItemStyle}>Login</li>
            <li style={listItemStyle}>Sign up</li>
          </ul>
          <button style={languageButtonStyle}>🌐 English</button>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>
            Fund<span style={highlightStyle}>me</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            tortor rutrum massa efficitur tincidunt vel nec lacus. Curabitur
            porta aliquet diam, eu gravida neque lacinia in. Praesent eget orci
            id sem commodo aliquet.
          </p>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>© 2024 Fundme | Crowdfunding Platform</p>
        
      </div>
    </footer>
  );
};

export default Footer;
