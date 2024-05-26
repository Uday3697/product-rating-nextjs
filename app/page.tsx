"use client";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaBeer } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Home: React.FC = () => {
  const [safetyRating, setSafetyRating] = useState<number>(0);
  const [communicationRating, setCommunicationRating] = useState<number>(0);
  const [recommendation, setRecommendation] = useState("");
  const [praise, setPraise] = useState("");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handlePraiseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPraise(e.target.value);
  };
  const handleRecommendation = (value: string) => {
    setRecommendation(value);
    if (value === "like") {
      setLiked(true);
      setDisliked(false);
    } else if (value === "dislike") {
      setDisliked(true);
      setLiked(false);
    } else {
      setLiked(false);
      setDisliked(false);
    }
  };
  return (
    <div className="product-rating-modal">
      <div className="modal-header">
        <button className="close-button">X</button>
        <h1>Leave a Review</h1>
      </div>
      <div className="modal-body">
        <div className="rating-section">
          <h3>Safety</h3>
          <div className="text-sm text-gray-400">safe safe safe</div>
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
          <div className="text-sm text-gray-400">
            if you want to communicate
          </div>
          <Rating
            onClick={(rate) => setCommunicationRating(rate)}
            size={20}
            transition
            fillColor="orange"
            emptyColor="gray"
            SVGstyle={{ display: "inline" }}
          />
        </div>
        <div className="recommendation-options">
          <h3>Do you recommend to others?</h3>
          <div className="text-sm text-gray-400">
            if you liked press like button{" "}
          </div>
          <button
            onClick={() => handleRecommendation("like")}
            className={liked ? "liked" : ""}
          >
            {liked ? <FaThumbsUp style={{ color: "green" }} /> : <FaThumbsUp />}
          </button>
          <button
            onClick={() => handleRecommendation("dislike")}
            className={disliked ? "disliked" : ""}
          >
            {!disliked ? (
              <FaThumbsDown />
            ) : (
              <FaThumbsDown style={{ color: "red" }} />
            )}
          </button>
        </div>
        <div className="praise-section">
          <h3>Praise</h3>
          <select value={praise} onChange={handlePraiseChange}>
            <option value="">Select Praise</option>
            <div className="text-sm text-gray-400">praise if u want</div>
            <option value="">op</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
