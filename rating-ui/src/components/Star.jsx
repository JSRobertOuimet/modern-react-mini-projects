const Star = ({
    star,
    rating,
    hover,
    color,
    onclick,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <span
            onClick={() => onclick(star)}
            onMouseEnter={() => onMouseEnter(star)}
            onMouseLeave={onMouseLeave}
            className='star'
            style={{
                color: star <= (hover || rating) ? color : "#CCC",
            }}>
            {"\u2605"}
        </span>
    );
};

export default Star;
