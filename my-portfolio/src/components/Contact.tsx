import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_xtm4t5e", // Replace with your EmailJS Service ID
        "template_9utk4l2", // Replace with your EmailJS Template ID
        {
          user_email: formData.email, // Matches {{user_email}} in EmailJS
          message: formData.message, // Matches {{message}} in EmailJS
        },
        "1qCzoN93HgUoXRsPu" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Email Input */}
        <label className="contact-label">Email</label>
        <input
          type="email"
          name="email"
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Message Input */}
        <label className="contact-label">Message me here</label>
        <textarea
          name="message"
          className="contact-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="contact-submit">
          Submit
        </button>

        {/* Status Message */}
        {status && <p className="contact-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
