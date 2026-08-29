import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const summaryText =
    "A passionate and detail-oriented Mobile App & Web Developer with a strong foundation in Flutter, Dart, HTML, CSS, JavaScript, Bootstrap, and modern web technologies. Experienced in handling freelance projects and developing clean, responsive, and user-friendly applications. Skilled at problem-solving and transforming creative ideas into practical digital solutions. Enthusiastic about building high-quality mobile and web experiences while continuously enhancing technical expertise. Seeking an entry-level opportunity to contribute to innovative projects within a collaborative team environment.";

  const experiences = [
    {
      role: "Web & Mobile Developer Intern",
      company: "CoxFuture Technologies Pvt .Ltd",
      duration: "3 Months",
      points: [
        "Developed responsive web pages using HTML, CSS, Bootstrap, and JavaScript.",
        "Assisted in building mobile applications using Flutter.",
        "Worked on frontend UI improvements and bug fixing.",
        "Integrated REST APIs and managed backend connectivity.",
        "Collaborated with senior developers during project development."
      ]
    },
    {
      role: "Junior Web Developer",
      company: "Seven safar tour travel pvt ltd — Delhi, India",
      duration: "2 Months",
      points: [
        "Built and maintained website components using React and PHP.",
        "Worked on database operations using MySQL.",
        "Improved website responsiveness and performance.",
        "Created reusable UI components and handled debugging tasks.",
        "Participated in client project updates and testing."
      ]
    }
  ];

  const skills = [
    "HTML5", "CSS3", "JavaScript",
    "Bootstrap", "React.js", "Next.js",
    "Flutter", "Dart",
    "Python", "Django", "PHP",
    "MySQL", "MongoDB",
    "Git", "GitHub", "VS Code",
    "REST API Integration",
    "Responsive Web Design"
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Corner 3D Decorative Images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10 opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shape Object"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10 opacity-40 md:opacity-100"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Object"
          className="w-full h-auto object-contain drop-shadow-xl"
          draggable={false}
        />
      </FadeIn>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-5xl text-center w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-12 md:mb-14 select-none"
          >
            About Me
          </h2>
        </FadeIn>

        {/* Contact Info Pills */}
        <FadeIn delay={0.1} y={20} className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:9696606527"
            className="px-6 py-2.5 rounded-full border border-[#D7E2EA]/20 bg-[#161616]/80 text-[#D7E2EA] text-sm font-medium hover:border-[#B600A8] hover:text-white transition-all flex items-center gap-2"
          >
            <span>📞</span> 9696606527
          </a>
          <a
            href="mailto:rupeshhot230@gmail.com"
            className="px-6 py-2.5 rounded-full border border-[#D7E2EA]/20 bg-[#161616]/80 text-[#D7E2EA] text-sm font-medium hover:border-[#B600A8] hover:text-white transition-all flex items-center gap-2"
          >
            <span>✉️</span> rupeshhot230@gmail.com
          </a>
        </FadeIn>

        {/* Animated Summary Paragraph */}
        <div className="mb-16 sm:mb-20 flex justify-center text-left md:text-center max-w-3xl">
          <AnimatedText text={summaryText} />
        </div>

        {/* WORK EXPERIENCE SECTION */}
        <div className="w-full text-left mb-16">
          <FadeIn delay={0.2} y={30}>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#D7E2EA] mb-8 pb-3 border-b border-[#D7E2EA]/15 flex items-center gap-3">
              <span className="text-[#B600A8]">💼</span> Work Experience
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <FadeIn key={idx} delay={0.25 + idx * 0.1} y={30} className="h-full">
                <div className="bg-[#121212] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#B600A8]/60 transition-all duration-300 shadow-lg">
                  <div>
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h4 className="text-xl font-semibold text-white tracking-wide">{exp.role}</h4>
                      <span className="px-3 py-1 bg-[#B600A8]/20 text-[#E086F0] rounded-full text-xs font-semibold uppercase tracking-wider">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-[#D7E2EA]/70 text-sm font-medium italic mb-5">{exp.company}</p>
                    <ul className="space-y-2.5 text-sm text-[#D7E2EA]/90 leading-relaxed">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="text-[#B600A8] mt-1 shrink-0">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* EDUCATION & COMMUNICATION GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
          {/* Education */}
          <FadeIn delay={0.3} y={30}>
            <div className="bg-[#121212] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#7621B0]/60 transition-all duration-300">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#D7E2EA] mb-6 flex items-center gap-3">
                  <span className="text-[#7621B0]">🎓</span> Education
                </h3>
                <h4 className="text-lg font-semibold text-white">Diploma in Computer Science</h4>
                <p className="text-[#D7E2EA]/80 font-medium text-sm mt-1">
                  Government Leather Institute Nunihai Agra
                </p>
                <p className="text-xs uppercase tracking-widest text-[#B600A8] font-bold mt-3">
                  2023 - 2026
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Communication */}
          <FadeIn delay={0.35} y={30}>
            <div className="bg-[#121212] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#BE4C00]/60 transition-all duration-300">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#D7E2EA] mb-6 flex items-center gap-3">
                  <span className="text-[#BE4C00]">🗣️</span> Communication
                </h3>
                <ul className="space-y-3 text-base text-[#D7E2EA]">
                  <li className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-2">
                    <span className="font-medium">Hindi</span>
                    <span className="text-xs px-3 py-1 bg-[#D7E2EA]/10 rounded-full uppercase tracking-wider text-[#D7E2EA]/80">Native / Fluent</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-2">
                    <span className="font-medium">English</span>
                    <span className="text-xs px-3 py-1 bg-[#D7E2EA]/10 rounded-full uppercase tracking-wider text-[#D7E2EA]/80">Basic</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* SKILLS SECTION */}
        <div className="w-full text-left mb-16">
          <FadeIn delay={0.4} y={30}>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#D7E2EA] mb-8 pb-3 border-b border-[#D7E2EA]/15 flex items-center gap-3">
              <span className="text-[#B600A8]">⚡</span> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 bg-[#161616] border border-[#D7E2EA]/20 rounded-2xl text-sm font-semibold text-[#D7E2EA] hover:border-[#B600A8] hover:bg-[#B600A8]/10 hover:text-white transition-all duration-200 cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.45} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
