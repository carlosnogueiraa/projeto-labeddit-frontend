import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../app/store"


export interface Post {
    id: string
    content: string
    createdAt: string
    likes: number
    dislikes: number
    comments: number
    owner: {
        id: string,
        name: string
    }
}

export interface PostState {
    posts: Post[]
    loading: boolean
    error: unknown
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (
            state, 
            action: PayloadAction<Post[]>
        ) => {
            state.posts = action.payload
        }
    }
})

export const { setPosts } = postSlice.actions

export const selectCount = (state: RootState) => state.postSlice

export default postSlice.reducer