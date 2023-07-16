import { Dispatch } from "@reduxjs/toolkit";
import api from "./api";
import { setComments } from "../redux/commentsReducer";

export const getCommentsByPostId = async (
    postId: string,
    token: string,
    dispatch: Dispatch
) => {
    const url = `/comments/${postId}`

    const headers = {
        Authorization: token
    }

    try {
        const result = await api.get(url, { headers })
        const comments = result.data
        dispatch(setComments(comments))

        return comments
    } catch (error) {
        console.error('Erro ao recuperar os comentários: ', error);
        throw Error
    }
}