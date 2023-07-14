export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToPostListPage = (navigate) => {
    navigate("/post")
}

export const goToSignupPage = (navigate) => {
    navigate("/signup")
}

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

