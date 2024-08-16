import "./Rating.css";

const StarRating = ({ rating }) => {
  // Ensure the rating is a number between 0 and 5
  const normalizedRating = Math.max(0, Math.min(5, rating));

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, idx) => (
        <span
          key={idx}
          className="star"
          style={{
            fontSize: "24px",
            color: idx < normalizedRating ? "orange" : "#ccc",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
