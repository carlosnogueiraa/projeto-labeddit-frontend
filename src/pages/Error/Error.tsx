import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles"

export default function ErrorPage() {
    const location = useLocation()
    const error = location.state?.error

    return(
        <Container>
            <h1>Erro</h1>
            <p>Ocorreu um erro inesperado</p>
            {error && (
                <p>
                    {error.statusText || error.message}
                </p>
            )}
        </Container>
    )
}