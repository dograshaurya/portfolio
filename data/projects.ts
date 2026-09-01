import fs from "node:fs";
import path from "node:path";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  technology: string;
  result: string;
  challenge: string;
  solution: string[];
  outcomes: string[];
};

const projectsDirectory = path.join(process.cwd(), "data/projects");

export function getProjects(): Project[] {
  return fs.readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(
      fs.readFileSync(path.join(projectsDirectory, file), "utf8")
    ) as Project)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
