import React from 'react';
import './Register.css';
import logo from '../../assets/img/logo.png';
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form';
import {api} from '../../services/api';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function Register() {

    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        data.name = data.firstName + " " + data.lastName
        delete data.firstName
        delete data.lastName
        console.log(data)
        api.post('/user/register', data)
        .then(data => {
            console.log(data)
            if (data.status === 201) {
                toast.success("Usuario registrado com sucesso! um convite com QRCode foi enviado para seu e-mail!", {duration: 10000})
            }
        })
        .catch(err => {
            toast.error(`Algo de errado aconteceu: ${err.response?.data?.detail ?? "Erro interno" }`, {duration: 5000})
        })       

    }
    return (
        <>
        <div><Toaster/></div>
        <div className="register-body">
        <div className="container">
            <div className="form-image">  
                <img src={logo} alt="Logo Fatech"/>
            </div>
            <div className="form" onSubmit={handleSubmit(onSubmit)}>
                <form action="#">
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
                            <input id="firstname"type="text" name="firstname" placeholder="Digite seu primeiro nome"  {...register("firstName", {required: true, maxLength: 80})}  required/>
                       </div>
                       <div className="input-box">
                            <label htmlFor="lastname">Ultimo nome</label>
                            <input id="lasttname"type="text" name="lasttname" placeholder="Digite seu sobrenome" {...register("lastName", {required: true, maxLength: 80})} required/>
                       </div>
                       <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input id="email"type="email" name="email" placeholder="Digite seu email"  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}  required/>
                       </div>
                       <div className="input-box">
                            <label htmlFor="number">Celular</label>
                            <InputMask id="number" type="tel" name="number" placeholder="(xx) xxxxx-xxxx" mask={"(99) 99999-9999"} required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Senha</label>
                            <input id="password"type="password" name="password" placeholder="Digite sua senha"  {...register("password", {required: true})} required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="confirmpassword">Confirme sua senha</label>
                            <input id="confirmpassword"type="password" name="confirmpassword" placeholder="Digite seu primeiro nome" required/>
                        </div>
                    </div>
                    <div className="gender-inputs">
                        <div className="gender-title">
                            <h6>Gênero</h6>
                        </div>
                        <div className="gender-group">
                            <div className="gender-input"> 
                                <input type="radio" id="female" name="gender" value="female" {...register("gender", { required: true })}/>
                                <label htmlFor="female">Feminino</label>
                            </div>
                            <div className="gender-input"> 
                                <input type="radio" id="male" name="gender" value="male" {...register("gender", { required: true })}/>
                                <label htmlFor="male">Masculino</label>
                            </div>
                            <div className="gender-input"> 
                                <input type="radio" id="others" name="gender" value="other" {...register("gender", { required: true })}/>
                                <label htmlFor="others">Outros</label>
                            </div>
                        </div>
                    </div>
                    <div className="type-inputs">
                        <div className="type-title">
                            <h6>Tipo</h6>
                        </div>
                        <div className="type-group">
                            <div className="type-input"> 
                                <input type="radio" id="guest" name="type" value="guest" {...register("type", { required: true })}/>
                                <label htmlFor="convidado">Convidado</label>
                            </div>
                            <div className="type-input"> 
                                <input type="radio" id="student" name="type" value="student" {...register("type", { required: true })}/>
                                <label htmlFor="student">Aluno</label>
                            </div>
                            <div className="type-input"> 
                                <input type="radio" id="teacher" name="type" value="teacher" {...register("type", { required: true })}/>
                                <label htmlFor="teacher">Professor</label>
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
        </>
    )
}