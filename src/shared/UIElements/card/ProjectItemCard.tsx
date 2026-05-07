import Button from "../button/Button";

type ProjectItemCardProps = {
  img: string;
  badge: string[];
  link: {
    detail: string;
    live: string;
  };
  title: string;
  btnText?: string;
};

function ProjectItemCard({
  img,
  badge,
  link,
  title,
  btnText,
}: ProjectItemCardProps) {
  return (
    <div className="border-border bg-surface rounded-3xl border p-6 shadow-xl transition hover:shadow-2xl">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={img}
          className="mb-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02]"
        />
      </div>

      <div className="no-scrollbar mb-4 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible md:flex-nowrap md:overflow-x-auto lg:flex-wrap lg:overflow-visible">
        {badge.map((item, index) => (
          <span
            key={index}
            className="border-accent/30 bg-accent/10 text-accent group-hover:border-accent group-hover:bg-accent rounded-lg border px-3 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap uppercase transition-all duration-300 group-hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
      <h3 className="mb-4 text-2xl font-black tracking-tighter capitalize sm:text-3xl md:text-4xl">
        {title}
      </h3>
      <div className="flex gap-4 max-[950px]:flex-col max-[770px]:flex-row max-[500px]:flex-col">
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
  );
}

export default ProjectItemCard;
