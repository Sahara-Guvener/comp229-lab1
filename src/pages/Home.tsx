import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="home-content">
        <h1>Welcome to My Portfolio</h1>

        <p className="home-intro">
          Hi, I'm Sahara! I'm a Software Engineering Technician student
          interested in programming, web development, and creating user-friendly
          applications.
        </p>

        <h2>My Mission</h2>

        <p className="mission-statement">
          My goal is to continue developing my technicial and creative skills
          while building accesible, practical, and engaging digital experiences.
        </p>

        {/* Links to key sections of the portfolio */}
        <div className="home-buttons">
          <Link to="/about" className="button">
            About Me
          </Link>

          <Link to="/projects" className="button">
            View My Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
