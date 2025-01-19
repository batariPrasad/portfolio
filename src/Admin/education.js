


const Education = () => {

    const education = [
        {
            degree: "Bachelor of Technology (B.Tech)",
            institution: "Jawaharlal Nehru Technological University",
            stream: "Electrical and Electronics Engineering", 
            year: "2020 - 2024",
            percentage: "81%",
            details: "Specialized in Electrical and Electronics Engineering(EEE).",
        },
        {
            degree: "Higher Secondary (Class XII)",
            institution: "Government Junior College (GJC)",
            stream: "Science (MPC)", 
            year: "2018 - 2020",
            percentage: "70%",
            details: "Science Stream with a focus on Mathematics, Physics, and Chemistry.",
        },
        {
            degree: "Board of Secondary Education",
            institution: "sri vani vidyaniketan High School",
            stream: "Science",
            year: "2017 - 2018",
            percentage: "88%",
            details: "Completed secondary education with a focus on foundational subjects including Mathematics, Science, and English, achieving strong academic performance."
        }        
    ];


    return(
        <div className="col-12 bg-dark pt-4 text-white">
            <h2 className="text-center text-primary mb-4">Education</h2>
            <div
                className="p-4 rounded shadow m-2"
                style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#CCCCCC",
                }}
            >
                {education.map((edu, index) => (
                    <div key={index} className="row p-4 mb-3 align-items-center custom-education">
                        {/* Degree and Institution */}
                        <div className="col-md-4">
                            <h5 className="text-white">{edu.degree}</h5>
                            <p className="mb-1">
                                <strong className="text-white">Institution:</strong> {edu.institution}
                            </p>
                            <p className="">
                                <strong className="text-white">Stream:</strong> {edu.stream}
                            </p>
                        </div>

                        {/* Stream */}
                        <div className="col-md-2">
                            <h5 className="text-white">Year</h5>
                            <p className="">{edu.year}</p>
                        </div>

                        {/* Percentage */}
                        <div className="col-md-2">
                            <h5 className="text-white">Percentage</h5>
                            <p className="">{edu.percentage ? `${edu.percentage}` : "N/A"}</p>
                        </div>

                        {/* Details */}
                        <div className="col-md-4">
                            <p className="">
                                <strong className="text-white">Details:</strong> {edu.details}
                            </p>
                            <button className="btn btn-sm btn-secondary"> More Info </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )


}


export default Education;