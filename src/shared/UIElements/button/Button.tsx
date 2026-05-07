import { t } from "i18next";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: React.ReactNode;
  isLink?: boolean;
  linkTo?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  isOutline?: boolean;
  target?: string;
};

function Button({
  children,
  isLink,
  linkTo,
  className,
  onClick,
  disabled,
  type,
  isOutline,
  target,
}: ButtonProps) {
  const outline = isOutline
    ? "border-border border hover:bg-accent hover:text-surface "
    : "bg-primary text-surface  hover:bg-primary/80 ";

  if (isLink)
    return (
      <Link
        className={
          className +
          ` transtion-colors btn-size cursor-pointer rounded-md px-6 py-3 duration-300 active:scale-95 ` +
          outline
        }
        to={linkTo || "#"}
        target={target || "_self"}
      >
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      className={
        className +
        ` transtion-colors text-size cursor-pointer rounded-md px-6 py-3 duration-300 active:scale-95 ` +
        outline
      }
      disabled={disabled}
      type={type || "button"}
    >
      {children}
    </button>
  );
}

export default Button;
