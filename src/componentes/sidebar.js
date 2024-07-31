import React from 'react';
import logo from './imagenes/logo.png';
function Sidebar() {
    return (
        <aside>
            <h2>Sidebar</h2>
            <img
                src={logo}
                className='logo-epn'
                alt="logo"
                width='100px'
                height= '100px'
            />

            <p>Contenido de Sidebar</p>
            <ul class="collapse">
                <li><a href=" ">Mi Perfil </a></li>
                <li><a href="">Tareas</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Logout</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
