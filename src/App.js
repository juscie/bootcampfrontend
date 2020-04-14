import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'
//import bacckgroundImage from './assets/foto.jpg'
import Header from './components/Header';

/**
 * principais conceito do react
 * 
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */



function App() {

  //const projects = ['Desenvolvimento de app', 'Front-end web'];

  //desestruturar
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  /**
   * useState retorna um array com 2 posições
   * 
   * 1ª posição: varipavel com o seu valor incial
   * 
   * 2ª posição: função para atualizarmos esse valor
   */

  async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`); //o push não respeita o conceito de imutabilidade

    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    //adicionar projetos vindo do front-end

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Jusciê Delfino"
    });

    const project = response.data;

    setProjects([...projects, project]);

  }


  return (
    <>
      <Header title="Projects" />

      <ul>
        { projects.map(project => <li key={ project.id }>{ project.title }</li>) }
      </ul>

      <button type="button" onClick={ handleAddProject }>Adicionar projeto</button>
    </>
  );
}

export default App;