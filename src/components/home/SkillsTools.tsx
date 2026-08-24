import { useState, useEffect } from 'react';
import { FiCheck, FiArrowRight, FiX, FiExternalLink, FiStar } from '../ui/Icons';
import { Link } from 'react-router-dom';

// Import technology SVG assets from src/assets/images/skills/
import iconIllustrator from '../../assets/images/skills/adobe-illustrator-cs6.svg';
import iconPhotoshop from '../../assets/images/skills/adobe-photoshop.svg';
import iconAngular from '../../assets/images/skills/angular.svg';
import iconBootstrap from '../../assets/images/skills/bootstrap-5.svg';
import iconFigma from '../../assets/images/skills/figma.svg';
import iconGithub from '../../assets/images/skills/github.svg';
import iconMiro from '../../assets/images/skills/miro.svg';
import iconReactNative from '../../assets/images/skills/react-native.svg';
import iconTailwind from '../../assets/images/skills/tailwind-css.svg';
import iconTypescript from '../../assets/images/skills/typescript.svg';

// Tool Asset Map mapping keys to SVG sources & display names
const TOOL_ASSETS: Record<string, { name: string; src: string }> = {
  figma: { name: 'Figma', src: iconFigma },
  miro: { name: 'Miro', src: iconMiro },
  'adobe-illustrator-cs6': { name: 'Illustrator', src: iconIllustrator },
  'adobe-photoshop': { name: 'Photoshop', src: iconPhotoshop },
  github: { name: 'GitHub', src: iconGithub },
  angular: { name: 'Angular', src: iconAngular },
  'bootstrap-5': { name: 'Bootstrap 5', src: iconBootstrap },
  'tailwind-css': { name: 'Tailwind CSS', src: iconTailwind },
  typescript: { name: 'TypeScript', src: iconTypescript },
  'react-native': { name: 'React Native', src: iconReactNative },
};

export interface SkillItem {
  id: string;
  categoryNumber: string;
  categoryName: string;
  skillName: string;
  tools: string[];
  certificate?: string;
  proficiencyDots: number; // 5, 4, or 3
  levelText: string; // 'Expert' | 'Advanced' | 'Working'
  detailExplanation: string;
  capabilities: string[];
  relatedWork?: { name: string; link: string };
}

const CATEGORIES = [
  { number: '01', name: 'UX DESIGN' },
  { number: '02', name: 'PRODUCT & UI' },
  { number: '03', name: 'DESIGN → CODE' },
  { number: '04', name: 'AI & EMERGING TECHNOLOGY' },
];

