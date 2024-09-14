import { useState } from "react";
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChangeName = (e)=>{
        setFormData(formData => ({
            ...formData, 
            name: e.target.value 
        }));
    }

    const handleChangeEmail= (e)=>{
        setFormData(formData => ({
            ...formData, 
            email: e.target.value 
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (formData.name.length <= 5) {
            setError('Por favor verifique su información nuevamente');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Por favor verifique su información nuevamente');
            return;
        }
        setError('');
        setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
       
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value={formData.name} onChange={handleChangeName} />
        <label >Email</label>
        <input type="email" value={formData.email} onChange={handleChangeEmail}/>
        <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </div>
    );
  };
  
  export default Form;
  