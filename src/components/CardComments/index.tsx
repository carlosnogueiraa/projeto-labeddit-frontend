import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { getToken } from "../../constants/getToken"
import { useDispatch } from "react-redux"
import { likesDislikesComments } from "../../services/createLikeInComments"
import { Container } from "./styles"
import likeIcon from "../../assets/likeIcon.svg"
import dislikeIcon from "../../assets/dislikeIcon.svg"
import commentsIcon from "../../assets/commentsIcon.svg"


export interface propsCardPost {
    commentsId: string
    userName: string
    content: string
    likes: number
    comments?: number
}

export default function CardComments({
    commentsId,
    userName,
    content,
    likes,
    comments
}: propsCardPost) {
    const location = useLocation()
    const url = location.pathname
    const { id } = useParams() as { id: string }
    const token = getToken() as string
    const dispatch = useDispatch()

    return (
        <Container>
            <header>
                <h2>Enviado por: {userName}</h2>
            </header>
            <main>
                <span>{content}</span>
            </main>
            <footer>
                <div>
                    <button
                        onClick={() => {
                            likesDislikesComments(commentsId, token, id, 1, dispatch)
                        }}
                    >
                        <img src={likeIcon} alt='Ícone de like' />
                    </button>
                    <span>{likes}</span>
                    <button
                        onClick={() => {
                            likesDislikesComments(commentsId, token, id, 0, dispatch)
                        }}
                    >
                        <img src={dislikeIcon} alt='Ícone de dislike' />
                    </button>
                </div>
                {url === '/postView' && (
                    <div>
                        <span>{comments}</span>
                        <button>
                            <img src={commentsIcon} alt='Ícone de comentários' />
                        </button>
                    </div>
                )}
            </footer>
        </Container>
    )
}