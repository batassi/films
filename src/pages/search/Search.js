import { useEffect, useState } from "react";
import { useSearch  } from "wouter";
import { Container, Flex, Spinner} from "@radix-ui/themes";

import { useData } from "../../contexts/dataContext";
import MoviePoster from "../../components/moviePoster/MoviePoster";
import Pagination from "../../components/pagination/Pagination";
import SearchForm from "../../components/searchForm/SearchForm";
import { NoResultMessage } from "./Search.Styles";

const Search = () => {
    const { searchMovies } = useData();
    const queryString = useSearch();
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState({ data: []});

    useEffect(() => {
        const searchParams = new URLSearchParams(queryString);
        const genre = searchParams.get("genre") || undefined;
        const search = searchParams.get("query") || undefined;
        const page = searchParams.get("page") || 1;

        if(genre || search) {
            const fetchData = async () => {
                setIsLoading(true);
                const params = { page };
                if(genre) params.genre = genre; 
                if(search) params.search = search;

                const data = await searchMovies(params);
                setSearchResults(data);
                setIsLoading(false);
            };

            fetchData();
        }
    }, [queryString, searchMovies]);

    return (
        <>
            <SearchForm />

            <Container size="4">
                <Spinner size="3" loading={isLoading}>
                    <Flex direction="row" gap="3" wrap="wrap" justify="center">
                        {searchResults?.data.map(movie => <MoviePoster key={movie.id} movie={movie} />)}
                    </Flex>

                    {searchResults?.data.length === 0 && !isLoading && 
                        <NoResultMessage as="h2">No results found</NoResultMessage>
                    }

                    {searchResults?.totalPages > 1 && <Pagination totalPages={searchResults.totalPages} />}
                </Spinner>
            </Container>
        </>
    );
};

export default Search;