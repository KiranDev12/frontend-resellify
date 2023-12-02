import React, { useState } from "react";
import "./Review.css";

const Review = ({ customerId, merchantId }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmitReview = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/fetch/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating: rating,
          customerId: customerId, // or merchantId, depending on the scenario
        }),
      });

      if (response.ok) {
        // Handle successful response, e.g., show a success message
        console.log("Review submitted successfully!");
      } else {
        // Handle error response
        console.error("Failed to submit review");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  };

  return (
    <div className="review-container">
      <h1 className="text-left mb-4">Leave a Review</h1>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} onClick={() => handleStarClick(star)}>
            <span
              className={`star ${star <= rating ? "filled" : ""}`}
              role="img"
              aria-label={`Star ${star}`}
            >
              &#9733;
            </span>
          </label>
        ))}
      </div>
      <p className="text-left mb-4">Your rating: {rating} stars</p>
      <textarea
        className="border p-2 w-full"
        placeholder="Write your review here..."
        rows="4"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <button
        className="bg-[#20B486] text-white py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition duration-300 mt-4"
        onClick={handleSubmitReview}
      >
        Submit Review
      </button>
    </div>
  );
};

export default Review;
