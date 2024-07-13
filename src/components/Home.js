import React from 'react' 
import bluelogo from '../images/bluelogo.png';
import hamMenuIcon from '../images/ham-menu-icon.png';
import closeIcon from '../images/close-icon.png';
import searchIconDark from '../images/search-icon-dark.png';
import helloImage from '../images/hello.png';
import hiImage from '../images/hi.png';
import twentyFourIcon from '../images/24.png';
import botHumanIcon from '../images/bothuman.png';
import personalBotIcon from '../images/personalbot.png';
import healthTipsIcon from '../images/healthtips.png';
import dotsImage from '../images/4-dots.png';
import { Link } from 'react-router-dom';

import '../css/normalize.css';
import '../css/main.css';
function Home() {
  return (
    <div>
        <header class="header bg-blue">
        <nav class="navbar bg-blue">
            <div class="container flex">
                <a href="index.html" class="navbar-brand">
                    <img src={bluelogo} alt="Site Logo" />
                </a>
                <button type="button" class="navbar-show-btn">
                    <img src={hamMenuIcon} alt="Menu Icon" />
                </button>

                <div class="navbar-collapse bg-white">
                    <button type="button" class="navbar-hide-btn">
                        <img src={closeIcon} alt="Close Icon" />
                    </button>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to={'/'} class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to={'/ChatBot'} class="nav-link">Chat Bot</Link>
                        </li>
                    </ul>
                    <div class="search-bar">
                        <form>
                            <div class="search-bar-box flex">
                                <span class="search-icon flex">
                                    <img src={searchIconDark} alt="Search Icon" />
                                </span>
                                <input type="search" class="search-control" placeholder="Search here" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

        <div class="header-inner text-white text-center">
            <div class="container grid">
                <div class="header-inner-left">
                    <h1><br /> <span>Online Doctor</span></h1>
                    <p class="lead">Your Health Partner</p>
                    <br />
                    <div class="btn-group">
                        <a href="#about" class="btn btn-white">About</a>
                        <Link to={'/Login'} class="btn btn-light-blue">Sign In</Link>
                    </div>
                </div>
                <div class="header-inner-right">
                    <img src={helloImage} alt="Hello"/>
                </div>
            </div>
        </div>
    </header>
   
    <section id="about" class="about py">
        <div class="about-inner">
            <div class="container grid">
                <div class="about-left text-center">
                    <div class="section-head">
                        <h2>About Us</h2>
                        <div class="border-line"></div>
                    </div>
                    <p class="text">Medical ChatGPT can guide users to reputable resources and offer educational support for medical students and professionals. Its convenience and efficiency make it a valuable supplementary tool for enhancing patient knowledge and engagement in their healthcare.</p>
                </div>
                <div class="about-right flex img">
                    <img src={hiImage} alt="Hi" /> 
                </div>
            </div>
        </div>
    </section>
   
    <section id="banner-one" class="banner-one text-center">
        <div class="container text-white">
            <blockquote class="lead"><i class="fas fa-quote-left"></i> Our healthmaster offers quick, clear health information, demystifies medical terms, and provides wellness tips, enhancing patient knowledge and supporting informed decisions. <i class="fas fa-quote-right"></i></blockquote>
        </div>
    </section>
   
    <section id="services" class="services py">
        <div class="container">
            <div class="section-head text-center">
                <h2 class="lead"></h2>
                <p class="text text-lg">Our healthmaster is available anytime anywhere.</p>
                <div class="line-art flex">
                    <div></div>
                    <img src={dotsImage} alt="Dots Image" />
                    <div></div>
                </div>
            </div>
            <div class="services-inner text-center grid">
                <article class="service-item">
                    <div class="icon">
                        <img src={twentyFourIcon} alt="24/7 Icon" />
                    </div>
                    <h3>24/7 Accessibility</h3>
                    <p class="text text-sm">Medical chatbots are available round-the-clock, providing instant responses to health-related queries at any time of day or night, which is especially useful for urgent concerns or late-night questions.</p>
                </article>

                <article class="service-item">
                    <div class="icon">
                        <img src={botHumanIcon} alt="Bot Human Icon" />
                    </div>
                    <h3>Simplified Medical Information</h3>
                    <p class="text text-sm">They break down complex medical jargon into easy-to-understand language, making health information more accessible to the general public.</p>
                </article>

                <article class="service-item">
                    <div class="icon">
                        <img src={personalBotIcon} alt="Personal Bot Icon" />
                    </div>
                    <h3>Personalized Health Advice</h3>
                    <p class="text text-sm">By using user input, medical chatbots can offer tailored advice and recommendations for lifestyle changes, symptom management, and preventive care.</p>
                </article>

                <article class="service-item">
                    <div class="icon">
                        <img src={healthTipsIcon} alt="Health Tips Icon" />
                    </div>
                    <h3>Health Tips and Reminders</h3>
                    <p class="text text-sm">They can provide daily wellness tips, reminders for medication adherence, and advice on diet, exercise, and mental health practices.</p>
                </article>
            </div>
        </div>
    </section>
   
    <section id="contact" class="contact py">
        <div class="container grid">
            <div class="contact-right text-white text-center bg-blue">
                <div class="contact-head">
                    <h3 class="lead">Contact Us</h3>
                </div>
                <form>
                    <div class="form-element">
                        <input type="text" class="form-control" placeholder="Your name" />
                    </div>
                    <div class="form-element">
                        <input type="email" class="form-control" placeholder="Your email" />
                    </div>
                    <div class="form-element">
                        <textarea rows="5" placeholder="Your Message" class="form-control"></textarea>
                    </div>
                    <button type="submit" class="btn btn-white btn-submit">
                        <i class="fas fa-arrow-right"></i> Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
    
    <footer id="footer" class="footer text-center">
        <div class="container">
            <div class="footer-inner text-white py grid">
                <div class="footer-item">
                    <h3 class="footer-head">Tags</h3>
                    <ul class="tags-list flex">
                        <li>medical chatbot</li>
                        <li>emergency</li>
                        <li>online available</li>
                        <li>instant response</li>
                        <li>medication</li>
                    </ul>
                </div>

                <div class="footer-item">
                    <h3 class="footer-head">Quick Links</h3>
                    <ul>
                        <li><a href="#" class="text-white">Our Services</a></li>
                        <li><a href="#" class="text-white">Our Plan</a></li>
                        <li><a href="#" class="text-white">Privacy Policy</a></li>
                        <li><a href="#" class="text-white">Appointment Schedule</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-links">
                <ul class="flex">
                    <li><a href="#" class="text-white flex"> <i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" class="text-white flex"> <i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" class="text-white flex"> <i class="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            <p class="text text-white">&copy; 2024 All Rights Reserved</p>
        </div>
    </footer>
    </div>
  )
}

export default Home