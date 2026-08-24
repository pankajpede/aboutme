import { useRef } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { FiArrowRight, FiArrowLeft } from '../ui/Icons';

import certGoogleUx from '../../assets/images/certificates/Google/UX Design/UX_Design.jpg';
import certGooglePm from '../../assets/images/certificates/Google/Project Management/01_Foundations_of_Project_Management.jpg';

import certUdemyFigma from '../../assets/images/certificates/udemy/Figma UI UX Design Advanced.jpg';
import certUdemyGpt from '../../assets/images/certificates/udemy/gpt-prompt-engineering-for-uxui.jpg';
import certCourseraFigma from '../../assets/images/certificates/coursera/GetStartedFigma.jpg';

import certAi from '../../assets/images/certificates/IdX/course-certificate-ai-for-designers.jpg';
import certUxMgmt from '../../assets/images/certificates/IdX/course-certificate-ux-management-strategy-and-tactics.jpg';
import certDonNorman from '../../assets/images/certificates/IdX/course-certificate-design-for-a-better-world-with-don-norman-course.jpg';
import certDataDriven from '../../assets/images/certificates/IdX/course-certificate-data-driven-design-quantitative-research-for-ux.jpg';
import certAccessibility from '../../assets/images/certificates/IdX/course-certificate-accessibility-how-to-design-for-all.jpg';
import certInfovis from '../../assets/images/certificates/IdX/course-certificate-information-visualization-infovis.jpg';
import certCommunication from '../../assets/images/certificates/IdX/certificate-present-like-a-pro-communication-skills.jpg';
import certBeginner from '../../assets/images/certificates/IdX/course-certificate-user-experience-the-beginner-s-guide.jpg';

export function LearningSharing() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const certificates = [
    // 1. IN PROGRESS
    { title: 'Foundations of Project Management', org: 'Google', img: certGooglePm, status: 'IN PROGRESS' },

    // 2. GOOGLE
    { title: 'Google UX Design Professional Certificate', org: 'Google', img: certGoogleUx, status: 'COMPLETED' },

    // 3. IxDF (IdX)
    { title: 'AI for Designers', org: 'Interaction Design Foundation (IxDF)', img: certAi, status: 'COMPLETED' },
    { title: 'UX Management: Strategy & Tactics', org: 'Interaction Design Foundation (IxDF)', img: certUxMgmt, status: 'COMPLETED' },
    { title: 'Design for a Better World with Don Norman', org: 'Interaction Design Foundation (IxDF)', img: certDonNorman, status: 'COMPLETED' },
    { title: 'Data-Driven Design: Quantitative Research', org: 'Interaction Design Foundation (IxDF)', img: certDataDriven, status: 'COMPLETED' },
    { title: 'Accessibility: How to Design for All', org: 'Interaction Design Foundation (IxDF)', img: certAccessibility, status: 'COMPLETED' },
    { title: 'Information Visualization (InfoVis)', org: 'Interaction Design Foundation (IxDF)', img: certInfovis, status: 'COMPLETED' },
    { title: 'Present Like a Pro: Communication', org: 'Interaction Design Foundation (IxDF)', img: certCommunication, status: 'COMPLETED' },
    { title: 'UX: The Beginner\'s Guide', org: 'Interaction Design Foundation (IxDF)', img: certBeginner, status: 'COMPLETED' },

    // 4. COURSERA
    { title: 'Get Started with Figma', org: 'Coursera', img: certCourseraFigma, status: 'COMPLETED' },

    // 5. UDEMY
    { title: 'Figma UI UX Design Advanced', org: 'Udemy', img: certUdemyFigma, status: 'COMPLETED' },
    { title: 'GPT Prompt Engineering for UX/UI', org: 'Udemy', img: certUdemyGpt, status: 'COMPLETED' },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -265, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 265, behavior: 'smooth' });
    }
  };

  return (
    <section id="learning-sharing" className="py-20 lg:py-16 bg-surface border-t border-border overflow-hidden">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="01" title="Learning & Certification" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-6">
          <div>
            <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
              I learn with purpose.<br /><span className="text-primary">I build with intent.</span>
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">
              SWIPE / DRAG TO EXPLORE →
            </span>
          </div>
        </div>

        {/* Full Width Horizontal Scroll Track: 4.3 Desktop / 3.4 Tablet / 2.3 Mobile */}
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar pb-8 -mx-5 px-5 lg:mx-0 lg:px-0 scroll-smooth"
        >
          <div className="flex gap-4 sm:gap-5 lg:gap-6 min-w-max pt-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className="w-[155px] sm:w-[210px] lg:w-[265px] flex flex-col group relative shrink-0">

                {/* Wall Nail & Hanging Wire Assembly */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                  {/* Metallic Wall Nail */}
                  <div className="w-2 h-2 rounded-full bg-ink border border-border shadow-sm z-10"></div>
                  {/* Hanging Wire */}
                  <svg className="w-[110px] sm:w-[150px] lg:w-[190px] h-[18px] -mt-1" viewBox="0 0 190 18" fill="none">
                    <path d="M95 0 L8 18 M95 0 L182 18" stroke="#77787C" strokeWidth="1" strokeDasharray="3 1" strokeOpacity="0.8" />
                  </svg>
                </div>

                {/* Metallic Bevelled Gallery Picture Frame */}
                <div className="certificate-frame mb-3 relative">
                  <div className="certificate-frame__inner">
                    <img
                      src={cert.img}
                      alt={cert.title}
                    />
                  </div>
                </div>

                {/* Text Metadata & Status Badge Underneath Frame */}
                <div className="px-0.5 flex items-start justify-between gap-1.5">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-xs sm:text-sm font-semibold text-ink leading-tight mb-0.5 line-clamp-1">
                      {cert.title}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] text-muted font-medium uppercase tracking-wider truncate">
                      {cert.org}
                    </p>
                  </div>
                  <span className={`text-[7px] sm:text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border shrink-0 ${cert.status === 'COMPLETED' ? 'bg-ink text-dark-text border-ink' : 'bg-surface text-ink border-border'}`}>
                    {cert.status}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Centered Bottom Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-ink hover:bg-ink hover:text-dark-text transition-colors shadow-sm"
          >
            <FiArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-ink hover:bg-ink hover:text-dark-text transition-colors shadow-sm"
          >
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* <div className="mt-6 text-center">
          <Link to="/learning" className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-ink hover:text-muted transition-colors group relative">
            VIEW ALL CERTIFICATES & LEARNING
            <FiArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-ink transition-colors"></span>
          </Link>
        </div> */}

      </div>
    </section>
  );
}
