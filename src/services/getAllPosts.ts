import { Dispatch } from "@reduxjs/toolkit";
import api from "./api";
import { setPosts } from "../redux/postReducer";


export const getAllPosts = async (
    token: string,
    dispatch: Dispatch
): Promise<void> => {
    const headers = {
        Authorization: token
    }

    try {
        const result = await api.get('/posts', { headers })
        const posts = result.data
        dispatch(setPosts(posts))
    } catch (error) {
        console.error('Erro ao recuperar os posts: ',error);
    }
    return
}