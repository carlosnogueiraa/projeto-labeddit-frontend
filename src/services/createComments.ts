import api from "./api"

export const createComments = async (
    token: string,
    content: string,
    id: string,
    state: (isLoading: boolean) => void
) => {
    const url = `/comments/${id}`
    state(true)

    const headers = {
        Authorization: token
    }

    const body = {
        content
    }

    try {
        await api.post(url, body, { headers })
    } catch (error) {
        console.error('Erro ao criar post: ', error);
    } finally {
        state(false)
    }
}

export const key = '@labeddit'