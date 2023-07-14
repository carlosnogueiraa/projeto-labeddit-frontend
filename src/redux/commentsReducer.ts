import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"


export interface Comments {
    id: string
    content: string
    createdAt: string
    likes: number
    dislikes: number
    comments: number
    owner: {
        id: string
        name: string
    }
}

export interface CommentsState {
    comments: Comments[]
    loading: boolean
    error: unknown
}

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments: (
            state,
            action: PayloadAction<any[]>
        ) => {
            state.comments = action.payload
        }
    }
})

export const { setComments } = commentsSlice.actions

export const selectCount = (state: RootState) => state.postSlice

export default commentsSlice.reducer