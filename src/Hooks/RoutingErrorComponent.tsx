import { useRouteError } from "react-router-dom";
import React from "react";

interface ErrorObject {
    statusText: string,
    message: string
}

export default function RoutingErrorComponent() {

    const error = useRouteError() as ErrorObject

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    )
}