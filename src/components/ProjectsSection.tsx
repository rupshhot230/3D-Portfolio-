import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface Project {
  number: string;
  name: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const projectsData: Project[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  containerRef,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const stickyTop = 96 + index * 28; // top-24 (96px) + index * 28px

  return (
    <div
      ref={cardRef}
      className="sticky h-auto min-h-[75vh] md:min-h-[85vh] mb-12 sm:mb-16 flex items-start justify-center"
      style={{ top: `${stickyTop}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col justify-between"
      >
        {/* Top Row Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Number */}
            <span
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              className="font-black text-[#D7E2EA] leading-none select-none"
            >
              {project.number}
            </span>

            {/* Category & Title */}
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
                className="text-[#D7E2EA] font-medium uppercase tracking-tight"
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <div>
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom Row Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width / 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>

          {/* Right Column (60% width / 7 cols) */}
          <div className="md:col-span-7 flex">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full h-full min-h-[300px] md:min-h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-10 pb-28 px-4 sm:px-6 md:px-10 relative z-20 w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight py-16 sm:py-24 select-none"
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacked Cards */}
        <div className="flex flex-col relative pb-20">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={idx}
              totalCards={projectsData.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
