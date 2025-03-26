import Head from "next/head";
import Link from "next/link";
import "../styles/header.css"; // Import your CSS file

export default function Home() {
  return (
    <>
      <Head>
        <title>District & Session's Court</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="header">
        <div className="container">
          <div className="logo-title">
            <img src="/logo1.png" alt="Logo" className="logo" />
            <h1>District & Session&apos;s Court</h1>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li id="dropdown" className="dropdown">
                <a onClick={() => document.getElementById("dropdown-menu").classList.toggle("show")}>
                  About ▼
                </a>
                <ul id="dropdown-menu" className="dropdown-menu">
                  <li>
                    <Link href="/history">History</Link>
                  </li>
                  <li>
                    <Link href="/judges">Judges</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Signup</Link>
              </li>
            </ul>
          </nav>
          <button className="language-switcher">EN</button>
        </div>
      </header>

      <div className="half">
        <div className="image">
          <h2>hi</h2>
        </div>
        <div className="trending_news"></div>
      </div>
    </>
  );
}
