import React from 'react';
import './estilos/estilos.css';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div
        className='tarea-texto'
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
    </div>
  );
}

export default Tarea;