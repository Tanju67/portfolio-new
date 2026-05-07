import { useTranslation } from "react-i18next";
import img from "../../assets/foto.jpg";
import MyImage from "../../shared/UIElements/myImage/MyImage";

function About() {
  const { t } = useTranslation("aboutPage");
  return (
    <section className="section-padding">
      <div className="bg-accent/5 pointer-events-none absolute top-0 left-1/2 h-full w-1/2 -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="section-width mt-10">
        <div className="">
          <div className="float-left mr-8 mb-4 hidden md:block">
            <MyImage badge={false} />
          </div>
          <div>
            <div className="mb-2 flex items-center gap-4 md:mb-0 md:gap-0">
              <div>
                <div className="h-25 w-25 overflow-hidden rounded-full md:hidden">
                  <img
                    src={img}
                    alt="me"
                    className="h-30 w-30 object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="bg-accent h-px w-8"></span>
                  <h4 className="text-accent text-xs font-black tracking-[0.3em] uppercase">
                    {t("about.subtitle")}
                  </h4>
                </div>
                <h2 className="title-size mb-4 leading-tight font-semibold">
                  {t("about.title")}
                </h2>
              </div>
            </div>

            <p className="text-secondary text-size leading-relaxed whitespace-pre-line">
              {t("about.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
