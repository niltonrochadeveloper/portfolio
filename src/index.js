import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Profile__Header from './Profile__Header/Profile';
import Header_Menu from './header_menu/Header_Menu';
import Main from './main/Main';
import Footer from './footer/Footer';
import My_Profession from './My_Profession/My_Profession'
import Cv_Professional_Button from './Cv_Professional_Button/Cv_Professional_Button'
import Projects_and_Skills from './Projects_and_Skills/Projects_and_Skills'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile__Header />
    <My_Profession />
    <Cv_Professional_Button />
    <Projects_and_Skills />
    <Header_Menu />
    <Main />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
