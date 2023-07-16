import { Dispatch } from "@reduxjs/toolkit";
import api from "./api";
import { getAllPosts } from "./getAllPosts";
import { getCommentsByPostId } from "./getCommentsByPostId";

export const likesDislikesPost = async (
    id: string,
    token: string,
    likeValue: number,
    endpoint: string,
    dispatch: Dispatch
) => {
    const url = `/posts/${id}`
    const headers = {
        Authorization: token
    }

    const body = {
        likes: likeValue
    }

    try {
        await api.post(url, body, { headers })
        getAllPosts(token, dispatch)
        getCommentsByPostId(id, token, dispatch)
    } catch (error) {
        console.error('Erro ao atualizar o like/dislike: ', error);
    }
}