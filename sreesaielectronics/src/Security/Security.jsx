import React from "react";
import "../Security/Security.css";
import Carousel from "../carosuel/Carosuel"
import image1 from "../assets/securityImg-1.jpg";
import image2 from "../assets/securityImg-2 .jpg";
import image3 from "../assets/securityImg-3 .jpg";
import image4 from "../assets/securityImg-4.jpg";
import image5 from "../assets/securityImg-5.jpg";
import Dialougebox from "../Dialogbox/Dialogbox";

const Security = () => {
  const trimDescription = (description, wordLimit = 15) => {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...'; // Append "..." to indicate it's trimmed
  };
  // Array of products
  const products = [
    {
      id: 1,
      image: image1,
      title: "DS-2CD2347G3-LIS2UY/S(L)(RB)",
      description: "4 MP Smart Hybrid Light with ColorVu Fixed Turret Network Camera"
    },
    {
      id: 2,
      image: image2,
      title: "Team Office Fingerprint",
      description: "Team Office Fingerprint, Card, Wi-Fi and Cloud Based Attendance Device(Finger, Wi-Fi, Battery, Black)"
    },
    {
      id: 3,
      image: image3,
      title: "HIKVISION Analog Video Door Phone/Bell",
      description: "HIKVISION Analog Video Door Phone/Bell with 7TFT LCD Screen Wired | 1080p Resolution | Built-In Mic & Loudspeaker | Noise Echo Cancellation | Record..."
    },
    {
      id: 4,
      image: image4,
      title: "Smart Digital Lock",
      description: "Azhero Smart Door Lock | 6 Ways Unlocking | Fingerprint | PIN | Remote OTP | NFC Card | Atomberg App (Data Stored in India) | Key | 2 Stainless Steel Bolt | 2 Year Warranty (Rose Gold)"
    },
    {
      id: 5,
      image: image5,
      title: "CP PLUS 3 MP Full HD Smart Wi-fi CCTV Camera",
      description: "CP PLUS 3 MP Full HD Smart Wi-fi CCTV Camera | 360° Pan & Tilt | View & Talk | Motion Alert | Night Vision | SD Card (Up to 128 GB) | Alexa & OK Google | 2-Way Talk | IR Distance 10Mtr | CP-E35A"
    }
  ];

  return (
    <>
      <section>
        <div className="securityHeroImg">
          <h2 className="securityTitle">Security</h2>
          <h4 className="securitySubHeading">
            Protect your home or business with top-notch security systems
          </h4>
        </div>
        <div className="div">
          <Carousel />
        </div>
      </section>
      <div className="div">
        <h2 className="securityQuote">Security Quotation</h2>
      </div>

      <div className="product-cards-grid">
        {/* Map through the products array and display each product dynamically */}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`product-${product.id}`}  />
            <h2 >{product.title}</h2>
            <p >{trimDescription(product.description)}</p>
          </div>
        ))}
      </div>
     <Dialougebox/>
    </>
  );
};

export default Security;
