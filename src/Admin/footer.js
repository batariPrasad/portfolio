import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="text-primary mb-3">About Me</h5>
                        <p>
                            I’m a passionate web developer who loves creating beautiful and functional websites. 
                            I specialize in front-end development and enjoy working with modern technologies like React.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="text-primary mb-3">Contact Information</h5>
                        <ul className="list-unstyled">
                            <li><strong>Email:</strong> batariprasad91@gmail.com</li>
                            <li><strong>Phone:</strong>+91 7095949481</li>
                            <li><strong>Location:</strong> Kadapa, India</li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-4">
                        <h5 className="text-primary mb-3">Follow Me</h5>
                        <div className="d-flex justify-content-center">
                            {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
                            www.linkedin.com
                            </a>
                          <div>  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
                                www.github.com
                            </a></div>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
                                www.twitter.com
                            </a> */}
                           
                        </div>
                        <ul className="list-unstyled">
                            <li> <i className="bi bi-linkedin me-1"></i>  <a href="https://www.linkedin.com/feed/?trk=404_page" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
                            www.linkedin.com </a> </li>
                            <li><i className="bi bi-github me-1"></i>  <a href="https://github.com/batarprasad" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
                                www.github.com</a></li>
                            <li><i className="bi bi-twitter me-1"></i>   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
                                www.twitter.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Venkata prasad. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
