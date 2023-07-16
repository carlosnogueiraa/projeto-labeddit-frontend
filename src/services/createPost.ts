import { Dispatch } from "redux"
import api from "./api"
import { getAllPosts } from "./getAllPosts"

export const createPost = async (
    token: string,
    content: string,
    dispatch: Dispatch
) => {
    const url = `/posts`

    const headers = {
        Authorization: token
    }

    const body = {
        content
    }

    try {
        await api.post(url, body, { headers })
        getAllPosts(token, dispatch)
    } catch (error) {
        console.error('Erro ao criar post: ', error);
    }
}

export const key = '@labeddit'