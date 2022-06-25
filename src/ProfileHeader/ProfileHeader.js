import './Profile.css';

// photo
import foto from './foto.png'

function ProfileHeader() {
  return (
    <header>
      <div className='container'>
        <div className='profile__photo'>
            <img src={foto} alt=''></img>
        </div>
        <div className='profile__name'>
          <h1>Nilton Rocha</h1>
          <h2>Web Developer</h2>
        </div>
        <div className='profile__icons'>
          <a href='https://www.instagram.com/nilton_roc.ha/' target='_blank'><i class="ri-instagram-line ri-lg"></i></a>
          <a href='https://www.linkedin.com/in/jornalistanilton/' target='_blank'><i class="ri-linkedin-box-line ri-lg"></i></a>
          <a href='https://github.com/niltonrochadeveloper' target='_blank'><i class="ri-github-line ri-lg"></i></a>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
