import { Dispatch } from "@reduxjs/toolkit";
import api from "./api";
import { setPosts } from "../redux/postReducer";

export const getPostById = async (
    id: string,
    token: string,
    dispatch: Dispatch
): Promise<void> => {
    const headers = {
        Authorization: token
    }

    try {
        const result = await api.get(`/posts/${id}`, { headers })
        const posts = result.data
        dispatch(setPosts(posts))
    } catch (error) {
        console.error('Erro ao recuperar os posts: ', error);
    }
    return
}