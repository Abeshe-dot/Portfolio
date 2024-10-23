import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import axios from 'axios'; 

function Footer() {
    let date = new Date();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        const TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;
        const CHAT_ID = process.env.REACT_APP_CHAT_ID;
        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        const messageText = `New message\n name: ${name} \n email: ${email}: \n message: ${message}`;

        try {
            const response = await axios.post(url, {
                chat_id: CHAT_ID,
                text: messageText,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                console.log("Message sent successfully");
                alert("Message sent successfully");
                // Clear the form
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Failed to send message");
                alert("Failed to send message");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message");
        }
    };

    return (
        <div>
            <section id="footer-message">
                <div className="row">
                    <div className="footer-text col-lg-6 col-md-6">
                        <h3>Contact</h3>
                        <p>I would love to hear about your project and how I could help. Please fill in
                            the form, and I'll get back to you as soon as possible</p>
                    </div>
                    <div className="user-message col-lg-6 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="name-section">
                                <label>Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                            </div>
                            <div className="email-section">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                            </div>
                            <div className="message-section">
                                <label>Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} cols="30" rows="5" placeholder="write here" required></textarea>
                            </div>
                            <input className="submit-section" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
            <footer id="last-footer" className="last-ft">
                <div className="footerLink">
                    <a href="https://instagram.com/zethrobel"><InstagramIcon /></a>
                    <a href="https://t.me/Robizel"><TelegramIcon /></a>
                    <a href="mailto:abesheroba@gmail.com"><EmailIcon /></a>
                    <a href="https://github.com/zethrobel"><GitHubIcon /></a>
                </div>
                <div>
                    <p><CallIcon /> +251961477560/936445152/912736368</p>
                </div>
                <p>© Copyright robelZeleke {date.getFullYear() + "," + date.getHours() + ":" + date.getMinutes()}</p>
            </footer>
        </div>
    );
}

export default Footer;
