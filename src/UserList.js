import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} - {user.correo} - {user.edad}
          </li>
        ))}
      </ul>
      {/* Agrega lógica de paginación aquí si es necesario */}
    </div>
  );
};

export default UserList;
