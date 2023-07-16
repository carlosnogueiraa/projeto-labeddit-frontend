import React from "react"
import { Container } from "./styles"


interface propsButton {
    text: string
    isLoading?: boolean
}

export default function CustomButton({
    text,
    isLoading
}: propsButton) {
    return (
        <Container>
            {isLoading ? <div className="loading"></div> : text}
        </Container>
    )
}