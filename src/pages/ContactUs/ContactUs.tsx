import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import Navbar from "../../components/Navbar/Navbar";
import {
  X,
  LinkedIn,
  Instagram,
  Youtube,
  Discord,
  Globe,
} from "../../assets/Images";

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: ""
      });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      title: "General Enquiries",
      details: ["info@yugaantarfest.com", "+91 98765 43210"]
    },
    {
      title: "Event Registration",
      details: ["registration@yugaantarfest.com", "+91 98765 43211"]
    },
    {
      title: "Sponsorship",
      details: ["sponsors@yugaantarfest.com", "+91 98765 43212"]
    },
    {
      title: "Media & Press",
      details: ["media@yugaantarfest.com", "+91 98765 43213"]
    }
  ];

  const teamMembers = [
    {
      name: "Anish Yadav",
      role: "Festival Director",
      email: "anish@yugaantarfest.com",
      phone: "+91 98765 43220"
    },
    {
      name: "Priya Sharma",
      role: "Tech Events Coordinator",
      email: "priya@yugaantarfest.com",
      phone: "+91 98765 43221"
    },
    {
      name: "Rohit Kumar",
      role: "Cultural Events Head",
      email: "rohit@yugaantarfest.com",
      phone: "+91 98765 43222"
    },
    {
      name: "Sneha Patel",
      role: "Sponsorship Manager",
      email: "sneha@yugaantarfest.com",
      phone: "+91 98765 43223"
    }
  ];

  return (
    <div className={`${styles.contactPage} ${styles.background}`}>
      <Navbar />
      
      <div className={styles.container}>
        {/* Header Section */}
        <section className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have questions about YUGAANTAR? We're here to help! Reach out to us for any inquiries, 
            registration assistance, or collaboration opportunities.
          </p>
        </section>

        {/* Contact Form Section */}
        {/* <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select Category *</option>
                  <option value="general">General Inquiry</option>
                  <option value="registration">Event Registration</option>
                  <option value="technical">Technical Support</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="media">Media & Press</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitMessage && (
                <div className={styles.successMessage}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </section> */}

        {/* Contact Information Section */}
        <section className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.infoGrid}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.infoCard}>
                <h3>{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        {/* <section className={styles.teamSection}>
          <h2>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.avatar}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.memberContact}>
                  <p>{member.email}</p>
                  <p>{member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Location Section */}
        {/* <section className={styles.locationSection}>
          <h2>Visit Us</h2>
          <div className={styles.locationContent}>
            <div className={styles.locationInfo}>
              <h3>Scaler School of Technology</h3>
              <p>Electronic City, Bangalore</p>
              <p>Karnataka, India - 560100</p>
              <div className={styles.directions}>
                <button className={styles.directionsButton}>
                  Get Directions
                </button>
              </div>
            </div>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <h4>Campus Location</h4>
                <p>SST Campus, Electronic City</p>
                <p>Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        {/* <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>When is YUGAANTAR 2025?</h4>
              <p>YUGAANTAR 2025 will be held on November 28, 2025, at the SST Campus in Electronic City, Bangalore.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>How can I register for events?</h4>
              <p>You can register for events through our website or contact our registration team at registration@yugaantarfest.com</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Are there accommodation facilities?</h4>
              <p>We can help you find nearby accommodation options. Contact us for recommendations and booking assistance.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Can I volunteer for the festival?</h4>
              <p>Yes! We welcome volunteers. Please reach out to us with your interests and availability.</p>
            </div>
          </div>
        </section> */}

        {/* Social Media Section */}
        <section className={styles.socialSection}>
          <h2>Connect With Us</h2>
          <p>Follow us on social media for the latest updates and announcements</p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <img src={X} alt="X (Twitter)" />
              <span>@yugaantarfest</span>
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={LinkedIn} alt="LinkedIn" />
              <span>YUGAANTAR Fest</span>
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={Instagram} alt="Instagram" />
              <span>@yugaantarfest</span>
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={Youtube} alt="YouTube" />
              <span>YUGAANTAR Official</span>
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={Discord} alt="Discord" />
              <span>YUGAANTAR Community</span>
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={Globe} alt="Website" />
              <span>yugaantarfest.com</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>© 2025 YUGAANTAR Fest. All rights reserved.</p>
            <p>Scaler School of Technology</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;