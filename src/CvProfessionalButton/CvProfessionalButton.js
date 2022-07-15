import './Cv_Professional_Button.css';
import curriculo from './nilton-rocha-web-full-stack.pdf'

function MyProfessionButton() {
  return (
    <header>
      <div className='container'>
        <div className='cv__download__and__butons__contact'>
            <div className='cv__download__button'>
                <a href={curriculo} download>
                    <span>Download</span>
                    <i class="ri-download-line ri-lg"></i>
                </a>
            </div>
            <div className='butons_contact'>
                <a href='/'>
                    <div className='whatsapp__button'>
                        <i class="ri-whatsapp-line ri-lg"></i>
                    </div>
                </a>
                <a href='/'>
                    <div className='messenger__button'>
                        <i class="ri-messenger-line ri-lg"></i>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </header>
  );
}

export default MyProfessionButton;
