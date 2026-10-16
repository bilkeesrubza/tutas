import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Tutas <span>LMS</span></h2>
          <p>
            Empowering learners with quality education
            and expert tutors for a brighter future.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/tutors">Tutors</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Learn. Grow. Succeed.</p>
          <Link to="/contact">Get in Touch</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tutas LMS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;