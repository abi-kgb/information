import { useEffect, useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="img-slider">
      {/* IMAGES */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Infrastructure"
          className={`slide-img ${i === index ? "active" : ""}`}
        />
      ))}

      {/* DOTS */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active-dot" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
