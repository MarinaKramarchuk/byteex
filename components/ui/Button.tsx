interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variantStyles =
    variant === "primary"
      ? "bg-[#01005B] text-white"
      : "bg-white text-[#01005B] border border-[#01005B]";

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-[5px] font-normal text-[18px] leading-[100%] 
        tracking-[0.03em] flex items-center justify-center gap-2 transition-colors cursor-pointer
        ${variantStyles} ${className}
      `}
    >
      {children}

    </button>
  );
}
