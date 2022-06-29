import './Projects_and_Skills.css';


function ProjectsAndSkills() {
  return (
      <div className='container centered-box'>
        <div className='projects__and__skills__box_width'>
          <div className='projects__and__skills__box'>
              <div className='projects__button'>
                  <a href='/'>
                      <span>Projects</span>
                  </a>
              </div>
              <div className='skills__button'>
                  <a href='/'>
                      <span>Skills</span>
                  </a>
              </div>
          </div>
          <div className='projects__and_skills__list'>
            <div className='projects_list'>
              <div>
                <h3>Frontend Developer</h3>
                <div>
                  <div>HTML</div>
                  <div>React</div>
                  <div>CSS</div>
                  <div>React</div>
                  <div>Boodtrap</div>
                  <div>Gits</div>
                </div>
              </div>
            </div>
            <div className='skills_list'>
              <div>
                <h3>Backend Developer</h3>
                <div className='skills_listing'>
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
