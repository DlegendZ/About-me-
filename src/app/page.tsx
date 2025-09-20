import Link from "next/link";
import Image from "next/image";

type Item = { icon: string; title: string; desc: string; };

// const ACHIEVEMENTS: Item[] = [
//   { icon: "/achievements/gamepad.svg", title: "Game Programming", desc: "Gamers, game programming, and game technology." },
//   { icon: "/achievements/tensorflow.png", title: "Application Development", desc: "Building applications with clean code and solid architecture." },
//   { icon: "/achievements/analytics.svg", title: "Web Development", desc: "Collaborative web development with modern frameworks." },
//   { icon: "/achievements/group.svg", title: "Member of UREKA", desc: "Active member contributing to the community." },
// ];

// const STATS = [
//   { value: "12+", label: "Projects" },
//   { value: "300+", label: "Hours Coding" },
//   { value: "5",   label: "Certificates" },
//   { value: "2",   label: "Communities" },
// ]; 1

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
      
      {/* <section className="achv">
        <h2 className="achv-title">
          <span>MY</span> <span>ACHIEVEMENT</span>
        </h2>

        
        <p className="achv-quote">
          “Keep learning, keep shipping.” <span>— Johan</span>
        </p>

      
        <div className="achv-divider" aria-hidden>
          <svg viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path d="M0,32 C200,64 400,0 600,32 800,64 1000,0 1200,32 L1200,64 L0,64 Z"></path>
          </svg>
        </div>


        <div className="achv-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <article key={i} className="achv-card">
              <div className="achv-icon">
                <Image src={a.icon} alt={a.title} fill sizes="96px" style={{ objectFit: "contain" }} />
              </div>
              <h3 className="achv-head">{a.title}</h3>
              <p className="achv-desc">{a.desc}</p>
            </article>
          ))}
        </div>

        <ul className="achv-stats">
          {STATS.map((s, i) => (
            <li key={i} className="achv-stat">
              <strong className="achv-stat-value">{s.value}</strong>
              <span className="achv-stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </section> 2*/} 

      <div className="custom-shape-divider-top-1758384587">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}