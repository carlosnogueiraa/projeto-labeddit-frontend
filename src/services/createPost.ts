import api from "./api"

export const createPost = async (
    token: string,
    content: string,
    state: (isLoading: boolean) => void
) => {
    const url = `/posts`
    state(true)

    const headers = {
        Authorization: token
    }

    const body = {
        content
    }

    try {
        const result = await api.post(url, body, { headers })
    } catch (error) {
        console.error('Erro ao criar post: ', error);
    } finally {
        state(false)
    }
}

export const key = '@labeddit'