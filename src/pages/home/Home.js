import { useMemo } from "react";
import { Container, Spinner } from "@radix-ui/themes";

import { useData } from "../../contexts/dataContext";
import GenrePreview from "../../components/genrePreview/GenrePreview";
import SearchForm from "../../components/searchForm/SearchForm";
import { BatchLink, BatchLinkContainer} from "./Home.Styles";

const Home = () => {
    const { fetchNextBatch, genres, genresData, isLoading } = useData();

    /**
     * Filter genres to only those that have data available
     */
    const previews = useMemo(() => {
        const genreDataKeys = Object.keys(genresData);
        return genres.filter((genre) => genreDataKeys.includes(genre.id));
    }, [genres, genresData]);
    
    return (
        <>
            <SearchForm />

            <Container size="4">
                <Spinner size="3" loading={isLoading}>
                    {previews.map((genre) => <GenrePreview key={genre.id} genre={genre} />)}

                    <BatchLinkContainer>
                        <BatchLink href="#" onClick={fetchNextBatch}>Load More</BatchLink>
                    </BatchLinkContainer>
                </Spinner>
            </Container>
        </>
    );
};

export default Home;