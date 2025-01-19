import React from "react";

const Projects = () => {
    const projects = [
        {
            name: "Multi-Vendor Online Food Platfrom",
            description: "Swizo is a multi-vendor online food platform that allows customers to browse and order from a variety of food vendors. It offers a seamless ordering experience with easy vendor management through a centralized admin panel..",
            technologies: 'React, Bootstrap, Node.js, MongoDB',
            link: "https://ecommerce.example.com",
            company: "Personal",
            type: "Personal Project",
        },
        {
            name: "Multi-Vendor E-Commerce Platform",
            description: "This platform enables users to browse products from multiple vendors, add items to their cart, and checkout with Cash on Delivery (COD). It features secure user authentication, product management, and a mobile-friendly interface for a seamless shopping experience.",
             technologies: 'React, Bootstrap, Node.js, MongoDB',
            link: "https://ecommerce.example.com",
            company: "Personal",
            type: "Personal Project",
        },
        {
            name: "Portfolio Website",
            description: "A personal portfolio to showcase my skills, projects, and experience.",
            technologies: 'HTML, CSS, Bootstrap, JavaScript, React',
            link: "https://portfolio.example.com",
            company: "Personal",
            type: "Personal Project",
        },
    ];

    return (
        <div className="bg-dark py-4">
            <h2 className="text-center text-primary mb-4">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card text-white bg-dark border-light h-100">
                            <div className="card-body custom-projects">
                                <h4 className="mb-3 fw-bold custom-projectName">{project.name}</h4>
                                <p><strong className="text-white">Project Type : </strong>{project.type}</p>
                                <p><strong className="text-white">Technologies:</strong> {project.technologies}</p>
                                <p className="card-text">{project.description}</p>
                                <div className="d-flex justify-content-end align-items-bottom mt-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light  btn-sm">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