const SKILL_DATA: SkillItem[] = [
  // CATEGORY 01 — UX DESIGN
  {
    id: 'ux-research-mapping',
    categoryNumber: '01',
    categoryName: 'UX DESIGN',
    skillName: 'UX Research & Mapping',
    tools: ['figma', 'miro'],
    certificate: 'Certificate · Data-Driven Design',
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Planning and executing qualitative user research, mental model synthesis, persona definitions, and end-to-end user journey mapping.',
    capabilities: [
      'Qualitative user interviews & context gathering',
      'Persona & mental model mapping',
      'End-to-end user journey & workflow mapping',
      'Synthesizing insights into actionable UX requirements'
    ],
    relatedWork: { name: 'UnityOne Infrastructure UX', link: '/work/unityone/complex-it-operations' }
  },
  {
    id: 'interaction-design',
    categoryNumber: '01',
    categoryName: 'UX DESIGN',
    skillName: 'Interaction Design',
    tools: ['figma', 'miro'],
    certificate: 'Certificate · Google UX Design',
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Designing intuitive navigation architectures, user flows, input feedback loops, and interactive system behaviors.',
    capabilities: [
      'Task flows & interactive wireframing',
      'Navigation taxonomy & hierarchy design',
      'Micro-interactions & state transitions',
      'Heuristic evaluation & usability optimization'
    ],
    relatedWork: { name: 'UnityOne Overview', link: '/work/unityone' }
  },
  {
    id: 'information-architecture',
    categoryNumber: '01',
    categoryName: 'UX DESIGN',
    skillName: 'Information Architecture',
    tools: ['figma', 'miro'],
    certificate: 'Certificate · Information Visualization',
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Organizing complex enterprise data, multi-level navigation trees, and multi-tenant platform taxonomies.',
    capabilities: [
      'Sitemap & navigation structure design',
      'Content hierarchy & taxonomy mapping',
      'Data-dense dashboard architecture',
      'Search & filtering workflow design'
    ],
    relatedWork: { name: 'UnityOne Complex IT Operations', link: '/work/unityone/complex-it-operations' }
  },
  {
    id: 'usability-testing',
    categoryNumber: '01',
    categoryName: 'UX DESIGN',
    skillName: 'Usability Testing',
    tools: ['figma', 'miro'],
    certificate: 'Certificate · Google UX Design',
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Structuring and facilitating moderated usability tests to evaluate prototype task success and iterate interaction details.',
    capabilities: [
      'Test script & scenario formulation',
      'Moderated prototype testing sessions',
      'Usability friction & error pattern analysis',
      'Iterative design refinement based on data'
    ],
    relatedWork: { name: 'Fispoke Wealthtech Platform', link: '/work/fispoke' }
  },
  {
    id: 'accessibility-design',
    categoryNumber: '01',
    categoryName: 'UX DESIGN',
    skillName: 'Accessibility Design',
    tools: ['figma', 'typescript'],
    certificate: 'Certificate · Accessibility: Design for All',
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Implementing WCAG 2.1 AA contrast standards, keyboard focus paths, screen-reader semantics, and accessible design tokens.',
    capabilities: [
      'WCAG 2.1 AA color contrast compliance',
      'Keyboard navigation & focus indicator specs',
      'Accessible design token definitions',
      'Aria semantics & screen reader guidelines'
    ],
    relatedWork: { name: 'PrismX Design System', link: '/work/prismx' }
  },

  // CATEGORY 02 — PRODUCT & UI
  {
    id: 'product-design',
    categoryNumber: '02',
    categoryName: 'PRODUCT & UI',
    skillName: 'Product Design',
    tools: ['figma', 'miro'],
    certificate: 'Certificate · IxDF UX Management & Strategy',
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'End-to-end product design bridging business objectives, technical constraints, user needs, and production UI deliverables.',
    capabilities: [
      'Product strategy & problem framing',
      'End-to-end feature lifecycle execution',
      'Cross-functional engineering & product alignment',
      'Metrics-driven UX optimization'
    ],
    relatedWork: { name: 'Fispoke Private Banking Platform', link: '/work/fispoke' }
  },
  {
    id: 'ui-design',
    categoryNumber: '02',
    categoryName: 'PRODUCT & UI',
    skillName: 'UI Design',
    tools: ['figma', 'adobe-illustrator-cs6', 'adobe-photoshop'],
    certificate: 'Certificate · Udemy Figma UI UX Design Advanced',
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Crafting sophisticated visual layouts, typography hierarchies, custom vector assets, and refined digital interfaces.',
    capabilities: [
      'High-fidelity visual interface composition',
      'Editorial typography & grid layout',
      'Custom SVG vector asset creation',
      'Dark/Light mode visual balance'
    ],
    relatedWork: { name: 'PrismX Platform UI', link: '/work/prismx' }
  },
  {
    id: 'design-systems',
    categoryNumber: '02',
    categoryName: 'PRODUCT & UI',
    skillName: 'Design Systems',
    tools: ['figma', 'github'],
    certificate: 'Certificate · Coursera Get Started with Figma',
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Architecting scalable, token-driven component libraries, variant sets, versioning rules, and cross-team documentation.',
    capabilities: [
      'Design token architecture (Colors, Typography, Spacing)',
      'Figma component library & variant optimization',
      'Component spec documentation & usage guidelines',
      'Design system version control & governance'
    ],
    relatedWork: { name: 'PrismX Configurable System Engine', link: '/work/prismx' }
  },
  {
    id: 'high-fi-prototyping',
    categoryNumber: '02',
    categoryName: 'PRODUCT & UI',
    skillName: 'High-Fidelity Prototyping',
    tools: ['figma'],
    certificate: 'Certificate · Udemy Figma UI UX Design Advanced',
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Constructing dynamic, realistic interactive prototypes with variable component states and responsive micro-animations.',
    capabilities: [
      'Figma interactive component prototypes',
      'State-driven simulation & logic prototyping',
      'Micro-interaction timing & motion specs',
      'Stakeholder walkthroughs & user validation'
    ],
    relatedWork: { name: 'UnityOne Operations Console Prototype', link: '/work/unityone' }
  },
  {
    id: 'data-visualization',
    categoryNumber: '02',
    categoryName: 'PRODUCT & UI',
    skillName: 'Data Visualization',
    tools: ['figma'],
    certificate: 'Certificate · Information Visualization',
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Translating dense operational metrics, real-time telemetry, and financial yields into clear, actionable visual displays.',
    capabilities: [
      'Operational monitoring dashboard UI',
      'Chart taxonomy & data legend design',
      'Real-time status indicators & threshold visual alerts',
      'Scannable executive reporting templates'
    ],
    relatedWork: { name: 'UnityOne Reporting & Data', link: '/work/unityone/reporting-data' }
  },

  // CATEGORY 03 — DESIGN → CODE
  {
    id: 'design-to-code',
    categoryNumber: '03',
    categoryName: 'DESIGN → CODE',
    skillName: 'Design-to-Code',
    tools: ['figma', 'angular', 'typescript'],
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Bridging design token specs with front-end code structures for seamless developer handoff and component accuracy.',
    capabilities: [
      'Figma-to-Code token translation',
      'Component API prop & state mapping',
      'Developer handoff spec documentation',
      'Design QA & front-end implementation review'
    ],
    relatedWork: { name: 'PrismX Engine Handoff', link: '/work/prismx' }
  },
  {
    id: 'responsive-ui-engineering',
    categoryNumber: '03',
    categoryName: 'DESIGN → CODE',
    skillName: 'Responsive UI Engineering',
    tools: ['angular', 'bootstrap-5', 'tailwind-css', 'typescript'],
    proficiencyDots: 5,
    levelText: 'Expert',
    detailExplanation: 'Engineering fluid, breakpoint-driven user interfaces that scale gracefully across mobile, tablet, and desktop viewports.',
    capabilities: [
      'Fluid layout mathematics & grid breakpoints',
      'Utility-first CSS architecture (Tailwind / Bootstrap)',
      'Cross-browser responsive testing & debugging',
      'Touch vs mouse interaction handling'
    ],
    relatedWork: { name: 'Onella Portfolio Architecture', link: '/' }
  },
  {
    id: 'frontend-development',
    categoryNumber: '03',
    categoryName: 'DESIGN → CODE',
    skillName: 'Front-end Development',
    tools: ['angular', 'typescript', 'github'],
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Writing structured, modular TypeScript code and component logic for scalable enterprise web applications.',
    capabilities: [
      'Modular component structure & props',
      'TypeScript type definitions & interfaces',
      'Version control workflow & Git collaboration',
      'UI state management & dynamic rendering'
    ],
    relatedWork: { name: 'PrismX Application Generator', link: '/work/prismx' }
  },
  {
    id: 'mobile-development',
    categoryNumber: '03',
    categoryName: 'DESIGN → CODE',
    skillName: 'Mobile Development',
    tools: ['react-native', 'typescript'],
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Designing and prototyping cross-platform mobile user interfaces adhering to iOS Human Interface and Material guidelines.',
    capabilities: [
      'React Native component layout & styling',
      'Mobile navigation patterns & gesture flows',
      'Touch target & thumb-zone usability optimization',
      'Cross-platform iOS & Android UI alignment'
    ],
    relatedWork: { name: 'Fispoke Mobile Advisor Portal', link: '/work/fispoke' }
  },

  // CATEGORY 04 — AI & EMERGING TECHNOLOGY
  {
    id: 'ai-assisted-product-design',
    categoryNumber: '04',
    categoryName: 'AI & EMERGING TECHNOLOGY',
    skillName: 'AI-assisted Product Design',
    tools: ['figma'],
    certificate: 'Certificate · Udemy GPT Prompt Engineering for UX/UI',
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Integrating AI tools into the design workflow for accelerated visual ideation, copy variation, and design research synthesis.',
    capabilities: [
      'AI-powered design exploration & moodboarding',
      'Generative content & copy iteration',
      'Accelerated user feedback synthesis',
      'AI workflow tool integration'
    ],
    relatedWork: { name: 'UnityOne AI Assistant UX', link: '/work/unityone/ai-assistant' }
  },
  {
    id: 'ai-ux-assistive-workflows',
    categoryNumber: '04',
    categoryName: 'AI & EMERGING TECHNOLOGY',
    skillName: 'AI UX & Assistive Workflows',
    tools: ['figma'],
    certificate: 'Certificate · Udemy GPT Prompt Engineering for UX/UI',
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Designing decision-support interfaces and conversational AI tools that bring intelligent recommendations into user workflows.',
    capabilities: [
      'Context-aware AI decision support UI',
      'Conversational interface UX & prompt flows',
      'AI confidence score & recommendation display',
      'Operator override & control mechanisms'
    ],
    relatedWork: { name: 'UnityOne AI Assistant Case Study', link: '/work/unityone/ai-assistant' }
  },
  {
    id: 'ai-prototyping',
    categoryNumber: '04',
    categoryName: 'AI & EMERGING TECHNOLOGY',
    skillName: 'AI Prototyping',
    tools: ['figma'],
    certificate: 'Certificate · Udemy GPT Prompt Engineering for UX/UI',
    proficiencyDots: 4,
    levelText: 'Advanced',
    detailExplanation: 'Prototyping dynamic AI assistant interactions, prompt inputs, and intelligent recommendation loops in interactive prototypes.',
    capabilities: [
      'Simulating AI recommendation flows',
      'Interactive prompt input & feedback prototyping',
      'Testing user trust & AI transparency patterns',
      'AI assistant state & fallback design'
    ],
    relatedWork: { name: 'UnityOne AI Assistant Prototype', link: '/work/unityone/ai-assistant' }
  },
];

