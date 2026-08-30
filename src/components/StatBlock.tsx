import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div className={cn("border border-border-subtle bg-surface p-5 text-center", className)}>
      <p className="font-display text-3xl font-bold text-accent sm:text-4xl">{value}</p>
      <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">{label}</p>
    </div>
  );
}
