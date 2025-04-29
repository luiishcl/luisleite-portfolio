
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Card({ children }) {
  return <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, marginBottom: 20 }}>{children}</div>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

export default function LuisLeitePortfolio() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-sm">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-blue-800">Luis Henrique C. Leite</h1>
        <p className="text-gray-600">QA Engineer | Manual & Automated Testing | API | DevOps</p>
        <div className="flex flex-col items-center gap-2 mt-4 text-sm text-gray-700">
  <div className="flex items-center gap-2">
    <FaPhone className="text-blue-600" />
    +55 (19) 99943-4227
  </div>
  <div className="flex items-center gap-2">
    <FaEnvelope className="text-blue-600" />
    luishcl@outlook.com
  </div>
  <div className="flex items-center gap-2">
    <FaLinkedin className="text-blue-600" />
    <a
      href="https://linkedin.com/in/luishchagas"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      linkedin.com/in/luishchagas
    </a>
  </div>

  {/* Botão de download do CV */}
  <a
    href="/luisleite-portfolio/LuisLeite_CV_2025.pdf"
    download
    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  >
    📄 Download CV (PDF)
  </a>
</div>
      </header>

      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">About Me</h2>
          <p>
            QA Engineer with over 10 years of experience in ensuring software quality through manual and automated testing. Skilled in Selenium, Postman, RestAssured, DevOps tools, and Agile environments. Passionate about delivering stable, high-performing applications.
          </p>
        </CardContent>
      </Card>
      

      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Core Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-10">
            <li>Selenium, Cucumber, RestAssured</li>
            <li>Postman, Newman, Swagger</li>
            <li>Java, C#, Ruby, ShellScript</li>
            <li>SQL Server, MongoDB, MySQL</li>
            <li>Git, Azure DevOps, Jenkins</li>
            <li>AWS, Oracle Cloud, Docker, Kubernetes</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 space-y-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Highlighted Projects</h2>
          <div>
            <h3 className="font-semibold">E2E Test Automation for COMEX Platform – BenFatto</h3>
            <ul className="list-disc list-inside">
              <li>Automated critical user flows using Selenium + C#</li>
              <li>Data-driven testing with SQL Server</li>
              <li>Agile sprint participation & Azure DevOps pipelines</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Microservices API Testing – Dextra Digital</h3>
            <ul className="list-disc list-inside">
              <li>Kafka-based API validation & integration tests</li>
              <li>Automation strategies for microservice environments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">BDD Lean Delivery – CI&T</h3>
            <ul className="list-disc list-inside">
              <li>End-to-end and component-level test automation in Java</li>
              <li>Gherkin-based scenarios with business teams</li>
              <li>Backend validations using Postman and Kubernetes logs</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Education & Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Postgraduate in Software Engineering – Anhanguera (2024)</li>
            <li>Specialization in ICT – Anhanguera (2024)</li>
            <li>Bachelor's in Computer Science – Anhanguera (2020)</li>
            <li>Certifications: Test Automation (Ninja), SQL Proficiency, Postman APIs, Java Fundamentals</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Contact & GitHub</h2>
          <p>If you’d like access to private QA repositories with BDD, API and CI/CD examples, just get in touch!</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-blue-600">
            <FaGithub className="text-blue-600" /> github.com/your-profile (or private repo)
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
