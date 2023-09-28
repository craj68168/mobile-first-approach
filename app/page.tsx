"use client";
import Head from "next/head";
import "./styles.css";
import { useState } from "react";

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
        <ul className={showClass ? "show" : "hide"}>
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
        </div>
      </main>
    </>
  );
}
