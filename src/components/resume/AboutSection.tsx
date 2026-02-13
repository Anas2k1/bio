import { User, Briefcase } from "lucide-react";

const familyMembers = [
  {
    relation: "Father",
    name: "Mohammad Asaduzzaman",
    position: "PO, Islami Bank Bangladesh Limited",
  },
  {
    relation: "Mother",
    name: "Aklima Khatun",
    position: "Senior Teacher, Ideal School and College, Motijheel, Dhaka",
  },
  {
    relation: "Elder Brother",
    name: "Ammar Bin Asad",
    position: "Honors Final Year, Anthropology Department, Jagannath University",
  },
  {
    relation: "Younger Brother",
    name: "Anas Bin Asad",
    position: "Honors 3rd Year, CSE Department, International Islamic University of Chittagong",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 px-4" id="about">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 gradient-text inline-block">Personal Details</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14 text-sm">
          {[
            ["Nationality", "Bangladeshi"],
            ["Date of Birth", "March 13, 2006"],
            ["Height", "5 feet 6 inches"],
            ["Weight", "73 kg"],
            ["Passport No.", "A12725869"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border bg-card p-4 shadow-sm">
              <p className="text-muted-foreground text-xs mb-1">{label}</p>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">Family Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {familyMembers.map((member) => (
            <div
              key={member.name}
              className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                {member.relation.includes("Brother") ? (
                  <User className="w-6 h-6 text-primary-foreground" />
                ) : (
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                )}
              </div>
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">{member.relation}</p>
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
