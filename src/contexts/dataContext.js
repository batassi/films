import { useCallback, useContext, useEffect, useState, createContext } from "react";

import API_PATHS from "../enums/apiPaths";
import { getData, getToken } from "../utils/httpRequest";

const DataContext = createContext();

const BATCH_SIZE = 3;
const PREVIEW_SIZE = 7;

const useDataProvider = () => {
    const [authToken, setAuthToken] = useState("");
    const [genres, setGenres] = useState([]);
    const [genresData, setGenresData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Lazy load movies by genres in batches
     */
    const fetchMoviesByGenreBatch = useCallback(async () => {
        setIsLoading(true);
        const startIndex = Object.keys(genresData).length;
        const promises = [];
        
        for(let i = startIndex; i < Math.min(startIndex + BATCH_SIZE, genres.length); i++) {
            const genre = genres[i];
            promises.push(getData(`${API_PATHS.searchMovies}?genre=${genre.title}&limit=${PREVIEW_SIZE}`, authToken));
        }

        await Promise.all(promises).then(responses => {
            const data = {...genresData};
            for(let i = 0; i < responses.length; i++) {
                const genreId = genres[i+startIndex].id;
                const movies = responses[i].data;
                data[genreId] = movies;    
            }
            setGenresData(data);
            setIsLoading(false);
        });

    }, [authToken, genres, genresData]);

    /**
     * Search movies by genre and/or title
     */
    const searchMovies = async (queryParams) => {
        if(!authToken) return;

        const params = new URLSearchParams(queryParams);
        let path = `${API_PATHS.searchMovies}?${params.toString()}`;
        
        const resp = await getData(path, authToken);
        return resp;
    };

    /**
     * Fetch auth token on app load and store it.
     * This token will be used for subsequent API requests
     */
    useEffect(() => {
        async function fetchToken() {
            const resp = await getToken();
            setAuthToken(resp.token);
        }

        fetchToken();
    }, []);

    /**
     * Fetch genres data once the auth token is available and store it.
     */
    useEffect(() => {
        async function fetchGenres() {
            const resp = await getData(API_PATHS.getGenres, authToken);
            setGenres(resp.data);
        }

        if(!!authToken) {
            fetchGenres();
        }
    }, [authToken]);

    /**
     * Fetch first batch of movies per genre once genres are loaded
     */
    useEffect(() => {
        if(genres.length > 0 && Object.keys(genresData).length === 0) {
            fetchMoviesByGenreBatch();
        }
    }, [fetchMoviesByGenreBatch, genres, genresData]);

    return {
        fetchNextBatch: fetchMoviesByGenreBatch,
        genres,
        genresData,
        isLoading,
        searchMovies
    };
};

export function DataProvider({ children }) {
    const data = useDataProvider();
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);