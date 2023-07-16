import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from './styles';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import api from '../../services/api';
import CustomButton from '../../components/CustomButton';
import logo from "../../assets/logo.svg"
import { toast } from 'react-toastify';


function SignupPage() {
    interface bodyAPI {
        name: string
        email: string
        password: string
        terms: string
    }

    const schema = yup.object({
        name: yup
            .string()
            .required('O nome é obrigatório'),
        email: yup
            .string()
            .required('O email é obrigatório')
            .email('O email deve ser válido'),
        password: yup
            .string()
            .required('A senha é obrigatória'),
        terms: yup
            .string()
            .required()
            .oneOf(['true'], 'Você deve aceitar os termos')
    }).required()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async ({ name, email, password, terms }: bodyAPI) => {
        const body = {
            name,
            email,
            password,
            terms: terms ? 'accepted' : ''
        }

        try {
            await api.post('/users/signup', body)
            toast.success('Usuário atualizado com sucesso!')
            reset()
        } catch (error) {
            console.error('Erro ao criar a conta do usuário: ', error)
        }
    }

    return (
        <Container isErrorInput={false}>
            <header>
                <h2>
                    Olá, boas vindas ao <br /> LabEddit ;)
                </h2>
            </header>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <div>
                            <input 
                            {...register('name')} 
                            placeholder='Apelido' 
                            />
                            <p>{errors.name?.message}</p>
                        </div>

                        <div>
                            <input
                                {...register('email')}
                                placeholder='E-mail'
                            />
                            <p>{errors.email?.message}</p>
                        </div>

                        <div>
                            <input
                                {...register('password')}
                                placeholder='Senha'
                                type='password'
                            />
                            <p>{errors.password?.message}</p>
                        </div>
                    </label>
                    <div>
                        <span>
                            Ao continuar, você concorda com o nosso <a className='policy'>Contrato de 
                            usuário</a> e nossa <a>Política de Privacidade</a>
                        </span>
                        <label>
                            <input
                                {...register('terms')}
                                type='checkbox'
                            />
                            <span>
                                Eu concordo em receber emails sobre coisas legais
                                no Labeddit
                            </span>
                        </label>
                    </div>
                    <p>{errors.terms?.message}</p>
                    <CustomButton text='Cadastrar' />
                </form>
            </main>
            <footer></footer>
        </Container>
    )
}

export default SignupPage
