import { Link } from "react-router-dom";
import { useProjects } from "../../shared/hooks/useProjects";
import ProjectItemCard from "../../shared/UIElements/card/ProjectItemCard";
import TextLayout from "../../shared/UIElements/textLayout/TextLayout";

function Projects() {
  const { translatedProjects: projects } = useProjects();

  return (
    <section className="bg-bg section-padding relative mt-4 overflow-hidden">
      <div className="bg-accent/5 pointer-events-none absolute top-0 left-1/2 h-full w-1/2 -translate-x-1/2 rounded-full blur-[120px]" />

      <div className="section-width relative z-10">
        <div className="mx-auto max-w-4xl py-6 text-center">
          <TextLayout
            subtitle="projectPage.subtitle"
            title="projectPage.title"
            text="projectPage.text"
            translationKey="projects"
            isBoth={true}
            isMainTitle
            className="justify-center"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${
                index % 2 !== 0 ? "md:translate-y-12" : ""
              }`}
            >
              <ProjectItemCard
                img={item.image}
                badge={item.hero.badges}
                title={item.hero.title}
                link={{
                  detail: "/projects/" + item.id,
                  live: item.live.link,
                }}
                btnText={item.live.text}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-10 text-center md:mt-16 md:pt-14 lg:mt-32 lg:pt-16">
          <p className="text-sm text-zinc-500 italic">
            And many more experiments in my{" "}
            <Link
              to="https://github.com/Tanju67?tab=repositories"
              className="text-primary hover:text-accent underline underline-offset-4"
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
