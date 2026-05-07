import {
  BsFillLightbulbFill,
  BsFillPuzzleFill,
  BsFillRocketTakeoffFill,
  BsInfoSquareFill,
  BsStars,
} from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useProjects } from "../../shared/hooks/useProjects";

function CaseStudy() {
  const { id } = useParams();
  const { translatedProjects: projects } = useProjects();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found.</div>;

  const {
    about,
    challenge,
    approach,
    features,
    learnings,
    results,
    hero,
    evolution,
    security,
    ux,
  } = project;

  const caseStudyArr = [
    { data: about, icon: <BsInfoSquareFill /> },
    { data: features, icon: <BsFillLightbulbFill /> },
    { data: challenge, icon: <BsFillPuzzleFill /> },
    { data: approach, icon: <BsFillLightbulbFill /> },
    { data: security, icon: <MdOutlineSecurity /> },
    { data: ux, icon: <BsStars /> },
    { data: evolution, icon: <BsFillRocketTakeoffFill /> },
    { data: learnings, icon: <FaBrain /> },
    { data: results, icon: <FaChartLine /> },
  ];
  return (
    <div className="space-y-6 md:space-y-8 lg:col-span-8 lg:space-y-10 xl:space-y-12">
      <header className="space-y-2 md:space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-accent h-0.5 w-8"></span>
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
            Case Study
          </span>
        </div>
        <h1 className="text-primary text-4xl leading-tight font-black tracking-tight md:text-6xl">
          {hero.title}
        </h1>
        <p className="text-secondary text-xl leading-relaxed font-medium md:text-2xl">
          {hero.subtitle}
        </p>
      </header>

      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        {caseStudyArr.map(
          (section, idx) =>
            section.data?.title && (
              <section
                key={idx}
                className="sm:border-border group hover:border-accent relative transition-colors duration-500 sm:border-l-2 sm:pl-8"
              >
                <span className="bg-bg group-hover:text-accent absolute top-0 -left-3.25 hidden p-1 text-lg leading-none transition-colors duration-500 sm:block">
                  {section.icon}
                </span>

                <h2 className="text-primary title-size mb-1 font-bold md:mb-4">
                  {section.data.title}
                </h2>
                {"text" in section.data && (
                  <p className="text-secondary text-size leading-relaxed whitespace-pre-line">
                    {section.data.text}
                  </p>
                )}

                {"items" in section.data && (
                  <ul className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-6">
                    {features.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-surface border-border text-primary text-size flex items-center gap-3 rounded-xl border p-4 font-medium"
                      >
                        <span className="bg-accent h-2 w-2 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ),
        )}
      </div>
    </div>
  );
}

export default CaseStudy;
