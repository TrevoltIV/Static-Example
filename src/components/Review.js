



export default function Review(props) {
    return (
        <div className="review-wrapper">
            <div className="review">
                <h3 className="review-rating">{props.rating}</h3>
                <p className="review-text">{props.text}</p>
                <p className="review-date">{props.date}</p>
            </div>
        </div>
    )
}