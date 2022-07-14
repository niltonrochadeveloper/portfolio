import './Projects_and_Skills.css';


function ProjectsAndSkills() {
  return (
      <div className='container centered-box'>
        <div className='projects-and-skills-box-width'>
          <div className='projects-and-skills-box'>
              <div className='projects-button'>
                  <a href='/'>
                      <span>Projects</span>
                  </a>
              </div>
              <div className='skills-button'>
                  <a href='/'>
                      <span>Skills</span>
                  </a>
              </div>
          </div>
          <div className='projects-and-skills-list'>
            <div className='projects-list'>
              <div>
                <h3>Frontend Developer</h3>
                <div>
                  <div>HTML</div>
                  <div>React</div>
                  <div>CSS</div>
                  <div>React</div>
                  <div>Bootstrap</div>
                  <div>Gits</div>
                </div>
              </div>
            </div>
            <div className='skills-list'>
              <div>
                <h3>Backend Developer</h3>
                <div className='skills-listing'>
                  <div>PHP</div>
                  <div>Python</div>
                  <div>MySql</div>
                  <div>NodeJs</div>
                  <div>Firebase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProjectsAndSkills;
