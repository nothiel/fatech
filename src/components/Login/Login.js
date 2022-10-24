import React from 'react'
import './Login.css';
import logo from '../../assets/img/logo.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        console.log(errors)
    }
    return (
        <div className="loginBody">
        <div className="container">
            <div className="form-image">  
                <img src={logo}/>
            </div>
            <div className="form">
                <form action="#"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-header">
                        <div className="title">
                            <h1>Login</h1>
                        </div>
                        <div className="register-button">
                            <button><Link to="/register">Inscreva-se</Link></button>
                        </div>
                    </div>
                    <div className="input-group">
                       <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input id="email"type="email" name="email" placeholder="Digite seu email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                       </div>
                        <div className="input-box">
                            <label htmlFor="password">Senha</label>
                            <input id="password"type="password" name="password" placeholder="Digite sua senha" {...register("birth_date", {required: true})}/>
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