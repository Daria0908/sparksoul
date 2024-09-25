import { useState } from "react";
import "./Reviews.scss";

const reviews = [
  { image: require("./reviews/review1.jpg"), alt: "Review 1" },
  { image: require("./reviews/review2.jpg"), alt: "Review 2" },
  { image: require("./reviews/review3.jpg"), alt: "Review 3" },
];

const Reviews: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const prevIndex = currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1;
  const nextIndex = (currentReviewIndex + 1) % reviews.length;

  return (
    <div className="container-small">
      <section className="reviews" id="reviews">
        <h2 className="h2-header">Что наши клиенты говорят о нас</h2>
        <div className="reviews-images">
          <img onClick={handlePrevReview} src={reviews[prevIndex].image} alt={reviews[prevIndex].alt} className="prev-img" />
          <img src={reviews[currentReviewIndex].image} alt={reviews[currentReviewIndex].alt} className="cur-img" />
          <img onClick={handleNextReview} src={reviews[nextIndex].image} alt={reviews[nextIndex].alt} className="next-img" />
        </div>
      </section>
    </div>
  );
};

export default Reviews;
