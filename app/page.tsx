import Head from "next/head";
import "./styles.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mobile First Approach</title>
      </Head>
      <nav className="container">
        <div className="logo-section">
          <img className="logo" src="./img/logo.png" alt="logo" />
          <div className="search-block">
          <input type="text" className="input" placeholder="Please enter the text.." />
          <img src="./img/search-icon.png" alt="search-icon"/>
        </div>
        </div>
       
        <img src="./img/hamburger.png" alt="hamburger" />
      </nav>
    </>
  );
}
