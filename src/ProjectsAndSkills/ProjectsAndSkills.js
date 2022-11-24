// import { useState } from 'react';
import './Projects_and_Skills.css';

function ProjectsAndSkills() {

  function projectsActived(e) {
    e.preventDefault()

    // console.log("projects ativado")

  var projects = document.querySelector("#projectsId")
  var skills = document.querySelector("#skillsId")
  var projectsList = document.querySelector(".projects-list")
  var skillsList = document.querySelector(".skills-list")
    
  projects.style.backgroundColor = "#fff";
  projects.style.borderRadius = "12px";
  projectsList.style.display = "block";

  skills.style.backgroundColor = "#f2f2f2" 
  skills.style.borderRadius = "12px"; 

  skillsList.style.display = "none";
    
  }

  function skillsActived(e) {
    e.preventDefault()

    // console.log("skills ativado")

  var projects = document.querySelector("#projectsId")
  var skills = document.querySelector("#skillsId")
  var projectsList = document.querySelector(".projects-list")
  var skillsList = document.querySelector(".skills-list")


  
  skills.style.backgroundColor = "#fff" 
  skills.style.borderRadius = "12px";
  skillsList.style.display = "block";

  projects.style.backgroundColor = "#f2f2f2"
  projects.style.borderRadius = "12px";

  projectsList.style.display = "none";
  
  }

  return (
    <div className='container centered-box'>
      <div className='projects-and-skills-box-width'>
        <div className='projects-and-skills-box'>
          <button className='projects-button' onClick={projectsActived}>
              <a id='projectsId' href='/'>
                <span>Projetos</span>
              </a>
          </button>
          <button className='skills-button' onClick={skillsActived}>
              <a id='skillsId' href='/'>
                <span>Skills</span>
              </a>
          </button>
        </div>
        <div className='projects-and-skills-list'>
          <div className='projects-list'>
            <h3>Frontend Developer</h3>
            <br></br>
            <div className='projects-box-list'>
              <a target="_blank" rel="noreferrer noopener" href="https://www.grupocard.com.br">
                <div className='box-list'>
                  <div>
                    <image src="#"></image>
                  </div>
                  <small>
                    grupocard
                  </small>
                </div>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://cardhub.grupocard.com.br">
                <div className='box-list'>
                  <div>
                    <image src="#"></image>
                  </div>
                  <small>
                    cardhub
                  </small>
                </div>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://cardmais.grupocard.com.br">
                <div className='box-list'>
                  <div>
                    <image src="#"></image>
                  </div>
                  <small>
                    cardmais
                  </small>
                </div>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://cardmidia.grupocard.com.br">
                <div className='box-list'>
                  <div>
                    <image src="#"></image>
                  </div>
                  <small>
                    cardmidia
                  </small>
                </div>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://blog.netsofas.com.br">
                <div className='box-list'>
                  <div>
                    <image src="#"></image>
                  </div>
                  <small>
                    netsofás
                  </small>
                </div>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://niltonrochadeveloper.github.io/portfolio/">
                <div className='box-list'>
                  <div>
                    <image src="#"></image>
                  </div>
                  <small>
                    portfólio
                  </small>
                </div>
              </a>             
            </div>
          </div>
          <div className='skills-list'>
            <div className='skills-box-list'>
              <div>
                <h3>Backend Developer</h3>
                <div>
                  <div>PHP</div>
                  <div>Python</div>
                  <div>MySql</div>
                  <div>NodeJs</div>
                  {/* <div>Firebase</div> */}
                </div>
              </div>
              <div>
                <h3>Frontend Developer</h3>
                <div>
                  <div>HTML</div>
                  <div>React</div>
                  <div>CSS</div>
                  <div>Angular</div>
                  <div>Bootstrap</div>
                  <div>Git</div>
                  <div>SEO</div>
                  <div>Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProjectsAndSkills;
