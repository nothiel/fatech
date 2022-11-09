import React from 'react'
import './Login.css';
import logo from '../../assets/img/logo.png';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signed, signIn } = useAuth();
    const navigate = useNavigate()
    if (signed) {
        navigate('/dashboard')
      }

    const onSubmit = (data) => {
        if (!signIn(data)) {
            toast.error("Erro ao logar")
        }
    }
    return (
        <div className="loginBody">
        <div><Toaster/></div>
        <div className="container">
            <div className="form-image">  
                <img src={logo} alt="fatech"/>
            </div>
            <div className="form">
                <form action="#"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-header">
                        <div className="title">
                            <h1>Login</h1>
                        </div>
                        <div className="register-button">
                        <Link to="/register"><button type="button" style={{color: 'white'}}>Inscreva-se</button></Link>
                        </div>
                    </div>
                    <div className="input-group">
                       <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input id="email"type="email" name="email" placeholder="Digite seu email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                       </div>
                        <div className="input-box">
                            <label htmlFor="password">Senha</label>
                            <input id="password"type="password" name="password" placeholder="Digite sua senha" {...register("password", {required: true})}/>
                        </div>
                    </div>
                    <div className="continue-button">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}