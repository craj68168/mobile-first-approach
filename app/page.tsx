"use client";
import Head from "next/head";
import "./styles.css";
import { useState } from "react";
import {
  FacebookFilled,
  InstagramFilled,
  MailFilled,
  PhoneFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";

export default function Home() {
  const [showClass, setShowClass] = useState(false);
  const toggleClassName = () => {
    setShowClass(!showClass);
  };
  return (
    <>
      <Head>
        <title>Mobile First Approach</title>
      </Head>
      <nav className="container">
        <div className="logo-section">
          <img className="logo" src="./img/logo.png" alt="logo" />
          <div className="search-block">
            <input
              type="text"
              className="input"
              placeholder="Please enter the text.."
            />
            <img src="./img/search-icon.png" alt="search-icon" />
          </div>
        </div>
        <div className="hamburger" onClick={() => toggleClassName()}>
          <img src="./img/hamburger.png" alt="hamburger" />
        </div>
        <ul className={showClass ? "show" : ""}>
          <li>
            <a href="#">Become a Host</a>
          </li>
          <li>
            <a href="#">Trips</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">
              <img src="./img/avatar.png" alt="avatar" />
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="hero">
          <div className="hero__text">
            <div className="hero-emoji">🏡</div>
            <h1>Book unique home and experience the world</h1>
            <div className="search-block hero-search-block">
              <input
                type="text"
                className="input"
                placeholder="Please enter the text.."
              />
              <img src="./img/search-icon.png" alt="search-icon" />
            </div>
            <div className="hero--btn-section">
              <button className="btn btn-success">All properties</button>
              <button className="btn btn-secondary">Home</button>
              <button className="btn btn-secondary">Experience</button>
              <button className="btn btn-secondary">Restaurant</button>
            </div>
          </div>
          <div className="hero__img__blog">
            <img src="./img/room.png" alt="image" />
          </div>
        </div>
        <section className="apartment">
          <div className="container">
            <div className="section--heading">
              <h2>
                <span>Apartments in </span>Barcelona, spain
              </h2>
              <a href="#">See All (56)</a>
            </div>
            <div className="apartment__list-wrapper">
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="apartment">
          <div className="container">
            <div className="section--heading">
              <h2>
                <span>Apartments in </span>Barcelona, spain
              </h2>
              <a href="#">See All (56)</a>
            </div>
            <div className="apartment__list-wrapper">
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
              <div className="apartment--card">
                <img src="./img/apartment.png" alt="apartment" />
                <div className="apartment--meta">
                  <span>$123</span>
                  <span>🔥 4.8</span>
                </div>
                <div className="apartment__title">
                  <a href="#">Explore old barcelona from the studio</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-wrapper">
            <div className={`footer-container`}>
              <div className="about-us">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt nulla adipisci
                </p>
                <ul className="icons">
                  <li>
                    <a href="#">
                      <FacebookFilled />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TwitterSquareFilled />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <InstagramFilled />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <YoutubeFilled />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="support">
                <h2>Support</h2>
                <p>
                  <a href="#">FAQ</a>
                </p>
                <p>
                  <a href="#">Privacy Policy</a>
                </p>
                <p>
                  <a href="#">Help</a>
                </p>
                <p>
                  <a href="#">Contact</a>
                </p>
              </div>
              <div className="shop">
                <h2>Shop</h2>
                <p>
                  <a href="#">Men</a>
                </p>
                <p>
                  <a href="#">Women</a>
                </p>
                <p>
                  <a href="#">Children</a>
                </p>
                <p>
                  <a href="#">Shoes</a>
                </p>
              </div>
              <div className="contact-us">
                <h2>Contact Us</h2>
                <p>
                  <a href="#">
                    <PhoneFilled /> 977+982345
                  </a>
                </p>
                <p>
                  <a href="#">
                    <MailFilled /> raZz@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy-right">Copyright © 2023. All Rights Reserved</div>
      </main>
    </>
  );
}
