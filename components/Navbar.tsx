import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link className="logo" href="/">SHAURYA<span>.</span></Link>
      <div className="navlinks">
        <Link href="/#work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/#expertise">Expertise</Link>
        <Link href="/#about">About</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
