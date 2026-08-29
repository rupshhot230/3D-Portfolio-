import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    title: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    title: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    title: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    title: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="font-black uppercase text-center leading-none text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 select-none"
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="max-w-5xl mx-auto border-t border-[#0C0C0C]/15">
          {servicesData.map((item, idx) => (
            <FadeIn key={item.number} delay={idx * 0.1} y={30}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 sm:gap-8 md:gap-12 group">
                {/* Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#0C0C0C] leading-none shrink-0 w-28 sm:w-40 md:w-56 select-none group-hover:translate-x-2 transition-transform duration-300"
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight"
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
