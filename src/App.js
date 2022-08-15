import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  const onSubmit = data => {
    console.log(data)
    data.age = _calculateAge(new Date(data.birth_date))
    // console.log(data)
    axios.post('http://localhost:8000/user/register', data).then(response => response.json()).then(data => console.log(data))
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nome Completo" {...register("name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="date" placeholder="Data de Nascimento" {...register("birth_date", {required: true})} />
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