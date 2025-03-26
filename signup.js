import Link from "next/link";
import "../styles/header.css";

export default function Signup() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Signup Page</h1>
          <Link href="/">Back to Home</Link>
        </div>
      </header>
    </>
  );
}
