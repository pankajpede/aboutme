import { SectionLabel } from '../components/ui/SectionLabel';
import { RecognitionCTA } from '../components/home/RecognitionCTA';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';
import { FiDownload } from '../components/ui/Icons';
import profilePhoto from '../assets/images/profile-photo.jpeg';
import resumePdf from '../assets/documents/PankajPede_UXUiDesigner_12.pdf';

// Import technology SVG icons from skills assets directory
import iconFigma from '../assets/images/skills/figma.svg';
import iconMiro from '../assets/images/skills/miro.svg';
import iconIllustrator from '../assets/images/skills/adobe-illustrator-cs6.svg';
import iconPhotoshop from '../assets/images/skills/adobe-photoshop.svg';
import iconTailwind from '../assets/images/skills/tailwind-css.svg';
import iconTypescript from '../assets/images/skills/typescript.svg';
import iconGithub from '../assets/images/skills/github.svg';
import iconBootstrap from '../assets/images/skills/bootstrap-5.svg';
import iconAngular from '../assets/images/skills/angular.svg';
import iconReact from '../assets/images/skills/react-native.svg';

// Custom inline SVG icons for HTML5, CSS4, SCSS
const IconHtml5 = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.657-12.984.002.701 8.028h8.802l-.337 3.524-2.73.743-2.738-.743-.175-1.956H6.386l.342 4.093 5.243 1.45 5.234-1.45.696-7.318H8.531z" fill="#E34F26" />
  </svg>
);

const IconCss4 = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm14.156 12.094l.236-2.657H6.551l.232 2.657h8.873zm.472-5.375l.236-2.657H5.612l.232 2.657h10.871zm-9.578 7.331l.175 1.956 2.738.743 2.73-.743.337-3.524H6.216l-.342 4.093 5.243 1.45 5.234-1.45.696-7.318h-8.802" fill="#1572B6" />
  </svg>
);

const IconScss = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.842 16.593c-2.43 1.258-5.385.733-6.953-.615-1.226-1.055-1.396-2.73-.398-3.924 1.156-1.385 3.23-1.61 4.79-.81 1.255.644 1.933 1.83 1.54 3.013-.263.79-.98 1.34-1.848 1.465a3.86 3.86 0 0 1-1.36-.04.428.428 0 0 0-.484.341c-.05.244.1.48.347.535a4.78 4.78 0 0 0 2.45-.162c1.378-.396 2.37-1.493 2.583-2.906.276-1.836-.723-3.66-2.464-4.557-2.316-1.194-5.267-.84-7.008 1.246-1.503 1.797-1.244 4.324.6 5.91 2.35 2.023 6.307 2.228 9.294.693.305-.157.426-.532.27-.837a.618.618 0 0 0-.402-.288z" fill="#CC6699" />
  </svg>
);

// Custom SVG Icons for AI Tools
const IconOpenAI = () => (
  <svg className="w-5 h-5 shrink-0 text-ink" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5355-3.0137l.142.0852 4.783 2.7582a.7748.7748 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 8.4956a4.485 4.485 0 0 1 2.3657-1.9728v5.6868a.7653.7653 0 0 0 .3879.6765l5.8144 3.359-2.0201 1.1687a.0758.0758 0 0 1-.071 0l-4.8303-2.7913A4.4944 4.4944 0 0 1 2.3408 8.4956zm16.0993 3.8558l-5.8428-3.3685 2.0201-1.1686a.0758.0758 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.682a.7653.7653 0 0 0-.4021-.6764zm2.0107-3.0231l-.142-.0852-4.7735-2.7582a.7748.7748 0 0 0-.7806 0l-5.8428 3.3685V7.521a.0804.0804 0 0 1 .0332-.0615l4.981-2.8764a4.4992 4.4992 0 0 1 6.5247 4.7417zM9.0143 14.1616l-2.02-1.1686a.071.071 0 0 1-.038-.052V7.3584a4.504 4.504 0 0 1 7.371-3.4536l-.142.0804-4.7782 2.7582a.7938.7938 0 0 0-.3928.6813v6.7369zm1.3121-2.9096l2.368-1.3692 2.368 1.3692v2.7384l-2.368 1.3692-2.368-1.3692V11.252z"/>
  </svg>
);

const IconClaude = () => (
  <svg className="w-5 h-5 shrink-0 text-[#D97757]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
  </svg>
);

