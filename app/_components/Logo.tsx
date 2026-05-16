type Props = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className = "", variant = "dark" }: Props) {
  const textColor = variant === "light" ? "text-white" : "text-ink-900";
  const subColor = variant === "light" ? "text-brand-200" : "text-brand-600";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md"
      >
        <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent" />
        <span className="relative text-sm font-black tracking-tight">D43</span>
      </span>
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="text-lg font-bold tracking-tight">Digi43</span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Software Licensing
        </span>
      </span>
    </div>
  );
}
