import React from "react";
import {Card} from "react-bootstrap";
import {imageUrl} from "../../services/helpers";
import {Link} from "react-router-dom";

export default function Movie({movie, configuration}) {
    const {id, title, backdrop_path: backdropPath, release_date: releaseDate, popularity} = movie;

    return (
        <Card className={"m-1 text-white"} as={Link} to={`/movie/${id}`}>
            <Card.Img src={imageUrl(configuration, backdropPath)} />
            <Card.ImgOverlay>
                <h5>{title}</h5>

                <p>
                    <i className="fas fa-calendar-alt"/> {releaseDate}
                </p>

                <p>
                    <i className="fas fa-heart" /> {popularity}
                </p>
            </Card.ImgOverlay>
        </Card>
    );
};