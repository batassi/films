import axios from 'axios';

import API_PATHS from '../enums/apiPaths';

export const getData = async (path, authToken) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}${path}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getToken = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}${API_PATHS.getToken}`)
        return res.data;
    } catch (error) {
        console.error("Error fetching token:", error);
    }
};