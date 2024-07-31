import './App.css';

import ListaTareas from './componentes/listaTareas.js';
import Header from './componentes/header.js';
import Sidebar from './componentes/sidebar.js';
function App() {
  return (
      <div className='aplicacion-tareas'>
        <Header/>
        <Sidebar/>
      <div className='lista-tareas'>
        <h1>Lista de Tareas</h1>
        <ListaTareas />
      </div>
    </div>
);
}
export default App;