import React from "react";

export default function Error({error}) {
    return (
        <React.Fragment>
            <h2>Error</h2>

            <p>{error.message}</p>
        </React.Fragment>
    );
};