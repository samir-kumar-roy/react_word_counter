import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"
                        style={{ color: props.mode === "dark" ? "white" : "#000000d4" }}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === "dark" ? "white" : "#000000d4" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: props.mode === "dark" ? "white" : "#000000d4" }}>About</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={{ cursor: "pointer" }} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === "dark" ? "white" : "#000000d4" }}>Change</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    title: PropsTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "TextUtils"
}
export default Navbar;