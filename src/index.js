import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import ProfileHeader from './ProfileHeader/ProfileHeader';
// import HeaderMenu from './HeaderMenu/HeaderMenu';
import Main from './main/Main';
import Footer from './Footer/Footer';
import MyProfession from './MyProfession/MyProfession'
import CvProfessionalButton from './CvProfessionalButton/CvProfessionalButton'
import ProjectsAndSkills from './ProjectsAndSkills/ProjectsAndSkills'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HeaderMenu />   */}
    <ProfileHeader />
    <MyProfession />
    <CvProfessionalButton />
    <ProjectsAndSkills />
    
    <Main />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
