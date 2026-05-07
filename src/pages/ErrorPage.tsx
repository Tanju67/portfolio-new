import { ArrowLeft, Home } from "lucide-react";
import Button from "../shared/UIElements/button/Button";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <section className="bg-background flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        {/* Error Code */}
        <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
          404 Error
        </span>

        {/* Title */}
        <h1 className="text-foreground mt-4 mb-6 text-5xl leading-tight font-bold md:text-7xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-secondary mx-auto mb-10 max-w-xl text-lg leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to the portfolio.
        </p>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            isLink={true}
            linkTo="/"
            className="flex flex-1 items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Button>

          <Button
            isLink={false}
            onClick={() => navigate(-1)}
            className="bg-accent! hover:bg-accent-hover! flex flex-1 items-center justify-center gap-2 text-white"
          >
            <ArrowLeft size={18} />
            Go Back
          </Button>
        </div>

        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[40px_40px]" />
      </div>
    </section>
  );
}

export default ErrorPage;
