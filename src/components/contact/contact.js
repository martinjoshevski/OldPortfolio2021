import { useState } from "react";
import "./contact.scss";

import React from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const [message, setMessage] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "visit_email_js_for_more_info",
        "visit_email_js_for_more_info",
        e.target,
        "visit_email_js_for_more_info"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <div className="right">
        <h2>CONTACT</h2>
        <form onSubmit={sendEmail}>
          <input
            type="hidden"
            placeholder="contact_number"
            name="contact_number"
          />

          <input type="text" placeholder="Name" name="user_name" />

          <input type="email" placeholder="Email" name="user_email" />

          <input type="text" placeholder="Subject" name="subject" />

          <textarea placeholder="Message" name="message" />
          <button type="submit" value="Send">
            Send
          </button>
          {message && (
            <span>
              Thanks for getting in touch with me, I will respond as soon as
              possible.
            </span>
          )}
        </form>
        <div className="home">
          <a href="#home">
            <img src="assets/up.png" alt="" />
          </a>
        </div>

        <div className="lastPiece">
          <h4>
            Martin Joshevski <span>&copy;2021</span>
          </h4>
          <a
            href="https://github.com/martinjoshevski"
            target="_Blank"
            rel="noreferrer"
          >
            <img src="assets/github.png" alt="linkedin" />
          </a>
          <a
            href="https://www.linkedin.com/in/martinjoshevski/"
            target="_Blank"
            rel="noreferrer"
          >
            <img src="assets/linkedin1.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
