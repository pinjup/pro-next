import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useFetch(endpoint) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(endpoint);
        setData(response.data);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return data;
}
