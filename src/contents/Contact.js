import React, { Component } from "react";
import './Contact.css'; // เพิ่มการ import ไฟล์ CSS

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <div className="contact-info">
                    <h3>Email: <a href="mailto:s6603052421160@email.kmutnb.ac.th">s6603052421160@email.kmutnb.ac.th</a></h3>
                    <h3>Instagram: <a href="https://www.instagram.com/ntp___00" target="_blank" rel="noopener noreferrer">@ntp___00</a></h3>
                    <h3>Facebook: <a href="https://www.facebook.com/hor.nitipoom" target="_blank" rel="noopener noreferrer">นิติภูมิ กองฟู</a></h3>
                    <h3>Tel: <a type="number">081-xxxxxxx</a></h3>
                </div>
            </div>
        )
    }
}

export default Contact;