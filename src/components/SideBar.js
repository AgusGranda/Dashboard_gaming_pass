import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'
import image from '../assets/images/Logo.png';


function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark 
            " id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="imgBanner" to="/">
                    <div className="sidebar-brand-icon ">
                        <img className="w-100 imgBanner" src={image} alt="Gaming Pass" />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <div className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Gaming Pass</span></div>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductsDetail">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Actividad</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/Categories">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Categorías</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>

        </React.Fragment>
    )
}
export default SideBar;