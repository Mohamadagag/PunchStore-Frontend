import React from "react";
import "../Css/contactus.css";
import contactus from "../Images/contactus.svg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import emailjs, { init } from "@emailjs/browser";
init("user_c5VfQP7u7Y8qbgfk8AiNJ");

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_6amrrqh",
      "template_3t35kyk",
      e.target,
      "user_c5VfQP7u7Y8qbgfk8AiNJ"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default function contactUs() {
  return (
    <>
      <Header />
      <div className="body-container">
        <div className="body-wrapper">
          <img src={contactus} alt="contact us logo" id="contactus-img" />

          <h1>Get In Touch</h1>
          <form method="post" onSubmit={sendEmail}>
            <table>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="YN"
                    name="name"
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    className="large"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    className="txt"
                    placeholder="Write a message..."
                    id="msg"
                    name="message"
                    required
                  ></textarea>
                </td>
              </tr>
            </table>
            <button id="submit">Submit Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
