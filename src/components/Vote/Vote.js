import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
export default function Vote() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {project_id} = useParams()
  
  const onSubmit = data => {   

        api.get(`/projects/vote/${project_id}/${data.email}`)
        .then(() => {
            toast.success("Votado com sucesso!")
        })
        .catch(() => {
            toast.error("Erro ao votar")
        })
        
  }
  
  return (
    <>
    <Toaster/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="undefined" placeholder="Digite seu email..." {...register('email')} />
      <input type="submit" />
    </form>
    </>
  );
}