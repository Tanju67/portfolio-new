import { Link } from "react-router-dom";
import { techMap } from "../../shared/data/techMap";
import { useProjects } from "../../shared/hooks/useProjects";
import TextLayout from "../../shared/UIElements/textLayout/TextLayout";
import ProjectSkill from "./ProjectSkill";

function Skills() {
  const { translatedProjects } = useProjects();

  return (
    <section className="">
      <div className="section-width section-padding relative mt-4">
        <div className="bg-accent/5 pointer-events-none absolute top-0 left-1/2 h-full w-1/2 -translate-x-1/2 rounded-full blur-[120px]" />

        <div className="mx-auto max-w-4xl py-6 text-center">
          <TextLayout
            subtitle="hero.subtitle"
            title="hero.title"
            text="hero.text"
            translationKey="skillsPage"
            isBoth={true}
            isMainTitle
            className="justify-center"
          />
        </div>

        {/* Teknoloji Kartları */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
          {Object.entries(techMap).map(([key, tech]) => (
            <Link
              to={tech.link || ""}
              target={tech.link ? "_blank" : ""}
              key={key}
              className="group border-border bg-surface hover:border-accent/30 flex cursor-pointer items-center gap-3 rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,105,0,0.15)]"
            >
              <div className="bg-bg group-hover:bg-accent/10 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300">
                <tech.icon className="text-secondary group-hover:text-accent h-6 w-6 transition-colors duration-300" />
              </div>

              <span className="text-primary group-hover:text-accent hidden font-bold tracking-tight transition-colors md:block">
                {tech.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-muted/20 section-padding">
        <div className="section-width">
          <div className="border-secondary/15 mx-auto mb-10 max-w-4xl border-b text-center">
            <TextLayout
              subtitle="section.subtitle"
              title="section.title"
              text="section.text"
              translationKey="skillsPage"
              isBoth={true}
              isMainTitle
              className="justify-center"
            />
          </div>
          <div className="md:gap:16 grid grid-cols-1 gap-8 sm:gap-12">
            {translatedProjects.map((project, index) => (
              <ProjectSkill
                key={project.id}
                tech={project.tech}
                img={project.image}
                badge={project.hero.badges}
                link={{
                  detail: "/projects/" + project.id,
                  live: project.live.link,
                }}
                title={project.hero.title}
                btnText={project.live.text}
                index={index}
                about={project.about.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
