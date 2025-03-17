import Nav from "@/components/nav/nav";
import { Button } from "@/components/ui/button";
import { ChevronRight, DownloadIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Card, CardHeader } from "@/components/ui/card";
import ReactIcon from "@/components/ui/icons/reactIcon";
import NETIcon from "@/components/ui/icons/netIcon";
import SQLServerIcon from "@/components/ui/icons/sqlServerIcon";
import DataBaseIcon from "@/components/ui/icons/databaseIcon";
import TypeScriptIcon from "@/components/ui/icons/typescriptIcon";
import JavaScriptIcon from "@/components/ui/icons/javascriptIcon";
import CSharpIcon from "@/components/ui/icons/csharpIcon";
import AzureDevOpsIcon from "@/components/ui/icons/azureDevOpsIcon";
import ProjectCard from "@/components/projectCard/projectCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <main className="relative w-11/12 md:w-4/6 3xl:w-1/2">
        <section id="home" className="relative h-screen w-full">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="uppercase font-bold text-card-foreground-hover">
              Based in Portugal
            </p>
            <div className="capitalize font-bold text-card-foreground text-5xl md:text-7xl text-center mt-8">
              <span className="text-primary">Full Stack </span>
              <span>Web Developer </span>
            </div>
            <div className="capitalize font-bold text-card-foreground text-5xl md:text-7xl text-center">
              <span className="text-primary">React & C# </span>
              <span>Specialist</span>
            </div>
            <div className="flex justify-center flex-col md:flex-row items-center gap-4 mt-8">
              <Button variant="secondary" className="capitalize font-bold">
                See my experience
                <ChevronRight />
              </Button>
              <Button variant="ghost" className="capitalize font-bold">
                <DownloadIcon />
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center items-center gap-1 mt-8">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faInstagram} className="!h-6 !w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faLinkedin} className="!h-6 !w-6" />
              </Button>
              {/* <Button variant="link">
                <SiLinkedIn />
              </Button> */}
            </div>
          </div>
        </section>
        <section id="tech" className="relative w-full pt-8">
          <h1 className="text-4xl md:text-6xl font-bold">Technologies</h1>
          <p className="mt-4 text-card-foreground-hover">
            I have experience working with the following modern technologies,
            which have allowed me to develop efficient, scalable, and
            high-quality solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-6 mt-12">
            {[
              {
                color: "hsl(192,95%,68%)",
                background: "bg-[hsla(192,95%,68%,0.2)]",
                Icon: ReactIcon,
                text: "React",
              },
              {
                color: "hsl(251,95%,68%)",
                background: "bg-[hsla(251,95%,68%,0.2)]",
                Icon: NETIcon,
                text: ".NET",
              },
              {
                color: "hsl(13,89%,54%)",
                background: "bg-[hsla(13,89%,54%,0.2)]",
                Icon: SQLServerIcon,
                text: "SQL Server",
              },
              {
                color: "hsl(79,100%,36%)",
                background: "bg-[hsla(79,100%,36%,0.2)]",
                Icon: DataBaseIcon,
                text: "EF Core",
              },
              {
                color: "hsl(207,69%,47%)",
                background: "bg-[hsla(207,69%,47%,0.2)]",
                Icon: TypeScriptIcon,
                text: "TypeScript",
              },
              {
                color: "hsl(51,92%,54%)",
                background: "bg-[hsla(51,92%,54%,0.2)]",
                Icon: JavaScriptIcon,
                text: "JavaScript",
              },
              {
                color: "hsl(251,95%,68%)",
                background: "bg-[hsla(251,95%,68%,0.2)]",
                Icon: CSharpIcon,
                text: "C#",
              },
              {
                color: "hsl(213,81%,66%)",
                background: "bg-[hsla(213,81%,66%,0.2)]",
                Icon: AzureDevOpsIcon,
                text: "Azure DevOps",
              },
            ].map(({ color, background, Icon, text }) => (
              <Card
                key={text}
                className="flex items-center px-4 py-3 border-0 hover:ring-1 hover:bg-card-hover hover:ring-card-border transition-colors"
              >
                <div className={`${background} p-2.5 rounded-md`}>
                  <div className="w-7 h-7">{<Icon fill={color} />}</div>
                </div>
                <CardHeader className="text-lg ml-2">{text}</CardHeader>
              </Card>
            ))}
          </div>
        </section>
        <section id="experience" className="relative w-full mt-12 md:mt-24 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold">Experience</h1>
          <p className="mt-4 text-card-foreground-hover">
            Below is a timeline of my work, highlighting the companies and
            technologies I have worked professionally with over the years. Each
            step reflects my growth as a developer and the challenges I have
            tackled along the way.
          </p>
          <div className="mt-12">
            <h2 className="text-xl md:text-3xl font-bold">Noesis</h2>
            <h3 className="font-bold text-card-foreground-hover">
              Full Stack Developer
            </h3>
            <p>
              March 2023 - <span className="text-primary">Now</span>
            </p>
            <ul className="pl-12 mt-2 list-disc text-card-foreground-hover">
              <li>
                Developed and maintained 5 solutions with React and 7 with .NET
                for various clients.
              </li>
              <li>
                Mentored 4 junior developers and helped standardize development
                practices within the team.
              </li>
              <li>
                Spearheaded the development of Autoridade da Concorrência -
                STEP, a full stack portal, handling database design using SQL
                Server, .NET REST API with Entity Framework Core.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl md:text-3xl font-bold">Noesis</h2>
            <h3 className="font-bold text-card-foreground-hover">
              Junior Full Stack Developer
            </h3>
            <p>October 2021 - February 2023</p>
            <ul className="pl-12 mt-2 list-disc text-card-foreground-hover">
              <li>
                Contributed to the development of 7 solutions leveraging React
                and .NET.
              </li>
              <li>
                Worked on a full stack project utilizing SQL Server, Entity
                Framework 6, Sitefinity and .NET Framework.
              </li>
              <li>
                Suggested and spearheaded the development of an issue tracking
                solution. Raising team’s gross income by ≈37%.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl md:text-3xl font-bold">GECAD</h2>
            <h3 className="font-bold text-card-foreground-hover">
              Frontend Developer Intern
            </h3>
            <p>March 2021 - July 2021</p>
            <ul className="pl-12 mt-2 list-disc text-card-foreground-hover">
              <li>
                Lead daily meetings with the client to discuss updates and new
                requirements respecting the agile methodology guidelines.
              </li>
              <li>
                Developed a smart building management portal using Vue.JS, which
                allowed real-time device interaction, device permissions
                management and authentication based on university credentials.
              </li>
              <li>
                Implemented an alert system for monitoring temperature, humidity
                and light levels using MQTT messaging system.
              </li>
            </ul>
          </div>
        </section>
        <section id="projects" className="relative w-full mt-12 md:mt-24 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
          <p className="mt-4 text-card-foreground-hover">
            Below is a list of projects and technologies I have worked as a
            hobby and for fun. Each project reflects my interest and passion for
            software development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-12">
            <ProjectCard title="Project 1" tags={["React", "Typescript"]} />
            <ProjectCard title="Project 2" tags={["React", "Typescript"]} />
            <ProjectCard title="Project 3" tags={["React", "Typescript"]} />
            <ProjectCard title="Project 4" tags={["React", "Typescript"]} />
          </div>
        </section>
      </main>
      <footer className="relative w-full border-card-border border-t-4 mt-24 pt-8 pb-8 flex flex-col items-center">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faInstagram} className="!h-7 !w-7" />
          </Button>
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faLinkedin} className="!h-7 !w-7" />
          </Button>
        </div>
        <span className="mt-4 font-bold">Made with ❤️‍🔥 by Paulo Silva</span>
        <span className="text-card-foreground-hover">© 2024 | All rights reserved</span>
      </footer>
    </div>
  );
}
