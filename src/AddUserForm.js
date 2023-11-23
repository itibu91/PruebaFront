import React, { useState } from 'react';

const AddUserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Correo: '',
    Edad: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza validaciones aquí antes de enviar el formulario
    onSubmit(formData);
  };

  return (
    <div>
        <h2>Agregar Usuario</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Correo:
        <input type="email" name="Correo" value={formData.Correo} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Edad:
        <input type="text" name="Edad" value={formData.Edad} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Agregar Usuario</button>
    </form>
    </div>
  );
};

export default AddUserForm;
