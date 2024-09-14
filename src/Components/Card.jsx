import doctor from '../../public/images/doctor.jpg'
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

    const addFav = ()=>{
      // Aqui iria la logica para agregar la Card en el localStorage
    }
  
    return (
      <div className="card">
          <img src={doctor} alt="" style={{width: '80%'}} />
          <h2>{name}</h2>
          <p>{username}</p>
          <Link to={`/Detail/${id}`}>Ver detalles</Link>
          <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    );
  };
  
  export default Card;
  