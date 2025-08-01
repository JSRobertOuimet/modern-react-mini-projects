import { useState } from "react";
import Star from "./Star";
import Button from "./Button";
import Modal from "./Modal";

const Rating = () => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    const color = "gold";
    const feedbackMessages = [
        "Terrible",
        "Poor",
        "Fair",
        "Good",
        "Excellent",
    ];
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true);
        }
    };

    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    };

    return (
        <div className='rating-container'>
            <h1>Rate Your Experience!</h1>
            <div className='stars'>
                {stars.map(star => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={color}
                        onclick={setRating}
                        onMouseEnter={setHover}
                        onMouseLeave={() => setHover(null)}
                    />
                ))}
            </div>
            {rating > 0 && (
                <p className='feedback'>
                    {feedbackMessages[rating - 1]}
                </p>
            )}

            <Button
                className='submit-btn'
                onClick={handleSubmit}
                disabled={rating === 0}>
                Submit
            </Button>

            <Modal
                isOpen={submitted}
                onClose={closeModal}
                rating={rating}
            />
        </div>
    );
};

export default Rating;
