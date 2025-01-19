import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./about";
import Experience from "./expericence";
import Projects from "./projects";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";



const Admin = () => {

    return(
        
        <BrowserRouter>
            <nav className="navbar navbar-expand-sm navbar-dark bg-black sticky-top">
                <div className="container">
                    <h1 className="navbar-brand fs-3"> Venkata prasad Batari</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active me-2"> <i className="bi bi-info-circle me-1"></i> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/experience" className="nav-link active me-2"> <i className="bi bi-person-workspace me-1"></i> Experience </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link active me-2"> <i className="bi bi-briefcase me-1"></i> Projects </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skills" className="nav-link active me-2"> <i className="bi bi-gear me-1"></i> Skills </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/education" className="nav-link active me-2"> <i className="bi bi-mortarboard me-1"></i> Education </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active me-2"> <i className="bi bi-envelope me-1"></i> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Routes>

                <Route path="/" element={ <About/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/experience" element={ <Experience/> } />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/skills" element={ <Skills/> } />
                <Route path="/education" element={ <Education/> } />
                <Route path="/contact" element={ <Contact/> } />

            </Routes>


        
        </BrowserRouter>
    


    )


}


export default Admin;