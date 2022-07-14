import './My_Profession.css';


function MyProfession() {
  return (
    <header>
      <div className='container'>
        <div className='my__professional__work'>
            <div className='years__of__work'>
                <h2>3</h2>
                <h3>Anos de Trabalho</h3>
                {/* <small className='yow'>Years of Work</small> */}
            </div>
            <div className='completed__projects'>
                <h2>+40</h2>
                <h3>Projetos Completos</h3>
                {/* <small className='yow'>Completed Projects</small> */}
            </div>
            <div className='satisfied__consumers'>
                <h2>96</h2>
                <h3>Clientes Satisfeitos</h3>
                {/* <small className='yow'>Satisfied Consumers</small> */}
            </div>
        </div>
      </div>
    </header>
  );
}

export default MyProfession;
