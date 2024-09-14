

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react";


const Detail = () => {
    const [dentist, setDentist] = useState({});
    const {id} = useParams()
    const url_id = `https://jsonplaceholder.typicode.com/users/${id}`
 
   useEffect(()=>{
    fetch(url_id)
    .then(res => res.json())
    .then(data => {
        setDentist(data);
    })
   },[id])
  
    return (
      <>
    
      <h1>Detail Dentist ID: {dentist.id}</h1>
      <h2>{dentist.name}</h2>
      <p>Username: {dentist.username}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
      <p>Company: {dentist.company?.name}</p>
    
        
      </>
    )
  }
  
  export default Detail