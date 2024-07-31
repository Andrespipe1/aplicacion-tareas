import React, { useState } from 'react'; 
import TareaFormulario from './tareaFormulario';
import Tarea from './tarea.js';
import './estilos/estilos.css';

function ListaTareas() {
  const [tareas, setTareas] = useState([]); 

  const agregarTarea = (tarea) => { 
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim(); 
      const tareasActualizadas = [tarea, ...tareas]; 
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); 
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) { // Corregida la comparación
        return { ...tarea, completada: !tarea.completada }; 
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          ))
        }
      </div>
    </>
  );
}

export default ListaTareas;