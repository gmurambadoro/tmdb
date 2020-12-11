import React, {useEffect, useState} from "react";
import {tmdb} from "../../services/tmdb";
import Layout from "../Layout/Layout";

export default function App() {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        setApiKey(String(localStorage.getItem('api.themoviedb.org.api_key')).trim().toString());
    }, []);

    useEffect(() => {
        const api = tmdb();

        api.get('/movie/top_rated')
            .then(data => console.log(data.data))
            .catch(err => console.log(err));
    }, []);

    const handleApiKeyChanged = key => {
        setApiKey(key);

        localStorage.setItem('api.themoviedb.org.api_key', String(key).trim().toString());
    };

    return (
        <Layout handleApiKeyChanged={handleApiKeyChanged} apiKey={apiKey} />
    );
}
