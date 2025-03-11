import React, { Component } from "react";
import './Contact.css'; // เพิ่มการ import ไฟล์ CSS
import { FaEnvelope, FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa'; // เพิ่มการ import ไอคอน

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <div className="contact-info">
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <h3>Email: <a href="mailto:s6603052421160@email.kmutnb.ac.th">s6603052421160@email.kmutnb.ac.th</a></h3>
                    </div>
                    <div className="contact-item">
                        <FaInstagram className="contact-icon" />
                        <h3>Instagram: <a href="https://www.instagram.com/ntp___00" target="_blank" rel="noopener noreferrer">@ntp___00</a></h3>
                    </div>
                    <div className="contact-item">
                        <FaFacebook className="contact-icon" />
                        <h3>Facebook: <a href="https://www.facebook.com/hor.nitipoom" target="_blank" rel="noopener noreferrer">นิติภูมิ กองฟู</a></h3>
                    </div>
                    <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <h3>Tel: <a type="number">081-xxxxxxx</a></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;