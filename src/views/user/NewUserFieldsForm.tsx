const NewUserFieldsForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-10">
      <div className="flex flex-col justify-between">
        <label htmlFor="">Nombre</label>
        <input type="text" id="name" className="border-b border-green-700 outline-none" />
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="">Apellido</label>
        <input id="lastName" type="text" className="border-b border-green-700 outline-none"/>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="">Tipo de identificacion</label>
        <select name="" id="idType" className="outline-none">
          <option value="">-- Seleccione --</option>
          <option value="cc">Cédula de ciudadanía</option>
          <option value="ce">Cédula de extrangería</option>
          <option value="passport">Pasaporte</option>
        </select>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="ID">Número de identificación</label>
        <input type="number" id="ID" className="border-b border-green-700 outline-none"/>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
        <input type="date" id="dateOfBirth" className="outline-none"/>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="address">Dirección</label>
        <input type="text" id="address" className="border-b border-green-700 outline-none"/>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor=" phoneNumber">Teléfono</label>
        <input type="text" id="phoneNumber" className="border-b border-green-700 outline-none"/>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="email">Correo electrónico</label>
        <input type="text" id="email" className="border-b border-green-700 outline-none"/>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="jobTitle">Rol</label>
        <select id="jobTitle" className="outline-none">
          <option value="">-- Seleccione --</option>
          <option value="gerente">Gerente</option>
          <option value="ing cotizacion">Ingeniero de Cotizaciones</option>
          <option value="ing obra">Ingeniero de Obra</option>
          <option value="adminitrador">Administrador</option>
        </select>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="user">Usuario</label>
        <input type="text" id="user" className="border-b border-green-700 outline-none"/>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" className="border-b border-green-700 outline-none"/>
      </div>
    </div>
  );
};
export default NewUserFieldsForm;
