interface Props {

  children: React.ReactNode;

  className?: string;

  onClick?: () => void;

  type?:
    | "button"
    | "submit";
}

export default function GradientButton({

  children,

  className = "",

  onClick,

  type = "button",

}: Props) {

  return (

    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-4 rounded-2xl
        bg-gradient-to-r
        from-pink-500
        via-purple-500
        to-blue-500
        text-white
        font-semibold
        shadow-lg
        shadow-purple-500/20
        hover:scale-[1.02]
        transition-all
        ${className}
      `}
    >

      {children}

    </button>
  );
}