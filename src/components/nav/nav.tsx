import Link from "next/link";

export default function Nav() {
  return <div className="absolute z-10 top-8 left-1/2 transform -translate-x-1/2 bg-card text-card-foreground border font-bold border-card-border flex gap-4 px-4 l-50% rounded-md">
    <Link href="#home" className="py-4 transition-colors duration-300 hover:text-card-foreground-hover">Home</Link>
    <Link href="#tech" className="py-4 transition-colors duration-300 hover:text-card-foreground-hover">Technologies</Link>
    <Link href="#experience" className="py-4 transition-colors duration-300 hover:text-card-foreground-hover">Experience</Link>
    <Link href="#projects" className="py-4 transition-colors duration-300 hover:text-card-foreground-hover">Projects</Link>
    <Link href="#contact" className="py-4 transition-colors duration-300 hover:text-card-foreground-hover">Contact</Link>
  </div>;
}
