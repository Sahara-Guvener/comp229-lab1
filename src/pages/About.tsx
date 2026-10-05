import headshot from "../assets/headshot.jpeg";

function About() {
  return (
    <main className="about-page">
      <section className="about-content">
        <div className="about-image">
          <img src={headshot} alt="Portrait of Sahara Guvener" />
        </div>

        <div className="about-text">
          <h1>About Me</h1>

          <h2>Sahara Guvener</h2>

          <p>
            I am a Software Engineering Technician student with an interest in
            programming, web development, and creating practical digital
            solutions. I enjoy learning new technologies and developing my
            technical skills through hands-on projects.
          </p>

          {/* Opens the PDF resume in a new browser tab */}
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View My Resume
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
