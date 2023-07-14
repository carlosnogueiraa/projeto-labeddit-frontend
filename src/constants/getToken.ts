import { key } from "../services/createPost"


export function getToken(): undefined | string {
    const token = localStorage.getItem(key)

    if (!token) {
        return undefined
    } else {
        return token
    }
}