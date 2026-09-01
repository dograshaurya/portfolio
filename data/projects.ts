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
const orderPath = path.join(process.cwd(), "data/project-order.json");

export function getProjects(): Project[] {
  const projects = fs.readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(
      fs.readFileSync(path.join(projectsDirectory, file), "utf8")
    ) as Project);

  const order: string[] = JSON.parse(fs.readFileSync(orderPath, "utf8"));
  const rank = new Map(order.map((slug, index) => [slug, index]));

  return projects.sort(
    (a, b) => (rank.get(a.slug) ?? 999) - (rank.get(b.slug) ?? 999)
  );
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
