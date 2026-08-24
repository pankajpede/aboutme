type SectionLabelProps = {
  number: string;
  title: string;
};

export function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{number} /</span>
      <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">{title}</h2>
    </div>
  );
}
