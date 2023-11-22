import { FaUser, FaEnvelope, FaBirthdayCake } from 'react-icons/fa';
import { AddUserContainer, FormContainer, Title, InputContainer, SubmitButton } from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        nombre: '',
        correo: '',
        edad: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!user.nombre || !user.correo || !user.edad) {
          alert('Por favor, completa todos los campos.');
          return;
        }
        try {
          dispatch(addUser(user));
          alert('Usuario agregado exitosamente.');
          setUser({
            nombre: '',
            correo: '',
            edad: '',
          })
          navigate('/');
        } catch (error) {
          console.error('Error al agregar usuario:', error);
          alert('Hubo un error al agregar el usuario. Por favor, intenta nuevamente.');
        }
      };

    return (
        <AddUserContainer>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Agregar Usuario</Title>
                <InputContainer>
                    <FaUser />
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        name="nombre"
                        value={user.nombre}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                <InputContainer>
                    <FaEnvelope />
                    <input 
                        type="email" 
                        placeholder="Correo Electrónico" 
                        name="correo"
                        value={user.correo}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                <InputContainer>
                    <FaBirthdayCake />
                    <input 
                        type="number" 
                        placeholder="Edad" 
                        name="edad"
                        value={user.edad}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                <SubmitButton type='submit'>Agregar Usuario</SubmitButton>
            </FormContainer>
        </AddUserContainer>
    );
}
  
export default AddUser;