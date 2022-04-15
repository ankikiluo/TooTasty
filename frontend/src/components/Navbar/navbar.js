const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    {/*<a className="navbar-brand" href="#">TooTasty</a>*/}
                    <p className="navbar-brand">TooTasty</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor01" aria-controls="navbarColor01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Privacy</a>
                            </li>
                        </ul>

                            {/*<a className="" href="#">Log In</a>*/}
                        {/*<button type="button" className="btn btn-outline-white">Sign up</button>*/}
                        <button type="button" className="btn btn-link-white">Log In</button>
                        <button type="button" className="btn btn-outline-white">Sign up</button>
                    </div>
                </div>
            </nav>

        </>
    );
}
export default Navbar;