import popeyesProject from "../assets/popeyes-project.png";
import sqlProject from "../assets/sql-project.png";
import javaProject from "../assets/java-project.png";

function Projects() {
  return (
    <main className="projects-page">
      <h1>My Projects</h1>

      {/* Project cards highlighting completed coursework and technical skills */}
      <section className="projects-grid">
        <div className="project-card">
          {/* Clicking a project image opens the full-size screenshot in a new tab */}
          <a href={popeyesProject} target="_blank" rel="noopener noreferrer">
            <img src={popeyesProject} alt="Popeyes Canada website preview" />
          </a>

          <h2>Popeyes Canada Interactive Website</h2>

          <p>
            <strong>My Role:</strong> Independently designed and developed a
            multi-page restaurant website using HTML, CSS, and JavaScript. I
            created navigation, interactive forms, a product gallery, an
            ordering system, data visualizations, and other interactive
            features.
          </p>

          <p>
            <strong>Outcome:</strong> Completed a functional interactive website
            that demonstrates front-end development, JavaScript programming,
            form handling, navigation, and user interface design.
          </p>
        </div>

        <div className="project-card">
          <a href={sqlProject} target="_blank" rel="noopener noreferrer">
            <img src={sqlProject} alt="Oracle SQL database project preview" />
          </a>

          <h2>Oracle SQL Crime Database</h2>

          <p>
            <strong>My Role:</strong> Wrote SQL queries using joins, subqueries,
            aggregate functions, date calculations, and filtering across
            multiple related tables.
          </p>

          <p>
            <strong>Outcome:</strong> Completed a database assignment that
            strengthened my understanding of relational databases and complex
            SQL queries.
          </p>
        </div>

        <div className="project-card">
          <a href={javaProject} target="_blank" rel="noopener noreferrer">
            <img src={javaProject} alt="Java Singers application preview" />
          </a>

          <h2>Java Singers Application</h2>

          <p>
            <strong>My Role:</strong> Developed a Java program using
            object-oriented programming concepts including classes,
            constructors, encapsulation, and methods.
          </p>

          <p>
            <strong>Outcome:</strong> Created a working application that stores
            and manages singer information while improving my understanding of
            Java class design.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Projects;
