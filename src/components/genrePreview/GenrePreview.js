import { useMemo } from "react";
import PropTypes from "prop-types";
import { Flex } from "@radix-ui/themes";

import { useData } from "../../contexts/dataContext";
import MoviePoster from "../moviePoster/MoviePoster";
import { GenreLinks, GenreName } from "./GenrePreview.Styles";

const propsTypes = {
    genre: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired
};

const THRESHOLD = 7;

const GenrePreview = ({ genre }) => {
    const { genresData } = useData();

    const movies = useMemo(() => genresData[genre.id], [genresData, genre.id]);

    return (
        <Flex direction="column" gap="2">
            <Flex direction="row">
                <GenreName as="h2">{genre.title}</GenreName>
                <GenreLinks href={`/search?genre=${genre.id}`}>See All</GenreLinks>
            </Flex>

            <Flex direction="row" gap="4">
                {movies?.filter((_, index) => index < THRESHOLD).map(movie =>
                    <MoviePoster key={movie.id} movie={movie} />
                )}
            </Flex>
        </Flex>
    );
};

GenrePreview.propsTypes = propsTypes;
export default GenrePreview;