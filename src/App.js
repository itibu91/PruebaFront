// App.js
import React, { useState, useEffect } from 'react';
import AddUserForm from './AddUserForm';
import UserList from './UserList';


const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Lógica para obtener la lista de usuarios desde el backend
    // Puedes usar fetch, axios, u otra biblioteca para realizar la solicitud al backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://localhost:44316/api/Usuarios/TotalUsuarios',        
      );
        const data = await response.json();
        setUsers(data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios', error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleAddUser = async (formData) => {
    // Lógica para enviar el nuevo usuario al backend
    try {
      const response = await fetch('https://localhost:44316/api/Usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Actualizar la lista de usuarios después de agregar uno nuevo
        const newUser = await response.json();
        setUsers([...users, newUser]);
      } else {
        console.error('Error al agregar el usuario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <AddUserForm onSubmit={handleAddUser} />
      <UserList users={users} />    
      <h2>Lista de Usuarios Paginada</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} - {user.correo} - {user.edad}
          </li>
        ))}
      </ul>

      <div>
        <p>Página {currentPage} de {totalPages}</p>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>  
    </div>
    
  );
};

export default App;
