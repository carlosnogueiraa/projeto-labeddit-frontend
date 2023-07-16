import { Dispatch } from "redux";
import api from "./api";
import { getCommentsByPostId } from "./getCommentsByPostId";


export const createNewComments = async (
    token: string,
    content: string,
    postId: string,
    dispatch: Dispatch
) => {
    const url = `/comments/${postId}`

    const headers = {
        Authorization: token
    }

    const body = {
        content
    }

    try {
        await api.post(url, body, { headers })
        getCommentsByPostId(postId, token, dispatch)
    } catch (error) {
        console.error('Erro ao criar post: ', error)
    }
}

export const key = '@labeddit'