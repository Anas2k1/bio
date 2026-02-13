const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    achievements: [
      "Led a team of 5 developers to rebuild the main SaaS platform, improving performance by 40%",
      "Implemented design system used across 12 products",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 – 2022",
    achievements: [
      "Built real-time collaboration features serving 10k+ daily users",
      "Designed and implemented REST APIs with Node.js and PostgreSQL",
      "Reduced deployment time by 60% with CI/CD pipeline improvements",
    ],
  },
  {
    role: "Junior Developer",
    company: "WebAgency Co.",
    period: "2019 – 2020",
    achievements: [
      "Developed responsive websites for 20+ clients",
      "Introduced component-based architecture with React",
      "Automated testing coverage from 30% to 85%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 px-4" id="experience">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 gradient-text inline-block">Experience</h2>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full gradient-hero border-2 border-background" />

              <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary font-medium mb-3">{exp.company}</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
