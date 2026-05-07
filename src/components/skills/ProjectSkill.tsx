import { Link } from "react-router-dom";
import { techMap, type TechKey } from "../../shared/data/techMap";
import Button from "../../shared/UIElements/button/Button";
import ProjectItemCard from "../../shared/UIElements/card/ProjectItemCard";
import TextLayout from "../../shared/UIElements/textLayout/TextLayout";

type Props = {
  tech: string[];
  img: string;
  badge: string[];
  link: {
    detail: string;
    live: string;
  };
  title: string;
  btnText?: string;
  index: number;
  about: string;
};

function ProjectSkill({
  tech,
  img,
  badge,
  link,
  title,
  btnText,
  index,
  about,
}: Props) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 rounded-3xl py-2 lg:max-w-full lg:grid-cols-6">
      <div
        className={`col-span-3 flex items-center justify-center ${index % 2 === 0 ? "md:order-1" : ""}`}
      >
        <div className="flex flex-col lg:justify-start">
          <div>
            <TextLayout
              subtitle="applied skills"
              title={title}
              text={about}
              translationKey="skillsPage"
            />
          </div>
          <div className="space-y-3">
            <p className="text-left text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              Stack for this project
            </p>
            <div className="flex flex-wrap gap-3">
              {tech.map((t) => {
                const techItem = techMap[t as TechKey];
                if (!techItem) return null;
                return (
                  <Link
                    to={techItem.link || ""}
                    target={techItem.link ? "_blank" : ""}
                    key={t}
                    className="group/icon border-border bg-surface hover:border-accent/50 hover:shadow-accent/5 relative flex items-center justify-center rounded-xl border p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    title={techItem.name}
                  >
                    {/* Hover durumunda arkada hafif bir parlama */}
                    <div className="bg-accent absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity group-hover/icon:opacity-10" />

                    <techItem.icon className="text-secondary group-hover/icon:text-accent relative h-6 w-6 transition-colors duration-300" />

                    <span className="bg-primary text-bg absolute -top-10 left-1/2 z-30 -translate-x-1/2 scale-0 rounded-lg px-2 py-1 text-[10px] font-bold transition-all group-hover/icon:scale-100">
                      {techItem.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mt-6 flex gap-4 max-[500px]:flex-col lg:hidden">
            <Button
              isLink={true}
              linkTo={link.detail}
              className="flex-1 text-center"
            >
              View Case Study
            </Button>

            <Button
              isOutline={true}
              isLink={true}
              linkTo={link.live}
              target="_blank"
              className="bg-accent! hover:bg-accent-hover! flex-1 text-center text-white!"
            >
              {btnText}
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-3 hidden lg:block">
        <ProjectItemCard
          img={img}
          badge={badge}
          title={title}
          link={link}
          btnText={btnText}
        />
      </div>
    </div>
  );
}

export default ProjectSkill;
