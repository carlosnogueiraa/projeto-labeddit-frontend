import React from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { likesDislikesPost } from "../../services/createLikesDislikes"
import { ContainerCard } from "./styles"
import { getCommentsByPostId } from "../../services/getCommentsByPostId"
import { getToken } from "../../constants/getToken"
import dislikeIcon from "../../assets/dislikeIcon.svg"
import likeIcon from "../../assets/likeIcon.svg"
import commentsIcon from "../../assets/commentsIcon.svg"

export interface propsCard {
    postId: string
    userName: string
    content: string
    likes: number
    comments?: number
}

export default function CardList({ 
    postId, 
    userName, 
    content, 
    likes, 
    comments 
}: propsCard) {
    const navigate = useNavigate()
    const location = useLocation()
    const token = getToken() as string
    const dispatch = useDispatch()
    const url = location.pathname

    const commentsNavigate = (url: string) => {
        if (url === '/postView') {
            navigate(`/commentsView/${postId}`)
        }
    }

    return (
        <ContainerCard>
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
                            likesDislikesPost(postId, token, 1, url, dispatch)
                        }}
                    >
                        <img src={likeIcon} alt='Ícone de like' />
                    </button>
                    <span className='likes'>{likes}</span>
                    <button
                        onClick={() => {
                            likesDislikesPost(postId, token, 0, url, dispatch)
                        }}
                    >
                        <img src={dislikeIcon} alt='Ícone de dislike' />
                    </button>
                </div>
                {url === '/postView' && (
                    <div>
                        <span>{comments}</span>
                        <button
                            onClick={() => {
                                commentsNavigate(url)
                                if (!token) {
                                    return
                                }
                                getCommentsByPostId(postId, token, dispatch)
                            }}
                        >
                            <img src={commentsIcon} alt='Ícone de comentários' />
                        </button>
                    </div>
                )}
            </footer>
        </ContainerCard>
    )
}