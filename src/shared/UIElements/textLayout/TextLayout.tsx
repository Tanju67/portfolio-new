import { useTranslation } from "react-i18next";

function TextLayout({
  subtitle,
  title,
  text,
  isBoth = false,
  translationKey,
  isMainTitle = false,
  className,
}: {
  subtitle: string;
  title: string;
  text: string;
  isBoth?: boolean;
  translationKey: string;
  isTextCenter?: boolean;
  isMainTitle?: boolean;
  className?: string;
}) {
  const { t } = useTranslation(translationKey);
  return (
    <>
      <div
        className={
          "inline-flex w-full items-center gap-3 " +
          className +
          " " +
          (isMainTitle ? "mb-4" : "mb-2")
        }
      >
        <span className="bg-accent h-0.5 w-8 rounded-full"></span>
        <h4 className="text-accent text-xs font-bold tracking-[0.3em] uppercase">
          {t(subtitle)}
        </h4>
        {isBoth && <span className="bg-accent h-0.5 w-8 rounded-full"></span>}
      </div>

      <h2
        className={
          "text-primary title-size leading-tight font-black tracking-tight " +
          (isMainTitle ? "xl:text-6xl!" : "xl:text-5xl!") +
          " " +
          (isMainTitle ? "mb-6" : "mb-2")
        }
      >
        {t(title)}
      </h2>

      <p className="text-secondary text-size mx-auto mb-4 leading-relaxed">
        {t(text)}
      </p>
    </>
  );
}

export default TextLayout;
