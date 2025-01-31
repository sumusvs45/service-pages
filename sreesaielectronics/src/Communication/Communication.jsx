import React from "react";
import "../communication/communication.css";
import Carousel from "../carosuel/Carosuel"
import image1 from "../assets/communicationImg-1.jpg";
import image2 from "../assets/communicationImg-2.jpg";
import image3 from "../assets/communicationImg-3.jpg";
import image4 from "../assets/communicationImg-4.jpg";
import Dialougebox from "../Dialogbox/Dialogbox";
;

const communication = () => {
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
      title: "Beetel M71N Caller ID Landline",
      description: "Beetel M71N Caller ID Landline,DTMF/FSK Compatible, 16 Digit LCD, Two Way Speaker phone, Music On Hold, In-use LED, 8 One Touch Memories, 30 Incoming/15 Outgoing calls Memory, 16 Ring Melodies (White)"
    },
    {
      id: 2,
      image: image2,
      title: "Hola! TF 510 Corded Landline",
      description: "Hola! TF 510 Corded Landline Phone, Wall/Desk Mountable, Clear Call Quality, Compact Design, Redial/Mute/Hold Function (Made in India) (Black)"
    },
    {
      id: 3,
      image: image3,
      title: "W WINBRIDE Wireless Voice Amplifier for Teachers",
      description: "W WINBRIDE Wireless Voice Amplifier for Teachers, 30W Portable PA Speaker System, Wireless Microphone for Classroom Teachers Fitness Instructor, Bluetooth Headset and Speaker Echo| Record| FM| TWS| H5"
    },
    {
      id: 4,
      image: image4,
      title: "smars HM135UI",
      description: "smars HM135UI Professional 30 Watt Wireless Bluetooth Portable Speaker"
    },
   
  ];

  return (
    <>
      <section>
        <div className="communicationHeroImg">
          <h2 className="communicationTitle">communication</h2>
          <h4 className="communicationSubHeading">
          Stay connected with the best communication devices and systems
          </h4>
        </div>
        <div className="div">
          <Carousel />
        </div>
      </section>
      <div className="div">
        <h2 className="communicationQuote">communication Quotation</h2>
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
      <div className="communicationContent">
        <h2 className="communicationContentTitle">Communication Content</h2>
      </div>
      <Dialougebox/>

    
    </>
  );
};

export default communication;
