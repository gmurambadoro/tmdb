import React from "react";
import {Card} from "react-bootstrap";

export default function Movie({movie}) {
    const {title, backdrop_path: backdropPath, release_date: releaseDate} = movie;

    return (
        <Card className={"m-1"}>
            <Card.Body>
                <h5>{title}</h5>
                <p className="card-text">{releaseDate}</p>
            </Card.Body>
        </Card>
    );
};