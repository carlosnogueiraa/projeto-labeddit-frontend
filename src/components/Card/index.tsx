import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { likesDislikesPost } from "../../services/createLikesDislikes"
import { ContainerCard } from "./styles"
import { getPostById } from "../../services/getPostById"
import { getToken } from "../../constants/getToken"
import { likesDislikesComments } from "../../services/createLikeInComments"
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

const CardList = ({ postId, userName, content, likes, comments }: propsCard) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const token = getToken()
    const dispatch = useDispatch()
    const url = location.pathname
    const commentsNavigate = (pathname: string) => {
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
                            if (!token) {
                                return
                            }
                            if (url === '/postView') {
                                likesDislikesPost(postId, token, 1, url, dispatch)
                            } else {
                                if (!id) {
                                    return
                                }
                                likesDislikesComments(id, token, postId, 1, url, dispatch)
                            }
                        }}
                    >
                        <img src={likeIcon} alt='Ícone de like' />
                    </button>
                    <span>{likes}</span>
                    <button
                        onClick={() => {
                            if (!token) {
                                return
                            }
                            if (id === undefined) {
                                likesDislikesPost(postId, token, 0, url, dispatch)
                            } else {
                                likesDislikesComments(id, token, postId, 0, url, dispatch)
                            }
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
                                if (url === '/postView') {
                                    getPostById(postId, token, dispatch)
                                }
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

export default CardList