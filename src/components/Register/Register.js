import React from 'react';
import './Register.css';
import logo from '../../assets/img/logo.png';
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post(process.env.BACKEND_URL, data)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
        <div className="register-body">
        <div className="container">
        <div className="form-image">  
            <img src={logo}/>
        </div>
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-header">
                    <div className="title">
                        <h1>Cadastre-se</h1>
                    </div>
                    <div className="login-button">
                        <button><Link to="/login">Entrar</Link></button>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-box">
                        <label htmlFor="firstname">Primeiro nome</label>
                        <input id="firstname"type="text" name="firstname" placeholder="Digite seu primeiro nome"  {...register("firstName", {required: true, maxLength: 80})} required/>
                   </div>
                   <div className="input-box">
                        <label htmlFor="lastname">Ultimo nome</label>
                        <input id="lasttname"type="text" name="lasttname" placeholder="Digite seu sobrenome"  {...register("lastName", {required: true, maxLength: 80})} required/>
                   </div>
                   <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input id="email"type="email" name="email" placeholder="Digite seu email"  {...register("email", {required: true, pattern: /^\S+@\S+$/i})} required />
                   </div>
                   <div className="input-box">
                        <label htmlFor="number">Celular</label>
                        <InputMask id="number" type="tel" name="number" placeholder="(xx) xxxxx-xxxx" mask={"(99) 99999-9999"} {...register("phone", {required: true})} required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Senha</label>
                        <input id="password"type="password" name="password" placeholder="Digite sua senha" {...register("password", {required: true})} required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirmpassword">Confirme sua senha</label>
                        <input id="confirmpassword"type="password" name="confirmpassword" placeholder="Confirme sua senha" {...register("confirmPassword", {required: true})} required/>
                    </div>
                </div>
                <div className="gender-inputs">
                    <div className="gender-title">
                        <h6>Gênero</h6>
                    </div>  
                    <div className="gender-group">
                        <div className="gender-input"> 
                            <input type="radio" id="female" name="gender" {...register("gender", { required: true })}/>
                            <label htmlFor="female">Feminino</label>
                        </div>
                        <div className="gender-input"> 
                            <input type="radio" id="male" name="gender" {...register("gender", { required: true })}/>
                            <label htmlFor="male">Masculino</label>
                        </div>
                        <div className="gender-input"> 
                            <input type="radio" id="others" name="gender" {...register("gender", { required: true })}/>
                            <label htmlFor="others">Outros</label>
                        </div>
                        <div className="gender-input"> 
                            <input type="radio" id="none" name="gender" {...register("gender", { required: true })}/>
                            <label htmlFor="none">Prefiro não dizer</label>
                        </div>
                    </div>
                </div>
                <div className="continue-button">
                    <input type="submit" value="Finalizar"/>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}