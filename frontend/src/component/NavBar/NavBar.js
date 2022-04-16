import React from "react";

const Navbar = ({login}) => {



    return(
        <>
            <section>
                <div className="container padding-right ">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <div className="container-fluid">
                                <p className="navbar-brand">TooTasty</p>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarColor01" aria-controls="navbarColor01"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarColor01">
                                    <ul className="navbar-nav me-auto">
                                        <li className="nav-item col-10">
                                            <input className="form-control" type="text" placeholder="Search"/>
                                        </li>
                                        <li className="nav-item ps-2">
                                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                        </li>

                                    </ul>

                                        <button type="button" className="btn btn-link-white">Log In</button>
                                        <button type="button" className="btn btn-outline-white">Sign up</button>


                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Navbar;