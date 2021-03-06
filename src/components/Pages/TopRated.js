import React, {useEffect, useState} from "react";
import {tmdb} from "../../services/tmdb";
import {Badge, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Movie from "../Movie/Movie";
import Error from "../Error/Error";
import {Link} from "react-router-dom";

export default function TopRated({ apiKey, configuration }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiKey && tmdb(apiKey).get('/movie/top_rated').then(data => {
            const {results} = data.data

            setMovies(results);
            setError(null);
        }).catch(err => {
            setError(err);
            setMovies([]);
        });
    }, [apiKey]);

    let componentFragment;

    if (error) {
        componentFragment = <Error error={error} />
    } else {
        componentFragment = (
            <React.Fragment>
                <Row>
                    <Col>
                        <h2>Top Rated Movies <Badge variant={"info"}>{movies.length}</Badge> </h2>
                    </Col>
                </Row>

                <Row>
                    {movies.map(m => (
                        <Col md={4} key={m.id}>
                            <Movie configuration={configuration} movie={m} />
                        </Col>
                    ) )}
                </Row>
            </React.Fragment>
        );
    }

    return componentFragment;
}