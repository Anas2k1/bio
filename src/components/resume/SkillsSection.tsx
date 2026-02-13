const languages = [
  { name: "Bangla", level: 100, note: "Native" },
  { name: "English", level: 85, note: "Proficient" },
  { name: "Hindi", level: 65, note: "Spoken" },
  { name: "Urdu", level: 60, note: "Spoken" },
  { name: "Japanese", level: 25, note: "Learning" },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/50" id="skills">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 gradient-text inline-block">Languages</h2>

        <div className="max-w-2xl rounded-xl border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.note}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full gradient-bar transition-all duration-700"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
