import React from 'react'
function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have questions? We'd love to hear from you.</p>

      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label>Message:</label>
          <textarea placeholder="Write your message"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}




export default Contact
