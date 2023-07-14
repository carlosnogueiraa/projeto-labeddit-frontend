import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { getToken } from "../../../constants/getToken";
import { createComments } from "../../../services/createComments";
import { getCommentsByPostId } from "../../../services/getCommentsByPostId";
import { getPostById } from "../../../services/getPostById";
import { Container } from "../PostView/styles"
import CustomButton from "../../../components/CustomButton";
import CardList from "../../../components/Card";


export default function CommentsView() {
    const postData = useAppSelector((state) => state.postSlice.posts)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>()

    type Input = {
        content: string
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<Input>()

    const onSubmit: SubmitHandler<Input> = (data) => {
        const token = getToken()

        if (!token) {
            return
        }

        if (!id) {
            return
        }

        if (data.content === '') {
            return
        }

        createComments(token, data.content, id, setIsLoading)
        getCommentsByPostId(id, token, dispatch)
        getPostById(id, token, dispatch)

        reset()
    }
    const commentsData = useAppSelector((state) => state.commentsSlice.comments)

    useEffect(() => {
        const token = getToken()

        if (!token) {
            return
        }

        if (!id) {
            return
        }

        getCommentsByPostId(id, token, dispatch)
    }, [isLoading])

    return (
        <Container>
            <section>
                {postData.map((post) => (
                    <CardList
                        key={post.id}
                        postId={post.id}
                        userName={post.owner.name}
                        content={post.content}
                        likes={post.likes}
                        comments={post.comments}
                    />
                ))}
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea defaultValue=''
                    {...register('content')}
                    placeholder="Escreva seu post..."
                />
                <CustomButton text="Responder" isLoading={isLoading} />
            </form>
            <section>
                {commentsData.map((comments) => (
                    <CardList 
                        key={comments.id}
                        postId={comments.id}
                        userName={comments.owner.name}
                        content={comments.content}
                        likes={comments.likes}
                    />
                ))}
            </section>
        </Container>
    )
}

