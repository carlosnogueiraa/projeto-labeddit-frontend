import { Dispatch } from "@reduxjs/toolkit";
import api from "./api";
import { getCommentsByPostId } from "./getCommentsByPostId";

export const likesDislikesComments = async (
    commentsId: string,
    token: string,
    postId: string,
    likes: number,
    dispatch: Dispatch
) => {
    const url = `/comments/likes/${commentsId}`

    const headers = {
        Authorization: token
    }

    const body = {
        postId,
        likes
    }

    try {
        const result = await api.post(url, body, { headers })
        getCommentsByPostId(postId, token, dispatch)
        result.data
    } catch (error) {
        console.error('Erro ao atualizar o like/dislike: ', error);
    }
}