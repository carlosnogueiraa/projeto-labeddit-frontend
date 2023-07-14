import { Dispatch } from "@reduxjs/toolkit";
import api from "./api";
import { getAllPosts } from "./getAllPosts";
import { getPostById } from "./getPostById";

export const likesDislikesComments = async (
    id: string,
    token: string,
    postId: string,
    like: number,
    endpoint: string,
    dispatch: Dispatch
) => {
    const url = `/comments/likes/${id}`
    const headers = {
        Authorization: token
    }

    const body = {
        postId,
        like
    }

    try {
        const result = await api.post(url, body, { headers })
        result.data

        if (endpoint === '/postView') {
            getAllPosts(token, dispatch)
        } else {
            getPostById(id, token, dispatch)
        }
    } catch (error) {
        console.error('Erro ao atualizar o like/dislike: ', error);
    }
}