import PropTypes from "prop-types";

import { Label } from "../../layout/label";
import { ProgressBar, RatingContainer, RatingValue } from "./Rating.Styles";

const propTypes = {
    rating: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
};

const Rating = ({ rating, min = 1, max = 10 }) => {
    return(
        <RatingContainer>
            <Label as="div">Rating</Label>
            <ProgressBar value={rating} max={max} min={min} size="3" color="yellow" variant="solid" />
            <RatingValue>{`${rating}/${max}`}</RatingValue>
        </RatingContainer>
    );
};

Rating.propTypes = propTypes;
export default Rating;