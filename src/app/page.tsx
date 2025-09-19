import Link from "next/link";
import Image from "next/image";

export default function home() {
  return (
    <div className="site">
      <header className="header">
        <span className="name">raynald arvan lim</span>
        <nav className="nav">
          <Link className="nav-span" href="#link">About</Link>
          <Link className="nav-span" href="#link">Skills</Link>
          <Link className="nav-span" href="#link">Portfolio</Link>
          <Link className="nav-span" href="#link">Contact</Link>
        </nav>
      </header>

      <div className="about-container">
        <div className="profile-container">
          <div className="profile-container-bg"></div>
          <Image src="/my-picture.png" alt="my-pic" fill sizes="(max-width: 768px) 80vw, 480px"/>
        </div>

        <section className="heroText">
          <h1 className="title">
            <span>Hi, I’m</span>
            <br />
            <span className="titleStrong">Raynald Arvan Lim</span>
          </h1>

          <p className="kicker">
            COMPUTER SCIENCE STUDENT
            <span className="sep"> | </span>
            ASPIRING SOFTWARE ENGINEER
          </p>

          <p className="lead">
            I’m currently pursuing a degree in computer science at BINUS
            University, I have a passion for AI/ML, mobile and web development,
            and I’m constantly seeking opportunities to learn and grow together.
          </p>

          <Link href="#portfolio" className="btnPrimary">
            View Portfolio
          </Link>
        </section>
      </div>
    </div>
  );
}