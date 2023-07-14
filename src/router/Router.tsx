import { createBrowserRouter } from "react-router-dom";
import React from "react";
import OutPostView from "../pages/OutPostView";
import ErrorPage from "../pages/Error/Error";
import CommentsView from "../pages/OutPostView/commentsView";
import PostView from "../pages/OutPostView/PostView";
import Main from "../pages/Main/Main";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />
    },
    {
        path: '/',
        element: <OutPostView />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'postView',
                element: <PostView />
            },
            {
                path: 'commentsView/:id',
                element: <CommentsView />
            }
        ]
    }
]) 

const RouterComponent = () => {
    return Router
}

export { Router, RouterComponent }