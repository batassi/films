import { useContext, useEffect, useState, createContext } from "react";

import API_PATHS from "../enums/apiPaths";
import { getData, getToken } from "../utils/httpRequest";

const DataContext = createContext();

const useDataProvider = () => {
    const [authToken, setAuthToken] = useState("");
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchToken() {
            const resp = await getToken();
            setAuthToken(resp.token);
        }

        fetchToken();
    }, []);

    useEffect(() => {
        async function fetchGenres() {
            const resp = await getData(API_PATHS.getGenres, authToken);
            setGenres(resp.data);
        }

        if(!!authToken) {
            fetchGenres();
        }
    }, [authToken]);

    return {
        genres
    };
};

export function DataProvider({ children }) {
    const data = useDataProvider();
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);