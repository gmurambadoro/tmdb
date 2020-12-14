import React from "react";
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Layout({ handleApiKeyChanged, apiKey }) {
    const setApiKey = () => {
        const key = prompt('Enter your API Key: ');

        key && handleApiKeyChanged(key);
    };

    return (
        <React.Fragment>
            <header>
                <Navbar bg="dark" variant="dark" sticky={"top"}>
                    <Navbar.Brand>TMDB</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Top Rated</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            apiKey ? (
                                <span className="navbar-text mr-2 text-white">
                                    <i className="fas fa-key"/> {apiKey}
                                </span>
                            ) : null
                        }

                        <Button className="mr-1 text-uppercase small" variant="info" onClick={() => setApiKey()}>
                            Set API Key
                        </Button>
                    </Nav>
                </Navbar>
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