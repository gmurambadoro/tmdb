import React from "react";

export default function Error({message}) {
    return (
        <React.Fragment>
            <h2>Error</h2>

            <p>{message}</p>
        </React.Fragment>
    );
};