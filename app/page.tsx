"use client";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

interface ProductRatingModalProps {
  onClose: () => void;
}

const ProductRatingModal: React.FC<ProductRatingModalProps> = ({ onClose }) => {
  const [safetyRating, setSafetyRating] = useState<number>(0);
  const [communicationRating, setCommunicationRating] = useState<number>(0);
  const [recommendation, setRecommendation] = useState("");
  const [praise, setPraise] = useState("");

  const handleRecommendation = (value: string) => {
    setRecommendation(value);
  };

  const handlePraiseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPraise(e.target.value);
  };

  return (
    <div className="product-rating-modal">
      <div className="modal-header">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h1>Leave a Review</h1>
      </div>
      <div className="modal-body">
        <div className="rating-section">
          <h3>Safety</h3>
          <p>Sub heading for safety</p>
          <Rating
            onClick={(rate) => setSafetyRating(rate)}
            size={20}
            transition
            fillColor="orange"
            emptyColor="gray"
            SVGstyle={{ display: "inline" }}
          />
        </div>
        <div className="rating-section">
          <h3>Communication</h3>
          <Rating
            onClick={(rate) => setCommunicationRating(rate)}
            size={20}
            transition
            fillColor="orange"
            emptyColor="gray"
            SVGstyle={{ display: "inline" }}
          />
        </div>
        <div className="recommendation-section">
          <h3>Do you recommend to others?</h3>
          <div className="recommendation-options">
            <button onClick={() => handleRecommendation("like")}>Like</button>
            <button onClick={() => handleRecommendation("dislike")}>
              Dislike
            </button>
          </div>
        </div>
        <div className="praise-section">
          <h3>Praise</h3>
          <select value={praise} onChange={handlePraiseChange}>
            <option value="">Select Praise</option>
            <Rating
              onClick={(rate) => setCommunicationRating(rate)}
              size={20}
              transition
              fillColor="orange"
              emptyColor="gray"
              SVGstyle={{ display: "inline" }}
            />
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductRatingModal;
