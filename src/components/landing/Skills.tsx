import { Link } from "react-router-dom";
import { techMap, type TechKey } from "../../shared/data/techMap";
import Button from "../../shared/UIElements/button/Button";
import TextLayout from "../../shared/UIElements/textLayout/TextLayout";

const techArr = [
  "react",
  "typescript",
  "tailwind",
  "node",
  "mongodb",
  "express",
  "redux",
];
function Skills() {
  return (
    <div className="bg-bg section-padding">
      <div className="section-width section-grid">
        <div className="text-layout md:order-2">
          <TextLayout
            subtitle="skills.subtitle"
            title="skills.title"
            text="skills.text"
            translationKey="homePage"
            className="justify-center md:justify-start"
          />

          <div className="mt-4">
            <Button isLink={true} linkTo="/skills">
              View all skills
            </Button>
          </div>
        </div>
        <div className="order-1 flex flex-wrap justify-center gap-4 lg:-order-2 lg:justify-end">
          {techArr.map((t) => {
            const techItem = techMap[t as TechKey];
            if (!techItem) return null;

            return (
              <Link
                to={techItem.link || ""}
                target={techItem.link ? "_blank" : ""}
                key={t}
                className="group bg-bg/50 text-surface border-secondary/15 relative flex items-center gap-4 rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-800/80 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  <techItem.icon className="h-8 w-8 transition-colors group-hover:text-white" />
                </div>

                <div className="relative z-10">
                  <span className="text-secondary text-sm font-semibold transition-colors group-hover:text-white">
                    {techItem.name}
                  </span>
                  <div className="bg-accent mt-0.5 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                </div>
              </Link>
            );
          })}

          <div className="flex items-center gap-4 rounded-2xl border border-dashed border-zinc-700 p-5 opacity-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-500">
              +
            </div>
            <span className="text-sm font-medium text-zinc-500">
              And more...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
