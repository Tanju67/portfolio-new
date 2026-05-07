import { useProjects } from "../../shared/hooks/useProjects";
import Button from "../../shared/UIElements/button/Button";
import ProjectItemCard from "../../shared/UIElements/card/ProjectItemCard";
import TextLayout from "../../shared/UIElements/textLayout/TextLayout";

function Projects() {
  const { translatedProjects } = useProjects();

  return (
    <div className="bg-muted/20 section-padding">
      <div className="section-width section-grid">
        <div className="text-layout">
          <TextLayout
            subtitle="project.subtitle"
            title="project.title"
            text="project.text"
            translationKey="homePage"
            className="justify-center md:justify-start"
          />
          <div className="mt-4">
            <Button isLink={true} linkTo="/projects">
              Explore all projects
            </Button>
          </div>
        </div>
        <div>
          <ProjectItemCard
            img={translatedProjects[0].image}
            badge={translatedProjects[0].hero.badges}
            title="Burger Studio"
            link={{
              detail: "/projects/" + translatedProjects[0].id,
              live: translatedProjects[0].live.link,
            }}
            btnText={translatedProjects[0].live.text}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
