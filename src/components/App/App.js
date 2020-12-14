import React, {useEffect, useState} from "react";
import {tmdb} from "../../services/tmdb";
import Layout from "../Layout/Layout";

export default function App() {
    const [apiKey, setApiKey] = useState('');
    const [configuration, setConfiguration] = useState(null);

    useEffect(() => {
        const key = localStorage.getItem('api.themoviedb.org.api_key');

        setApiKey(String(key || '').trim().toString());
    }, []);

    const handleApiKeyChanged = key => {
        setApiKey(key);

        localStorage.setItem('api.themoviedb.org.api_key', String(key || '').trim().toString());
    };

    useEffect(() => {
        if (!apiKey) {
            localStorage.setItem('api.themoviedb.org.configuration.images', JSON.stringify({}));
            return;
        }

        tmdb(apiKey)
            .get('/configuration')
            .then(data => {
                const {images} = data.data;
                setConfiguration(images);
            })
            .catch(err => {
                setConfiguration(null);

                console.error(err)
            });
    }, [apiKey]);

    return (
        <Layout
            handleApiKeyChanged={handleApiKeyChanged}
            apiKey={apiKey}
            configuration={configuration ? configuration : null}
        />
    );
}
