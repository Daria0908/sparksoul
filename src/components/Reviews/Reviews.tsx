import { useState } from 'react';
import './Reviews.scss';
import { data } from './data';

const Reviews: React.FC = () => {    
    const reviews = data;

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const handleNextReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrevReview = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

  const prevIndex = currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1;
  const nextIndex = (currentReviewIndex + 1) % reviews.length;

    return (
        <div className="container-small">
            <section className="reviews" id='reviews'>
                <h2 className="h2-header">
                Что наши клиенты говорят о нас
                </h2>
                <div className="reviews-images">
                        <img onClick={handlePrevReview} src={reviews[prevIndex].image} alt="Prev Review" className='prev-img'/>
                        <img src={reviews[currentReviewIndex].image} alt="Current Review" className='cur-img'/>
                        <img onClick={handleNextReview} src={reviews[nextIndex].image} alt="Next Review"className='next-img'/>
                </div>
                <div className="reviews-review">
                    <button onClick={handlePrevReview} className='reviews-btn'>
                        <svg width="27" height="45" viewBox="0 0 27 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.875 41.25L4.125 22.5L22.875 3.75" stroke="black" stroke-width="6.32732" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div className="reviews-text">
                        {reviews[currentReviewIndex].text.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <button onClick={handleNextReview} className='reviews-btn'>
                        <svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 41.25L21.875 22.5L3.125 3.75" stroke="black" stroke-width="6.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Reviews;