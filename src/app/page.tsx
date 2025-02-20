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

export default function Home() {
  return (
    <div className="flex justify-center">
      <Nav />
      <main className="relative w-4/6 3xl:w-1/2">
        <section id="home" className="relative h-screen w-full">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="uppercase font-bold text-card-foreground-hover">
              Based in Portugal
            </p>
            <div className="capitalize font-bold text-card-foreground text-7xl text-center mt-8">
              <span className="text-primary">Full Stack </span>
              <span>Web Developer </span>
            </div>
            <div className="capitalize font-bold text-card-foreground text-7xl text-center">
              <span className="text-primary">React & C# </span>
              <span>Specialist</span>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
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
          <h1 className="text-6xl font-bold">Technologies</h1>
          <p className="mt-4 text-card-foreground-hover">
            I have experience working with the following modern technologies,
            which have allowed me to develop efficient, scalable, and
            high-quality solutions.
          </p>
          <div className="grid grid-cols-4 gap-y-4 gap-x-6 mt-12">
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
        <section id="experience" className="relative w-full mt-24 pt-8">
          <h1 className="text-6xl font-bold">Experience</h1>
          <p className="mt-4 text-card-foreground-hover">
            Below is a timeline of my work, highlighting the projects and
            technologies I have worked professionally with over the years. Each step reflects
            my growth as a developer and the challenges I have tackled along the
            way.
          </p>
        </section>
        <section id="projects" className="relative w-full"></section>
        <section id="contact" className="relative h-screen w-full"></section>
      </main>
    </div>
  );
}
