import React, {useEffect, useState} from "react";
import {tmdb} from "../../services/tmdb";
import Layout from "../Layout/Layout";

export default function App() {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        const key = localStorage.getItem('api.themoviedb.org.api_key');

        setApiKey(String(key).trim().toString());
    }, []);

    const handleApiKeyChanged = key => {
        setApiKey(key);

        localStorage.setItem('api.themoviedb.org.api_key', String(key).trim().toString());
    };

    const api = tmdb(apiKey);

    return (
        <Layout handleApiKeyChanged={handleApiKeyChanged} apiKey={apiKey} api={api} />
    );
}
