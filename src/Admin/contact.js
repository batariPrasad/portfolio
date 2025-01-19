import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating form submission here
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionStatus("Your message has been sent successfully!");
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <div className="bg-dark py-5">
            <div className="container">
                <h2 className="text-center text-primary mb-4">Contact Me</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-white">Get in Touch</h5>
                        <p className="text-white">Feel free to reach out to me for any inquiries, collaborations, or projects!</p>
                        <p className="text-white">
                            <strong>Email:</strong> batariprasad91@gmail.com
                        </p>
                        <p className="text-white">
                            <strong>Phone:</strong> +91 7095949481
                        </p>
                        <p className="text-white">
                            <strong>Location:</strong> kadapa, India
                        </p>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} className="text-white">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                        {submissionStatus && (
                            <div className="mt-3 text-success">
                                <strong>{submissionStatus}</strong>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
