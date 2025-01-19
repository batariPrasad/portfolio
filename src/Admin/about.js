
import Experience from "./expericence";
import Projects from "./projects";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";
import Footer from "./footer";

const About = () => {

    return(

        <div className="row pb-4 pt-4 bg-dark m-0">

            <div className="col-7 text-center p-3 pb-0 d-flex flex-column justify-content-center align-items-center" >
                <h1 className="text-white custom-name"> <b> Venkata prasad Batari </b> </h1>
                <h3 className="pt-3 custom-frontend text-primary" >Passionate Frontend Developer</h3>
                <p className="mt-2 custom-matter text-warning">
                    Crafting elegant, user-focused designs with precision. Turning ideas into seamless digital experiences.
                </p>
                <div className="mt-6 p-2">
                    <a
                        href="mailto:batariprasad91@gmail.com"
                        className="btn btn-primary btn-sm"
                    >
                        Hire Me
                    </a>
                </div>
            </div>

            <div className="col-5 text-center p-3 pb-4 d-flex flex-column justify-content-center align-items-center">
                <img
                    src="/prasad1.jpg"
                    alt="prasad batari"
                    className="img-custom"
                    style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        margin: "0 auto",
                        boxShadow: "0 0 15px 5px rgba(135, 206, 250, 0.6)" // Corrected box-shadow property
                    }}
                />
            </div>

            <Experience/>
            <Projects/>
            <Skills/>
            <Education/>
            <Contact/>
            <Footer/>

        </div>
    )

}

export default About;