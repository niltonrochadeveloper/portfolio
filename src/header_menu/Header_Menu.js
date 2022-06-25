import './header.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='header__navbar'>
          <img className='header__logo' src='' alt='logo'></img>
          <ul className='header__menu'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Portfólio</a></li>
              <li><a href='#'>Serviços</a></li>              
          </ul>
          <div className='header__button button'>Enviar</div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
