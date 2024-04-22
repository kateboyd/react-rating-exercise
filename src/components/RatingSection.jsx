import RatingStars from "./RatingStars"
import RatingSummary from "./RatingSummary"

const RatingSection = () => {
    return (
        <>
            <div className="flex">
                <RatingSummary/>
                <RatingStars />
            </div>
        </>
    )

}

export default RatingSection