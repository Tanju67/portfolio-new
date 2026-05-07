import CaseStudy from "./CaseStudy";
import Gallery from "./Gallery";
import SideBar from "./SideBar";

function ProjectDetail() {
  return (
    <section className="bg-bg section-padding mx-auto mt-6 max-w-2xl lg:max-w-5xl xl:max-w-full">
      <div className="bg-accent/5 pointer-events-none absolute top-0 left-1/2 h-full w-1/2 -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="section-width pt-10">
        <div className="bg-surface/50 border-border mb-12 rounded-2xl border p-2 shadow-inner sm:p-4">
          <Gallery />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <CaseStudy />
          <SideBar />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
