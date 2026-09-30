export const technologies = [
  {
    title: "Languages",
    items: [
      { name: "Java", image: "/TechnologyIcons/java.png" },
      { name: "C#", image: "/TechnologyIcons/csharp.webp" },
      { name: "C", image: "/TechnologyIcons/c.webp" },
      { name: "Kotlin", image: "/TechnologyIcons/kotlin.png" },
      { name: "JavaScript", image: "/TechnologyIcons/javascript.png" },
      { name: "Python", image: "/TechnologyIcons/python.png" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", image: "/TechnologyIcons/react.webp" },
      { name: "Next.js", image: "/TechnologyIcons/nextjs.png" },
      { name: "HTML", image: "/TechnologyIcons/html.png" },
      { name: "Tailwind CSS", image: "/TechnologyIcons/css.png" },
      { name: "TypeScript", image: "/TechnologyIcons/typescript.png" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", image: "/TechnologyIcons/node.png" },
      { name: "ASP.NET Core", image: "/TechnologyIcons/aspdotnetcore.jpg" },
      { name: "PHP", image: "/TechnologyIcons/node.png" },
      { name: "REST APIs", image: "/TechnologyIcons/restapi.png" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Kotlin", image: "/TechnologyIcons/kotlin.png" },
      { name: "Jetpack Compose", image: "/TechnologyIcons/jetpackcompose.png" },
      { name: "Android Studio", image: "/TechnologyIcons/androidstudio.webp" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", image: "/TechnologyIcons/postgresql.png" },
      { name: "MySQL", image: "/TechnologyIcons/mysql.png" },
      { name: "SQLite", image: "/TechnologyIcons/sqlite.webp" },
      { name: "Microsoft SQL Server", image: "/TechnologyIcons/ssms.webp" },
      { name: "MongoDB", image: "/TechnologyIcons/mongodb.png" },
      { name: "Firebase", image: "/TechnologyIcons/firebase.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git & GitHub", image: "/TechnologyIcons/github.png" },
      {
        name: "Azure DevOps Server",
        image: "/TechnologyIcons/azuredevopsserver.jpg",
      },
      { name: "Netlify", image: "/TechnologyIcons/netlify.png" },
      { name: "Figma", image: "/TechnologyIcons/figma.webp" },
      { name: "Claude", image: "/TechnologyIcons/claude.webp" },
      { name: "Copilot", image: "/TechnologyIcons/copilot.png" },
    ],
  },
];

export const Technology = Object.freeze(
  Object.fromEntries(
    technologies.flatMap((section) =>
      section.items.map((item) => [item.name, item]),
    ),
  ),
);
