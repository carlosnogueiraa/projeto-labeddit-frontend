import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { key } from '../../services/createPost';
import { Container } from './styles';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import api from '../../services/api';
import CustomButton from '../../components/CustomButton';
import logo from "../../assets/logo.svg"

const schema = yup.object({
    email: yup
        .string()
        .required('O email é obrigatório')
        .email('O email deve ser válido'),
    password: yup
        .string()
        .required('A senha é obrigatória')
}).required()

function MainPage() {
    const [isErrorInput, setIsErrorInput] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<string>('password')
    const [showError, setShowError] = useState<string>('')
    const navigate = useNavigate()

    const handleTogglePassword = () => {
        if (showPassword === 'text') {
            setShowPassword('password')
        } else {
            setShowPassword('text')
        }
    }

    const handleCreateAccount = () => {
        navigate('/signup')
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setIsErrorInput(true)
        } else {
            setIsErrorInput(false)
        }
    }, [errors])

    interface login {
        email: string
        password: string
    }

    const onSubmit = async (data: login) => {
        setIsLoading(true)

        const { email, password } = data

        try {
            const result = await api
                .post('/users/login', { email, password })
            const token = result.data.token

            localStorage.setItem(key, token)
            navigate('/postView')
        } catch (error) {
            const errorMsg = (error as any).response?.data?.error
            setShowError(errorMsg)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Container isErrorInput={isErrorInput}>
            <header>
                <div>
                    <img src={logo} alt="Logo LabEddit" />
                </div>
                <main>
                    <h1>LabEddit</h1>
                </main>
                <footer>
                    <p>O projeto de rede social da Labenu</p>
                </footer>
            </header>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('email')} placeholder='E-mail' />
                    <p>{errors.email?.message}</p>

                    <label>
                        <input
                            {...register('password')}
                            placeholder='Senha'
                            type={showPassword}
                        />
                        <button
                            type='button'
                            onClick={handleTogglePassword}
                            className='showPassword'
                        >
                            {showPassword === 'password' ? <IoMdEyeOff /> : <IoMdEye />}
                        </button>
                        <p>{errors.password?.message}</p>
                        <p>{showError}</p>
                    </label>
                    <CustomButton text='Continuar' isLoading={isLoading} />
                    <span></span>
                </form>
            </main>
            <footer>
                <button 
                    onClick={() => {
                        handleCreateAccount()
                        }
                    }
                >
                    Crie uma conta!
                </button>
            </footer>
        </Container>
    )
}

export default MainPage
