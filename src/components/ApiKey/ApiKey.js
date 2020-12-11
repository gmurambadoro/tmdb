import React from "react";
import {Badge} from "react-bootstrap";

export default function ApiKey({ value }) {
    return <Badge variant={"secondary"}>API KEY: {value || 'Not Set'}</Badge>
}