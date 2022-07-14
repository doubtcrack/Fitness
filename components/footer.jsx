import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div>
        <h2>Subscribe For Our Daily Tips</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui bla.
        </p>
        <div>
          <div>
            {/* <input type="email" name="email" placeholder="Email Address..." required=""> */}
            <button type="submit">
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="footer-info">
                <div className="footer-logo">
                  <a href="index.html" title="Gimnasio">
                    <Image
                      src="assets/images/logo.png"
                      width="170"
                      height="27"
                      alt="Gimnasio"
                    />
                  </a>
                </div>
                <p>
                  With our professional trainers, we will guide you with the
                  best program to help you get a healthy body.
                </p>
                <div className="social-icon">
                  <a href="javascript:void(0);" title="Follow on Facebook">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a href="javascript:void(0);" title="Follow on Instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="javascript:void(0);" title="Follow on Twitter">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="our-links">
                <h3 className="h3-title footer-title">Our Links</h3>
                <ul>
                  <li>
                    <a href="index.html" title="Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about-us.html" title="About Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="services.html" title="Services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="classes.html" title="Classes">
                      Classes
                    </a>
                  </li>
                  <li>
                    <a href="blog-list.html" title="Blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" title="Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="our-links">
                <h3 className="h3-title footer-title">Other Links</h3>
                <ul>
                  <li>
                    <a href="team.html" title="Team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="price.html" title="Price">
                      Price
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" title="FAQ">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="bmi-calculator.html" title="BMI Calculator">
                      BMI Calculator
                    </a>
                  </li>
                  <li>
                    <a href="testimonial.html" title="Testimonial">
                      Testimonial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-contact">
                <h3 className="h3-title footer-title">Contact Us</h3>
                <div className="footer-contact-box">
                  <span className="icon">
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  </span>
                  <div className="footer-contact-box-text">
                    <p>
                      <a href="tel:1234568790" title="+1 234 5687 90">
                        +1 234 5687 90
                      </a>
                    </p>
                    <p>
                      <a href="tel:9876543210" title="+9 876 5432 10">
                        +9 876 5432 10
                      </a>
                    </p>
                  </div>
                </div>
                <div className="footer-contact-box">
                  <span className="icon">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  </span>
                  <div className="footer-contact-box-text">
                    <p>
                      <a
                        href="mailto:info@example.com"
                        title="info@example.com"
                      >
                        info@example.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:contact@example.com"
                        title="contact@example.com"
                      >
                        contact@example.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="footer-contact-box">
                  <span className="icon">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </span>
                  <div className="footer-contact-box-text">
                    <p>
                      <a
                        href="javascript:void(0);"
                        title="127 7th Ave, Brooklyn, North Dakota, US"
                      >
                        127 7th Ave, Brooklyn, North Dakota, US
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copy-right">
              <p>
                © 2022{" "}
                <a
                  href="https://themeforest.net/user/geekcodelab"
                  title="Geek Code Lab"
                >
                  Geek Code Lab
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="footer-bottom-link">
              <ul>
                <li>
                  <a href="javascript:void(0);" title="Privacy Policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" title="Terms &amp; Condition">
                    Terms &amp; Condition
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" title="Cookie policy">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
