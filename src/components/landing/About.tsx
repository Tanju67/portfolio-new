import { useTranslation } from "react-i18next";
import img from "../../assets/foto.jpg";
import Button from "../../shared/UIElements/button/Button";
import MyImage from "../../shared/UIElements/myImage/MyImage";

function About() {
  const { t } = useTranslation("homePage");
  return (
    <div className="bg-muted/20 section-padding">
      <div className="section-width section-grid">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-4 md:mb-0 md:gap-0">
            <div>
              <div className="h-20 w-20 overflow-hidden rounded-full md:hidden">
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

          <p className="text-secondary text-size mb-8 leading-relaxed whitespace-pre-line">
            {t("about.text")}
          </p>
          <div className="">
            <Button isLink={true} linkTo="/about">
              Learn more about me
            </Button>
          </div>
        </div>
        <MyImage />
      </div>
    </div>
  );
}

export default About;
