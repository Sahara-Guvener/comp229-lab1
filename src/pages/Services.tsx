import webDev from "../assets/witchy-web-dev.png";
import programming from "../assets/witchy-coding.png";
import sql from "../assets/witchy-sql.png";

function Services() {
  return (
    <main className="services-page">
      <h1>Services</h1>

      <section className="services-grid">
        <div className="service-card">
          <img src={webDev} alt="Web development illustration" />
          <h2>Web Development</h2>

          <p>
            Building responsive and user-friendly websites using HTML, CSS,
            JavaScript, React, and TypeScript.
          </p>
        </div>

        <div className="service-card">
          <img src={programming} alt="Programming illustration" />
          <h2>Programming</h2>

          <p>
            Developing applications and solving programming problems using
            languages such as C#, Java, and JavaScript.
          </p>
        </div>

        <div className="service-card">
          <img src={sql} alt="Database development illustration" />
          <h2>Database Development</h2>

          <p>
            Creating and working with relational databases using SQL, including
            queries, joins, filtering, and data analysis.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Services;
