import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { createNewComments } from "../../../services/createNewComments";
import { getCommentsByPostId } from "../../../services/getCommentsByPostId";
import { Container } from "../PostView/styles"
import CustomButton from "../../../components/CustomButton";
import CardList from "../../../components/Card";
import { key } from "../../../services/createPost";
import usePostById from "../../../hooks/usePostById";
import { Post } from "../../../redux/postReducer";
import CardComments from "../../../components/CardComments";


export default function CommentsView() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams() as { id: string }
    const token = localStorage.getItem(key) as string
    const postById = usePostById(id, token)

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
        createNewComments(token, data.content, id, dispatch)

        reset()
    }

    const commentsData = useAppSelector((state) => state.commentsSlice.comments)

    useEffect(() => {
        getCommentsByPostId(id, token, dispatch)
        postById.getPostById()
    }, [])

    return (
        <Container>
            <section>
                {postById.data.map((post: Post) => (
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
                    <CardComments 
                        key={comments.id}
                        commentsId={comments.id}
                        userName={comments.owner.name}
                        content={comments.content}
                        likes={comments.likes}
                        comments={comments.comments}
                    />
                ))}
            </section>
        </Container>
    )
}

