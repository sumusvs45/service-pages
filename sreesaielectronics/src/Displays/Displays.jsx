import React from "react";
import '../Displays/displays.css'
import Carousel from "../carosuel/Carosuel"
import image1 from "../assets/displayImg-1.jpg";
import image2 from "../assets/displayImg-2.png";
import image3 from "../assets/displayImg-3.jpeg";
import image4 from "../assets/displayImg-4.jpg";
import image5 from "../assets/displayImg-5.jpg";
import DialogBox from "../Dialogbox/Dialogbox";


const Displays = () => {
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
      title: "The Wall All-in-One",
      description: "IA008B - UHD Premium Direct View LED Display for Business"
    },
    {
      id: 2,
      image: image2,
      title: " LG Interactive Digital Boarde",
      description: " LG Interactive Digital Board, Power Consumption: <150 W, Size/Dimension: 65 Inch"
    },
    {
      id: 3,
      image: image3,
      title: "Lg Interactive White Digital Board",
      description: "65 Interactive White Digital Board, Size: 65 Inch, Power Consumption: 150 - 220 W"
    },
    {
      id: 4,
      image: image4,
      title: "6.5 x 2 Feet Video Wall Standee",
      description: "6.5 x 2 Feet Video Wall Standee P3 Indoor Digital Display"
    },
    {
        id: 5,
        image: image5,
        title: " Digital Signage Standee Projector Screen Kiosk",
        description: "Digital Signage Standee Projector Screen Kiosk Advertisement Machine Product Size 78 Height x 36 Width 165.1 cm (65 inch) Full HD LED Backlit IPS Panel Monitor (LB651-IUH)  (Adaptive Sync, Response Time: 8 ms, 60 Hz Refresh Rate)",
      },
     
   
  ];

  return (
    <>
      <section>
        <div className="displayHeroImg">
          <h2 className="displayTitle">Displays</h2>
          <h4 className="displaySubHeading">
          Explore a wide range of display solutions for every need
          </h4>
        </div>
        <div className="div">
          <Carousel />
        </div>
      </section>
      <div className="div">
        <h2 className="displayQuote">Our Products</h2>
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
   

      <DialogBox/>
    </>
  );
};

export default Displays;
