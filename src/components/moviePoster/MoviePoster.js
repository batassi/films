import  { useEffect, useState } from "react";
import  { Badge,Text } from "@radix-ui/themes";
import PropTypes from "prop-types";

import { MovieDetails, MovieLink, Placeholder, Poster } from "./MoviePoster.Styles";

const propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string,
        rating: PropTypes.string,
    }).isRequired
};

const MoviePoster = ({ movie }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showPlaceHolder, setShowPlaceHolder] = useState(false);

    /**
     * capture image loading error and show 
     * placeholder when image does not load
     */
    const onError = () => setShowPlaceHolder(true);

    useEffect(() => {
        if(!movie.posterUrl) {
            setShowPlaceHolder(true);
        }
    }, [movie.posterUrl]);

    return(
        <MovieLink href={`/movie/${movie.id}`}>
            {showPlaceHolder
                ? <Placeholder>
                    <Text as="div">{movie.title}</Text>
                    {!!movie.rating && <Badge size="2" color="yellow" variant="solid">{movie.rating}</Badge>}
                </Placeholder>
                : <Poster 
                    src={movie.posterUrl} alt={movie.title} onError={onError}
                    onMouseEnter={()=> setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}
                />
            }
            {showDetails &&
                <MovieDetails direction="row" gap="2" align="center">
                    <Text as="div" style={{flex: 1}}>{movie.title}</Text>
                    <Badge size="2" color="yellow" variant="solid">{movie.rating}</Badge>
                </MovieDetails>
            }
        </MovieLink>
    );
};

MoviePoster.propTypes = propTypes;
export default MoviePoster;