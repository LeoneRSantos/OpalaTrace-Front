import { useLocation } from 'react-router-dom';
import './NavBar.css';
import { useAuth } from "../../../context/Auth"

function NavBar() {
    const location = useLocation();
    const { singout } = useAuth();

    return (
        <div className="topnav">
            <a href="/opalas" className={location.pathname === '/opalas' ? 'active' : ''}>Opalas</a>
            <a href="/rastreamento" className={location.pathname === '/rastreamento' ? 'active' : ''}>Rastreamento</a>
            <a href="/agentes" className={location.pathname === '/agentes' ? 'active' : ''}>Agentes</a>
            <a href="/configuracoes" className={location.pathname === '/configuracoes' ? 'active' : ''}>Configurações</a>
            <a onClick={()=>{ 
                singout();
            }} className='cursor-pointer'>Sair</a>
        </div>
    );
}

export default NavBar;
