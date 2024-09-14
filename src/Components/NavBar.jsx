//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import {Link} from 'react-router-dom';
const NavBar = () => {

    return (
      <nav >
        <Link to='/'>Inicio</Link>
        <Link to='/Contact'>Contacto</Link>
        <Link to='Favs'>Favoritos</Link>

        <button>Change theme</button>
      </nav>
    )
  }
  
  export default NavBar