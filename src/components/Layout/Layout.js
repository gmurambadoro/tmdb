import React from "react";
import {Container} from "react-bootstrap";
import LineEntry from "../LineEntry/LineEntry";
import ApiKey from "../ApiKey/ApiKey";

export default function Layout({ handleApiKeyChanged, apiKey }) {
    return (
        <React.Fragment>
            <header>
                <LineEntry handleValueSubmitted={handleApiKeyChanged} />
                <ApiKey value={apiKey} />
            </header>

            <main>
                <Container>
                    Content
                </Container>
            </main>

            <footer>
                Footer
            </footer>
        </React.Fragment>
    );
};