const IconGemini = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-grad-ab)" />
    <defs>
      <linearGradient id="gemini-grad-ab" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8" />
        <stop offset="0.5" stopColor="#8AB4F8" />
        <stop offset="1" stopColor="#D93025" />
      </linearGradient>
    </defs>
  </svg>
);

const IconAntigravity = () => (
  <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18M3 12h18" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const IconPerplexity = () => (
  <svg className="w-5 h-5 shrink-0 text-[#20808D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93M2 12h20" />
  </svg>
);

const IconCursor = () => (
  <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export default function AboutPage() {
  const careerTimeline = [
    {
      period: '2022 — PRESENT',
      role: 'Sr. UX Designer',
      company: 'UnitedLayer',
      description: 'Led design for enterprise hybrid cloud management platform across infrastructure, AI assistance, and reporting analytics. Engineered unified component library & scalable UX architecture.',
      isCurrent: true
    },
    {
      period: '2018 — 2022',
      role: 'Sr. UX UI Designer',
      company: 'Intelligent Machines Lab',
      description: 'Designed complex digital products, workflows, automated systems, and connected experiences for enterprise clients.',
      isCurrent: false
    },
    {
      period: '2017 — 2018',
      role: 'UX Designer',
      company: 'Benchmark IT Solutions LLC',
      description: 'Shifted focus from interface design toward understanding user behaviors, complex interaction flows, and usability synthesis.',
      isCurrent: false
    },
    {
      period: '2013 — 2017',
      role: 'Web Designer',
      company: 'Enosis Software Solutions',
      description: 'Built a strong foundation in visual design, responsive interfaces, digital branding, and client digital experiences.',
      isCurrent: false
    }
  ];

  // Separate array for Tools
  const designTools = [
    { name: 'Figma', iconSrc: iconFigma },
    { name: 'Miro', iconSrc: iconMiro },
    { name: 'Illustrator', iconSrc: iconIllustrator },
    { name: 'Photoshop', iconSrc: iconPhotoshop }
  ];

  // Separate array for Technologies
  const techStack = [
    { name: 'HTML5', CustomIcon: IconHtml5 },
    { name: 'CSS / CSS4', CustomIcon: IconCss4 },
    { name: 'SCSS', CustomIcon: IconScss },
    { name: 'Bootstrap 5', iconSrc: iconBootstrap },
    { name: 'Tailwind CSS', iconSrc: iconTailwind },
    { name: 'Angular', iconSrc: iconAngular },
    { name: 'React', iconSrc: iconReact },
    { name: 'TypeScript', iconSrc: iconTypescript },
    { name: 'GitHub', iconSrc: iconGithub }
  ];

  // Separate array for AI Tools
  const aiTools = [
    { name: 'OpenAI / ChatGPT', CustomIcon: IconOpenAI },
    { name: 'Claude', CustomIcon: IconClaude },
    { name: 'Google Gemini', CustomIcon: IconGemini },
    { name: 'Antigravity', CustomIcon: IconAntigravity },
    { name: 'Perplexity', CustomIcon: IconPerplexity },
    { name: 'Cursor AI', CustomIcon: IconCursor }
  ];

  return (
    <div className="bg-background text-ink relative min-h-screen">
      <ScrollToTopWidget />

      {/* SECTION 01 / HERO ABOUT INTRO */}
      <section className="py-20 lg:py-24 bg-surface border-b border-border relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait Photo Card */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-border bg-background p-3 shadow-lg group">
                <img
                  src={profilePhoto}
                  alt="Pankaj Pede - Senior Product Designer"
                  className="w-full h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Photo Caption Overlay */}
                <div className="mt-3 px-3 py-2 bg-surface/90 backdrop-blur-md rounded-xl border border-border/60 flex items-center justify-between">
                  <span className="font-serif italic text-lg font-bold text-ink">
                    Pankaj Pede
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">
                    13+ YEARS EXP
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <SectionLabel number="01" title="ABOUT" />
                <h1 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
                  I've spent 13+ years<br />
                  <span className="text-primary">making digital things feel human.</span>
                </h1>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-muted font-medium leading-relaxed">
                <p>
                  I started in web and visual design over 13 years ago — and never stopped evolving. Today, I design complex enterprise platforms across cloud infrastructure, AI assistance systems, data analytics, and financial tools with leadership roles at UnitedLayer, Intelligent Machines Lab, and benchmark IT solutions.
                </p>

                <p>
                  My approach blends deep research synthesis with information design and interaction craft. I'm obsessed with the small details — micro-interactions, state feedback, edge cases, and empty states — because that's where product trust is earned.
                </p>

                <p>
                  Beyond product work, I mentor designers, experiment with AI tools, build scalable design systems, and continually practice craft — staying grounded and inspired. Always learning. Always creating.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02 / EXPERIENCE TIMELINE */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-12 max-w-4xl">
          <div>
            <SectionLabel number="02" title="EXPERIENCE" />
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
              A timeline of<br />
              <span className="text-primary">work that shaped me.</span>
            </h2>
          </div>

          {/* Timeline Stack */}
          <div className="space-y-10 relative before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-[1px] before:bg-border">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 space-y-2 group">
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-2.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                  item.isCurrent
                    ? 'bg-primary border-primary ring-4 ring-primary/20 scale-110'
                    : 'bg-background border-border group-hover:border-primary group-hover:bg-primary'
                }`} />

                {/* Period Eyebrow */}
                <div className="text-[10px] font-bold tracking-widest text-muted uppercase font-mono">
                  {item.period}
                </div>

                {/* Role & Company Heading */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {item.role} <span className="text-primary font-serif italic font-normal">— {item.company}</span>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 / TOOLKIT & TECHNOLOGIES */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-12 max-w-4xl">
          <div>
            <SectionLabel number="03" title="TOOLKIT" />
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
              Tools I reach for<br />
              <span className="text-primary">daily.</span>
            </h2>
          </div>

          {/* ROW 1: DESIGN & PRODUCT TOOLS */}
          <div className="space-y-4">
            <div className="text-[10px] font-bold tracking-widest text-muted uppercase font-mono border-b border-border/60 pb-2">
              01 / DESIGN & PRODUCT TOOLS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {designTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="px-5 py-4 bg-background border border-border rounded-2xl flex items-center justify-center gap-3 text-xs sm:text-sm font-display font-semibold text-ink hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-2xs group"
                >
                  <img
                    src={tool.iconSrc}
                    alt={`${tool.name} logo`}
                    className="w-5 h-5 shrink-0 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: TECHNOLOGIES & FRAMEWORKS */}
          <div className="space-y-4">
            <div className="text-[10px] font-bold tracking-widest text-muted uppercase font-mono border-b border-border/60 pb-2">
              02 / TECHNOLOGIES & FRAMEWORKS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3.5 bg-background border border-border rounded-2xl flex items-center justify-center gap-3 text-xs font-display font-semibold text-ink hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-2xs group"
                >
                  {tech.CustomIcon ? (
                    <tech.CustomIcon />
                  ) : (
                    <img
                      src={tech.iconSrc}
                      alt={`${tech.name} logo`}
                      className="w-5 h-5 shrink-0 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3: AI & INTELLIGENT WORKFLOW TOOLS */}
          <div className="space-y-4">
            <div className="text-[10px] font-bold tracking-widest text-muted uppercase font-mono border-b border-border/60 pb-2">
              03 / AI & INTELLIGENT WORKFLOW TOOLS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {aiTools.map((ai, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3.5 bg-background border border-border rounded-2xl flex items-center justify-center gap-3 text-xs font-display font-semibold text-ink hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-2xs group"
                >
                  <ai.CustomIcon />
                  <span>{ai.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 04 / PERSPECTIVE & QUOTE */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-10 max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel number="04" title="PERSPECTIVE" />
          </div>

          {/* Profile Badge Card */}
          <div className="p-6 bg-surface border border-border rounded-2xl max-w-lg mx-auto text-left flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-border shrink-0">
              <img src={profilePhoto} alt="Pankaj Pede" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-ink">Pankaj Pede</div>
              <div className="text-[11px] text-muted font-medium">Senior Product Designer (13+ years) · India</div>
              <div className="text-[10px] text-primary font-mono font-bold mt-0.5">Focus on UX research, design systems, and AI UX</div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl leading-relaxed text-ink/90 max-w-2xl mx-auto">
            "When I'm not designing, I'm expressing creativity through art, reflecting through meditation, and seeking inspiration in simple moments."
          </blockquote>

          {/* Download Resume Action */}
          <div>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="PankajPede_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-white hover:bg-primary text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 font-mono shadow-xs"
            >
              EXPLORE FULL RESUME
              <FiDownload className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* EXACT RECOGNITION CTA SECTION FROM OVERVIEW PAGE */}
      <RecognitionCTA />
    </div>
  );
}
