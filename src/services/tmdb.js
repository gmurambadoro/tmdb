import axios from 'axios';

const tmdb = apiKey => {
    const connection = axios.create({
        baseURL: `https://api.themoviedb.org/3`,
    });

    return {
        get: async url => connection.get(`${url}?api_key=${String(apiKey).trim()}`),
    }
};

export { tmdb };



