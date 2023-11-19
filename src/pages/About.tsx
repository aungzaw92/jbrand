import { Button } from "react-bootstrap";

export function About() {
  const containerStyle = {
    padding: "2rem",
    textAlign: "center", // Center the text
    color: "#333", // Dark grey color for text
  };

  const headerStyle = {
    color: "#008000", // Green color for headers
  };

  const pointStyle = {
    marginTop: "1rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>About Us</h1>
      <p>
        Welcome to Global Myanmar Imports, your trusted source for high-quality
        food products at unbeatable prices. At Global Myanmar Imports, we take
        pride in providing our customers with a unique shopping experience that
        combines top-notch products, affordability, and convenience.
      </p>

      <h2 style={headerStyle}>Our Selling Points</h2>
      <p style={{ ...pointStyle, color: "#333" }}>
        <strong>High-Quality Products:</strong> We source the finest frozen
        fish, dry fish, spices, and beans directly from Myanmar. Our commitment
        to quality ensures that you receive products that meet the highest
        standards of taste and freshness.
      </p>
      <p style={{ ...pointStyle, color: "#333" }}>
        <strong>Lower Prices:</strong> By taking pre-orders and optimizing our
        supply chain, we minimize warehouse storage fees and other charges. This
        allows us to pass on the savings to our customers, providing
        high-quality food at lower prices.
      </p>
      <p style={{ ...pointStyle, color: "#333" }}>
        <strong>Consistent Delivery:</strong> We understand the importance of
        consistency in our services. We work diligently to ensure that your
        orders are processed efficiently and delivered right to your stores on
        time, every time.
      </p>

      <h2 style={headerStyle}>Contact Information</h2>
      <p style={{ ...pointStyle, color: "#333" }}>
        <strong>Email:</strong> anaing@globalmyanmarltd.com
      </p>
      <p style={{ ...pointStyle, color: "#333" }}>
        <strong>Phone:</strong> 604-721-9999
      </p>
      <p style={{ ...pointStyle, color: "#333" }}>
        <strong>Address:</strong> 100th Ave Surrey, BC V3T 0G5
      </p>

      <h2 style={headerStyle}>Office Hours</h2>
      <p style={{ ...pointStyle, color: "#333" }}>Monday to Friday from 9 am to 6 pm</p>

    </div>
  );
}
