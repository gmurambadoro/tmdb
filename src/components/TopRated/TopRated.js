import React, {useEffect, useState} from "react";
import {tmdb as api} from "../../services/tmdb";
import {Badge, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Movie from "../Movie/Movie";

export default function TopRated({ apiKey }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api(apiKey).get('/movie/top_rated').then(data => {
            const {results} = data.data

            setMovies(results);
        }).catch(err => {
            console.error(err.message);
        });
    }, [apiKey]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h2>Top Rated Movies <Badge variant={"info"}>{movies.length}</Badge> </h2>
                </Col>
            </Row>

            <Row>
                {movies.map(m => (
                    <Col md={4} key={m.id}>
                        <Movie movie={m} />
                    </Col>
                ) )}
            </Row>
        </React.Fragment>
    );
}