import Link from "next/link";
import Image from "next/image";

type item = {
  icon: string;
  title: string;
  desc: string;
  project : string;
}

const achievements: item[] = [
  {icon: "/godot_python.png", title: "Game Programming", desc: "gamer, game programmer, and game technology enthusiast.", project: "#project"},
  {icon: "/flutter.png", title: "App Development", desc: "Building applications with clean code and solid architecture.", project: "#project"},
  {icon: "/next-js.png", title: "Web Development", desc: "Collaborative web development with modern frameworks.", project: "#project"},
  {icon: "/ai.png", title: "AI Enthusiast", desc: "Exploring artificial intelligence, machine learning, and their real-world applications.", project: "#project"}
];


export default function home() {
  return (
    <div className="site">
      <div className="custom-shape-divider-top-1758641675">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
      </div>

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

      

      <div className="achievement-container">

        <div className="achievement-heading">
          <span className="achievement-section-title">my</span>
          <span className="achievement-section-title">achievement</span>
        </div>

        <div className="custom-shape-divider-bottom-1758637816">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className="custom-shape-divider-top-1758638953">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className="achievement-card-container">
          
          {achievements.map((item,index) => (
            <div key={index} className="achievement-card">
              <img src={item.icon} alt={item.title} className="achievement-img" />
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.desc}</p>
              <Link href={item.project} className="btnPrimary achievement-button">View Projects</Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}