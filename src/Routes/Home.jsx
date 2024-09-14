//import Card from '../Components/Card'
import { useEffect, useState } from 'react';
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);
    const url_medicos = 'https://jsonplaceholder.typicode.com/users';

    useEffect(()=>{
        fetch(url_medicos)
        .then(res => res.json())
        .then(data =>{
            setUsers(data)
            setLoading(false)
        } 
           
        )

    }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {loading ? <p>Loading ...</p> : (
            users.map(user => (
              <Card 
                key={user.id} 
                name={user.name} 
                username={user.username}
                id={user.id}
              />
            ))
          )}
      </div>
    </main>
  )
}

export default Home