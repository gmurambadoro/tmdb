import React from "react";
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import TopRated from "../TopRated/TopRated";
import NotFound from "../Error/NotFound";

export default function Layout({ handleApiKeyChanged, apiKey, api }) {
    const setApiKey = () => {
        const key = prompt('Enter your API Key: ');

        key && handleApiKeyChanged(key);
    };

    return (
        <BrowserRouter>
            <header>
                <Navbar bg="dark" variant="dark" sticky={"top"} className="mb-2">
                    <Navbar.Brand>TMDB</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Top Rated</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
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
                    <Switch>
                        <Route path="/" exact>
                            <TopRated apiKey={apiKey}  />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </Container>
            </main>

            <footer>
                Footer
            </footer>
        </BrowserRouter>
    );
};