export function SkillsTools() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSkill(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="skills-tools" className="py-20 lg:py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="mb-14">
          <div className="text-[10px] font-bold tracking-[0.12em] text-muted uppercase mb-3 flex items-center gap-2">
            <span className="text-primary">03 /</span> SKILLS & TOOLS
          </div>
          <h2 className="font-display text-[32px] sm:text-[42px] font-semibold leading-[1.1] text-ink tracking-tight">
            Design, product and technology — <span className="text-primary">in practice.</span>
          </h2>
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-16">
          {CATEGORIES.map((cat) => {
            const categorySkills = SKILL_DATA.filter(
              (s) => s.categoryNumber === cat.number
            );

            return (
              <div key={cat.number} className="space-y-6">
                {/* Editorial Category Section Label */}
                <div className="flex items-center gap-3 border-b border-border/70 pb-3">
                  <span className="text-xs font-bold text-primary font-mono tracking-wider">
                    {cat.number}
                  </span>
                  <span className="text-xs font-bold tracking-[0.1em] text-ink uppercase font-display">
                    {cat.name}
                  </span>
                </div>

                {/* 3-Column Card Grid (Desktop: 3, Tablet: 2, Mobile: 1) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedSkill(skill);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View details for ${skill.skillName}`}
                      className="bg-surface border border-border hover:border-ink/40 rounded-xl p-4 sm:p-4.5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary/40 min-h-[145px]"
                    >
                      {/* Top Part: 1. Title -> 2. Certificate -> 3. Proficiency */}
                      <div className="space-y-1.5 mb-3">
                        {/* 1. Skill Title */}
                        <h3 className="font-display text-base font-semibold text-ink group-hover:text-primary transition-colors leading-tight">
                          {skill.skillName}
                        </h3>

                        {/* 2. Certificate Name */}
                        {skill.certificate ? (
                          <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink/80 truncate">
                            <FiCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="truncate">{skill.certificate}</span>
                          </div>
                        ) : null}

                        {/* 3. Rating / Proficiency */}
                        <div className="flex items-center gap-2 pt-0.5">
                          <div className="flex items-center gap-0.5 text-primary">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <FiStar
                                key={idx}
                                fill={idx < skill.proficiencyDots ? 'currentColor' : 'none'}
                                className={`w-3.5 h-3.5 ${
                                  idx < skill.proficiencyDots
                                    ? 'text-primary'
                                    : 'text-border'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] font-medium text-muted">
                            {skill.levelText}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Part: Left Logos & Right View Details Button */}
                      <div className="pt-2.5 border-t border-border/50 flex items-center justify-between gap-3">
                        {/* Left: Technology SVG Logos */}
                        <div className="flex items-center gap-2.5">
                          {skill.tools.map((toolKey) => {
                            const toolObj = TOOL_ASSETS[toolKey];
                            if (!toolObj) return null;
                            return (
                              <div
                                key={toolKey}
                                className="relative group/tool opacity-90 hover:opacity-100 transition-opacity"
                              >
                                <img
                                  src={toolObj.src}
                                  alt={toolObj.name}
                                  className="max-h-[18px] w-auto object-contain shrink-0"
                                />
                                {/* Custom Tooltip on Hover */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-ink text-background text-[9px] font-bold tracking-wider uppercase rounded shadow-md opacity-0 group-hover/tool:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap z-20">
                                  {toolObj.name}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-ink"></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Right: View details button */}
                        <span className="text-[11px] font-semibold text-ink group-hover:text-primary transition-colors flex items-center gap-1 shrink-0">
                          View details
                          <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightweight Detail Modal / Panel */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-xs"
          onClick={() => setSelectedSkill(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-skill-title"
        >
          <div
            className="bg-surface border border-border rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-5 right-5 p-1 rounded-md text-muted hover:text-ink hover:bg-background border border-transparent hover:border-border transition-all"
              aria-label="Close detail modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Modal Category & Title */}
            <div className="text-[10px] font-bold tracking-widest text-primary uppercase mb-1">
              {selectedSkill.categoryNumber} / {selectedSkill.categoryName}
            </div>
            <h3 id="modal-skill-title" className="font-display text-2xl font-bold text-ink mb-4">
              {selectedSkill.skillName}
            </h3>

            {/* Tools Used Row */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest text-muted uppercase block mb-2">
                TECHNOLOGIES & TOOLS
              </span>
              <div className="flex flex-wrap gap-3">
                {selectedSkill.tools.map((tKey) => {
                  const tObj = TOOL_ASSETS[tKey];
                  if (!tObj) return null;
                  return (
                    <div
                      key={tKey}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-lg text-xs font-semibold text-ink"
                    >
                      <img src={tObj.src} alt={tObj.name} className="h-4 w-auto object-contain" />
                      <span>{tObj.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Short Explanation */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest text-muted uppercase block mb-2">
                PRACTICAL CAPABILITY
              </span>
              <p className="text-sm text-muted leading-relaxed">
                {selectedSkill.detailExplanation}
              </p>
            </div>

            {/* Core Bullet Points */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest text-muted uppercase block mb-2">
                KEY HIGHLIGHTS
              </span>
              <ul className="space-y-2">
                {selectedSkill.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-ink/90 font-medium">
                    <FiCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate & Related Work Links */}
            <div className="pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4">
              {selectedSkill.certificate ? (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-ink">
                  <FiCheck className="w-4 h-4 text-primary" />
                  <span>{selectedSkill.certificate}</span>
                </div>
              ) : (
                <div></div>
              )}

              {selectedSkill.relatedWork && (
                <Link
                  to={selectedSkill.relatedWork.link}
                  onClick={() => setSelectedSkill(null)}
                  className="inline-flex items-center text-xs font-bold text-primary hover:underline gap-1 uppercase tracking-wider"
                >
                  {selectedSkill.relatedWork.name}
                  <FiExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
