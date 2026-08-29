import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const aboutText =
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Corner 3D Decorative Images */}

      {/* Top-left: Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shape Object"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      {/* Top-right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Object"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16 select-none"
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated Paragraph */}
        <div className="mb-16 sm:mb-20 md:mb-24 flex justify-center">
          <AnimatedText text={aboutText} />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
