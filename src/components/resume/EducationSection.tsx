import { GraduationCap } from "lucide-react";

const education = [
  {
    exam: "HSC",
    result: "GPA 4.42",
    group: "Humanities",
    institution: "Ideal School and College, Motijheel, Dhaka",
  },
  {
    exam: "SSC / Dakhil",
    result: "GPA 4.89",
    group: "Science",
    institution: "Tamirul Millat Mohila Kamil Madrasha",
  },
  {
    exam: "Class Eight (JSC)",
    result: "GPA 5.00",
    group: "",
    institution: "",
  },
  {
    exam: "Class Five (PSC)",
    result: "GPA 5.00",
    group: "",
    institution: "",
  },
];

const EducationSection = () => {
  return (
    <section className="py-16 px-4" id="education">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 gradient-text inline-block">Educational Qualification</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="rounded-xl border bg-card p-6 shadow-sm flex gap-4">
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{edu.exam}</h3>
                <p className="text-primary font-bold text-sm">{edu.result}{edu.group ? ` (${edu.group})` : ""}</p>
                {edu.institution && (
                  <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
