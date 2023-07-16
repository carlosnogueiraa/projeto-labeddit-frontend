import React from "react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { useDispatch } from "react-redux"
import { SubmitHandler, useForm } from "react-hook-form";
import { getToken } from "../../../constants/getToken";
import { createPost } from "../../../services/createPost";
import { getAllPosts } from "../../../services/getAllPosts";
import { Container } from "./styles";
import CustomButton from "../../../components/CustomButton";
import CardList from "../../../components/Card";


export default function PostView() {
    const postData = useAppSelector((state) => state.postSlice.posts)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(false)

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

        createPost(token, data.content, dispatch)

        reset()
    }
    useEffect(() => {
        const token = getToken()

        if (!token) {
            return
        }

        getAllPosts(token, dispatch)
    }, [])

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea defaultValue=''
                    {...register('content')}
                    placeholder="Escreva seu post..."
                />
                <CustomButton text="Postar" isLoading={isLoading} />
                <span></span>
            </form>
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
        </Container>
    )
}