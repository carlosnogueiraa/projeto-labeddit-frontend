import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route index exact element={<LoginPage />} />
            <Route path="/post" element={<PostListPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
)

export default Router