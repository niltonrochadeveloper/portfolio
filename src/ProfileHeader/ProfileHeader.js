import "./Profile.css";

// photo
import foto from "./foto.png"

function ProfileHeader() {
  return (
    <header>
      <div className="top">
        <div></div>
      </div>
      <div className="container">
        <div className="profile__photo">
            <img src={foto} alt="minha foto"></img>
        </div>
        <div className="profile__name">
          <h1>Nilton Rocha</h1>
          <h3>Web Developer</h3>
        </div>
        <div className="profile__icons">
          <a href="https://www.instagram.com/nilton_roc.ha/" target="_blank" rel="noreferrer"><i className="ri-instagram-line ri-lg"></i></a>
          <a href="https://www.linkedin.com/in/devnilton/" target="_blank" rel="noreferrer"><i className="ri-linkedin-box-line ri-lg"></i></a>
          <a href="https://github.com/niltonrochadeveloper" target="_blank" rel="noreferrer"><i className="ri-github-line ri-lg"></i></a>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
