import React, { useState } from "react";
import "./Gallery.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.jpeg";
import img11 from "../../assets/img11.jpeg";
import img12 from "../../assets/img12.jpeg";
import img13 from "../../assets/img13.jpeg";
import img14 from "../../assets/img14.jpeg";
import img15 from "../../assets/img15.jpeg";
import img16 from "../../assets/img16.jpeg";
import img17 from "../../assets/img17.jpeg";
import img18 from "../../assets/img18.jpeg";
import img19 from "../../assets/img19.jpeg";
import img20 from "../../assets/img20.jpeg";
import img21 from "../../assets/img21.jpeg";
import img22 from "../../assets/img22.jpeg";
import img23 from "../../assets/img23.jpeg";
import img24 from "../../assets/img24.jpeg";
import img25 from "../../assets/img25.jpeg";
import img26 from "../../assets/img26.jpeg";
import img27 from "../../assets/img27.jpeg";
import img28 from "../../assets/img28.jpeg";
import img29 from "../../assets/img29.jpeg";
import img30 from "../../assets/img30.jpeg";
import img31 from "../../assets/img31.jpeg";
import img32 from "../../assets/img32.jpeg";
import img33 from "../../assets/img33.jpeg";
import img34 from "../../assets/img34.jpeg";
import img35 from "../../assets/img35.jpeg";
import img36 from "../../assets/img36.jpeg";
import img37 from "../../assets/img37.jpeg";
import img38 from "../../assets/img38.jpeg";
import img39 from "../../assets/img39.jpeg";
import img40 from "../../assets/img40.jpeg";
import img41 from "../../assets/img41.jpeg";
import img42 from "../../assets/img42.jpeg";
import img43 from "../../assets/img43.jpeg";

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,
    img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43
  ];

  return (
    <div className="gallery-container">
      {/* Title */}
      <div className="gallery-title">
        <p>Memorable Moments</p>
        <h2>Gallery</h2>
      </div>

      {/* Image Grid */}
      <div id="Gallery" className="gallery">
        {images.slice(0, showMore ? images.length : 10).map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button className="gallery-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Gallery;
