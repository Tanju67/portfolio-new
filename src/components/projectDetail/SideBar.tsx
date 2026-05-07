import { Link, useParams } from "react-router-dom";
import { techMap, type TechKey } from "../../shared/data/techMap";
import { useProjects } from "../../shared/hooks/useProjects";
import Button from "../../shared/UIElements/button/Button";

function SideBar() {
  const { id } = useParams();
  const { translatedProjects: projects } = useProjects();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found.</div>;

  const { tech, github, live } = project;
  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:col-span-4">
      {/* Tech Stack Card */}
      <div className="bg-surface border-border rounded-2xl border p-8 shadow-xl">
        <h3 className="text-primary mb-6 flex items-center gap-2 text-sm font-black tracking-widest uppercase">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full"></span>
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-3">
          {tech.map((t) => {
            const techItem = techMap[t as TechKey];
            if (!techItem) return null;
            return (
              <Link
                to={techItem.link || ""}
                target="_blank"
                key={t}
                className="group bg-bg border-border hover:border-accent flex items-center gap-2 rounded-lg border px-3 py-2 transition-all"
                title={techItem.name}
              >
                <techItem.icon className="text-secondary group-hover:text-accent h-5 w-5 transition-colors" />
                <span className="text-primary text-xs font-semibold">
                  {techItem.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4">
          <Button
            isLink={true}
            linkTo={github.link}
            target="_blank"
            className="flex w-full items-center justify-center gap-2 py-4! shadow-lg"
          >
            {github.text}
          </Button>

          <Button
            isLink={true}
            linkTo={live.link}
            target="_blank"
            className="bg-accent! hover:bg-accent-hover! shadow-accent/20 flex w-full items-center justify-center gap-2 py-4! text-white! shadow-lg"
          >
            {live.text}
          </Button>
        </div>
      </div>

      <div className="p-6 text-center">
        <Link
          to="/"
          className="text-secondary hover:text-accent text-sm font-bold transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </aside>
  );
}

export default SideBar;
