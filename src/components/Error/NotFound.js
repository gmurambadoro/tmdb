import React from "react";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <React.Fragment>
            <h2>Error 404: Not Found</h2>

            <p>
                The page you are looking for does not exist. Go to the <Link to="/">homepage</Link> instead.
            </p>
        </React.Fragment>
    );
};