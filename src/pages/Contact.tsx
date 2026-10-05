import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  // Stores the values entered into the contact form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Updates the matching form field whenever the user enters new information
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Captures the form submission and redirects the user back to the Home page

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Displays the submitted form data for demonstration purposes
    console.log(formData);

    navigate("/");
  };

  return (
    <main className="contact-page">
      <h1>Contact Me</h1>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            <strong>Email:</strong> saharaguvener35@gmail.com
          </p>

          <p>
            <strong>Location:</strong> Ottawa, Ontario
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Me a Message</h2>

          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Contact Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
