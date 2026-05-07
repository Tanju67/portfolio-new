import { Link } from "react-router-dom";

function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div
        className={
          "bg-accent flex rotate-3 items-center justify-center rounded-sm " +
          className
        }
      >
        <span className="font-heading -rotate-3 text-sm font-bold text-white sm:text-lg">
          T
        </span>
      </div>

      <span className="font-heading text-sm font-bold tracking-tighter md:text-xl">
        TANJU ÖZER<span className="text-primary">.</span>
      </span>
    </Link>
  );
}

export default Logo;
