import React, {useEffect, useState} from "react";
import {tmdb} from "../../services/tmdb";
import NotFound from "../Error/NotFound";
import {Button} from "react-bootstrap";

export default function Movie({apiKey, ...props}) {
    const [movie, setMovie] = useState(null);

    const {id: movieId} = props.match.params;

    useEffect(() => {
       apiKey && tmdb(apiKey)
            .get(`/movie/${movieId}`)
            .then(data => {
                setMovie({...data.data})
            });
    }, [apiKey, movieId]);

    console.log(props);

    if (movie === null) {
        return <NotFound />
    }

    const {title, overview} = movie;

    return (
        <React.Fragment>
            <h3>{title}</h3>

            <p>{overview}</p>

            <p>
                <Button onClick={() => props.history.goBack()}>Back</Button>
            </p>
        </React.Fragment>
    );
}