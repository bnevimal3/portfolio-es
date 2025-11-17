import React from 'react';
import { type Experience } from '../../types';
import { ChevronDown, Briefcase } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const experiences: Experience[] = [
  {
    role: "Desarrollador Full Stack Java",
    company: "Tata Consultancy Services (TCS)",
    period: "Mayo 2021 – Mayo 2025",
    projects: [
      {
        name: "Proyecto para State Bank of India",
        details: "Desarrollé y mantuve aplicaciones bancarias a nivel empresarial, centrándome en servicios de backend utilizando Java y Spring Boot. Integrado con varias API de terceros para transacciones financieras.",
        technologies: ["Java", "Spring Boot", "REST", "SOAP", "Oracle"]
      },
      {
        name: "Proyecto para SunTech (Sídney)",
        details: "Trabajé en una plataforma de comercio electrónico, creando funciones para la gestión de productos y el procesamiento de pedidos. Desarrollé componentes de interfaz de usuario responsivos con Angular.",
        technologies: ["Java", "Spring MVC", "Angular", "PostgreSQL", "Kafka"]
      },
      {
        name: "Proyecto para Commonwealth Bank (Sídney)",
        details: "Contribuí a una aplicación financiera basada en microservicios. Implementé pipelines de CI/CD utilizando Jenkins y desplegué servicios en AWS.",
        technologies: ["Microservices", "AWS", "Docker", "Jenkins", "React"]
      }
    ]
  },
];

const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="bg-white/[0.05] border border-white/10 rounded-lg p-6">
    <div className="flex items-start gap-4">
        <div className="p-2 bg-white/5 rounded-full mt-1">
            <Briefcase stroke="url(#icon-gradient)" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
            <p className="text-white/70">{experience.company}</p>
            <p className="text-sm text-white/50">{experience.period}</p>
        </div>
    </div>
    <div className="mt-6 space-y-4">
        {experience.projects.map((project, index) => (
            <details key={index} className="group bg-black/20 rounded-md">
                <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                    <span className="font-medium text-white/90">{project.name}</span>
                    <ChevronDown className="transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-4 border-t border-white/10">
                    <p className="text-white/60 mb-3">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <span key={tech} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>
            </details>
        ))}
    </div>
  </div>
);

// Fix: Explicitly type variants with Variants from framer-motion to fix type errors.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const ExperienceSection: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Fix: Inlined SectionTitle component to resolve children prop type error. */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
        Experiencia Laboral
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
