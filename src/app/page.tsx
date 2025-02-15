import Nav from "@/components/nav/nav";
import { Button } from "@/components/ui/button";
import { ChevronRight, DownloadIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Nav />
      <main className="relative md:max-w-5xl">
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
              <span>Especialist</span>
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
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button variant="link">
                <SiInstagram />
              </Button>
              <Button variant="link">
                <SiLinkedIn />
              </Button>
            </div>
          </div>
        </section>
        <section id="tech" className="relative w-full pt-8">
          <div className="w-3/4">
            <h1 className="text-6xl font-bold">Technologies</h1>
            <p className="mt-4 text-card-foreground-hover">
              I have experience working with the following modern technologies,
              which have allowed me to develop efficient, scalable, and
              high-quality solutions.
            </p>
          </div>
        </section>
        <section id="experience" className="relative w-full"></section>
        <section id="projects" className="relative w-full"></section>
        <section id="contact" className="relative h-screen w-full"></section>
      </main>
    </div>
  );
}
