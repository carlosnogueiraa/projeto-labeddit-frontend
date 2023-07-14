import React from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";
import closeIcon from "../../assets/closeIcon.svg"
import logo from "../../assets/logo.svg"

export default function OutPostView() {
    const location = useLocation()
    const navigate = useNavigate()
    const { id } = useParams()

    const url = location.pathname
    const postNavigate = (url: string) => {
        if (url === `/commentsView/${id}`) {
            navigate('/postView')
        }
    }

    return (
        <Container>
            <header>
                {url === `/commentsView/${id}` && (
                    <button
                        onClick={() => {
                            postNavigate(url)
                        }}
                    >
                        <img src={closeIcon} alt="Voltar para os posts" />
                    </button>
                )}
                <img src={logo} alt="Logo Labenu" />
                <nav>
                    <button
                        onClick={() => {
                            localStorage.clear()
                        }}
                    >
                        <Link to='/'>
                            {url === '/signup' ? 'Entrar' : 'Logout'}
                        </Link>
                    </button>
                </nav>
            </header>
            <Outlet/>
        </Container>
    )
}