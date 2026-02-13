import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TaskFlow",
    description: "A real-time project management app with drag-and-drop kanban boards and team collaboration.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    title: "ShopSmart",
    description: "E-commerce platform with AI-powered recommendations, Stripe payments, and inventory management.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "OpenAI"],
  },
  {
    title: "DevBlog",
    description: "A markdown-powered blogging engine with syntax highlighting, dark mode, and SEO optimization.",
    tags: ["React", "MDX", "Node.js", "Vercel"],
  },
  {
    title: "WeatherNow",
    description: "Beautiful weather dashboard with animated visualizations and 7-day forecasts from OpenWeather API.",
    tags: ["React", "D3.js", "REST API", "CSS Animations"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4" id="projects">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 gradient-text inline-block">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl border bg-card p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
