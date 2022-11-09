import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import useAuth from '../../hooks/useAuth';
import toast, {Toaster} from 'react-hot-toast';

function ProjectItem({name, description, project_id, img_id, openModal, setCurrProject}) {
    const {user} = useAuth()

    function voteOnProject(){

        api.get(`/projects/vote/${project_id}/${user.email}`)
        .then(() => {
            
            toast.success("Votado com sucesso!")
        })
        .catch(()=> {
          toast.error("Erro ao votar!")
        })
        }

    return (
        <div className="card">
              <div className={`card-image img-${img_id}`}>
              </div>
              <h2>{name}</h2>
              <p>{description}</p>
              <Link onClick={() => voteOnProject()}>Votar</Link>
        </div>
    )
}

export default function Dashboard(){
    const [projects, setProjects] = useState([])


    useEffect(() => {
        api.get('/projects')
        .then((response) => {
            setProjects(response.data)
        })
    }, [])
    
    return(
        <>
        <Toaster/>
        <div className="dash-container">
        <nav className="menu" tabIndex="0">
          <div className="smartphone-menu-trigger">
          </div>
          <header className="avatar">
            <img src={logo}/>
            <h2 style={{color: "white"}}>Fatech </h2>
          </header>
        </nav>      
        <main>
          <section className="container">
            {projects.map((project)=> <ProjectItem key={project.id} name={project.name} description={project.description} project_id={project.id} img_id={project.img_id} />)}
          </section>   
        </main>
      </div>
      </>
    )
}