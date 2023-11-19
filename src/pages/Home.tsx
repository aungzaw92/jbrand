import { Button } from "react-bootstrap";
import download from "downloadjs";
import heroImage from "../../public/hero-image.jpg"; 
import cataloguePDF from "../../public/catalogue.pdf";



export function Home() {
  const downloadCatalogue = () => {
    download(cataloguePDF, "Global_Myanmar_Imports_Catalogue.pdf", "application/pdf");
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Hero Section */}
      <div
        style={{
          height: "400px", // Adjust the height as needed
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Global Myanmar Imports
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          We bring you the finest frozen fish, dry fish, spices, and beans
          directly from Myanmar to your doorstep.
        </p>
      </div>

      {/* Selling Point Section */}
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Why Choose Us?</h2>
        <p>
          At Global Myanmar Imports, we pride ourselves on providing top-quality
          products sourced directly from Myanmar. Our frozen fish, dry fish,
          spices, and beans are carefully selected to ensure the highest
          standards of taste and freshness. With a commitment to excellence, we
          bring the flavors of Myanmar to your table. Experience the richness of
          our offerings and elevate your culinary journey with us.
        </p>
      </div>

      {/* Download Catalogue Button */}
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <Button variant="primary" onClick={downloadCatalogue}>
          Download Our Catalogue (PDF)
        </Button>
      </div>
    </div>
  );
}
