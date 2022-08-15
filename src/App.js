import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nome Completo" {...register("name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="datetime" placeholder="Data de Nascimento" {...register("birthDate", {required: true})} />
      <select {...register("gender", { required: true })}>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Não Binário/Prefiro não declarar">Não Binário/Prefiro não declarar</option>
      </select>
      <select {...register("education", { required: true })}>
        <option value="Superior completo">Superior completo</option>
        <option value="Superior incompleto">Superior incompleto</option>
        <option value="Ensino médio completo">Ensino médio completo</option>
        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
        <option value="Ensino fundamental completo">Ensino fundamental completo</option>
        <option value="Ensino fundamental incompleto">Ensino fundamental incompleto</option>
      </select>

      <input type="submit" />
    </form>
  );
}