import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { Badge, Flex, Heading, Spinner } from "@radix-ui/themes";
import { Clapperboard } from "lucide-react";

import { useData } from "../../contexts/dataContext";
import { formatDuration, formatReleaseDate } from "../../utils/stringUtils";
import PersonList from "../../components/personList/PersonList";
import Rating from "../../components/rating/Rating";
import { Label } from "../../layout/label";
import {
    DetailsContainer, InfoContainer, InfoText, MoviePage, PeopleContainer,
    PosterContainer, PosterImage, PosterPlaceholder, Summary
} from "./Movie.Styles";

const Poster = ({ posterUrl, title }) => {
    const [showPlaceHolder, setShowPlaceHolder] = useState(!posterUrl);

    const onError = () => setShowPlaceHolder(true);

    return (
        <PosterContainer>
            {showPlaceHolder 
                ? <PosterPlaceholder><Clapperboard height="48" width="48" /></PosterPlaceholder>
                : <PosterImage src={posterUrl} alt={title} onError={onError} />
            }
        </PosterContainer>
    );
};

const Movie = () => {
    const params = useParams();
    const { getMovieDetails } = useData();
    const [details, setDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            const data = await getMovieDetails(params.id);
            setDetails(data);
            setIsLoading(false);
        };

        if(params.id) {
            fetchDetails();
        }
    }, [getMovieDetails, params.id]);

    return (
        <MoviePage size="4">
            <Spinner size="3" loading={isLoading}>
                {!!details &&
                    <>
                        <Flex direction="row" gap="4">
                            <Poster posterUrl={details.posterUrl} title={details.title} />
                            <DetailsContainer>
                                <Heading as="h2">{details.title}</Heading>

                                <InfoContainer direction="row" gap="2">
                                    {!!details.rating && <Badge size="2" color="yellow" variant="solid">{details.rating}</Badge>}
                                    {!!details.datePublished && <InfoText size="2">{formatReleaseDate(details.datePublished)}</InfoText>}
                                    <InfoText size="2">{formatDuration(details.duration)}</InfoText>
                                </InfoContainer>

                                <Summary as="p">
                                    <Label as="div">Summary</Label>
                                    {details.summary}
                                </Summary>

                                <Rating rating={details.ratingValue} max={details.bestRating} min={details.worstRating} />

                                <InfoContainer direction="column" gap="0">
                                    <Label as="div">Genres</Label>
                                    <Flex direction="row" gap="2" wrap="wrap">
                                        {details.genres.map((genre) => <Badge key={genre} size="2" color="blue">{genre.title}</Badge>)}
                                    </Flex>
                                </InfoContainer>
                            </DetailsContainer>
                        </Flex>

                        <PeopleContainer direction="row" gap="4">
                            <PersonList title="Directors" persons={details.directors} />
                            <PersonList title="Actors" persons={details.mainActors} />
                            <PersonList title="Writers" persons={details.writers} />
                        </PeopleContainer>
                    </>
                }
            </Spinner>
        </MoviePage>
    );
};

export default Movie;