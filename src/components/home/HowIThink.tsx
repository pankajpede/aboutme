

export function HowIThink() {
  return (
    <section className="py-32 lg:py-48 bg-ink border-y border-border/10 text-white relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5 -z-10"></div>

      <div className="container mx-auto px-5 lg:px-12 xl:px-16 relative z-10">
        
        <div className="mb-20">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">03</span>
            <div className="w-8 h-[1px] bg-white/10"></div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">How I Think</h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[14px] text-text-muted mb-12">
            ✦
          </div>

          <h3 className="font-display text-[clamp(40px,6vw,96px)] font-bold tracking-tight leading-[1.05] text-balance mx-auto mb-16 text-white">
            Good design is not just<br/>how the interface looks.
          </h3>

          <p className="text-xl lg:text-[28px] leading-relaxed text-text-muted font-medium max-w-3xl mx-auto">
            It's understanding the problem, making trade-offs, and creating something worth building.
          </p>
        </div>

      </div>
    </section>
  );
}
