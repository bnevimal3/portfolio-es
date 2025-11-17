import React from 'react';
import { motion, type Variants } from 'framer-motion';

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

const AboutSection: React.FC = () => {
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
        Sobre mí
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-white/70 space-y-4">
          <p>
            Soy un apasionado Desarrollador Full Stack de Java con un fuerte enfoque en el desarrollo de backend, complementado con experiencia práctica en tecnologías de frontend. Mi experiencia radica en el diseño e implementación de microservicios, el despliegue de aplicaciones en plataformas en la nube y la práctica de metodologías modernas de DevOps.
          </p>
          <p>
            Me desenvuelvo bien en entornos colaborativos y de ritmo rápido, y me dedico a escribir código limpio, eficiente y mantenible para resolver problemas empresariales complejos.
          </p>
        </div>
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white/90 mb-4">Educación</h3>
            <div className="relative border-l-2 border-white/20 pl-6">
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-rose-500 rounded-full border-4 border-[#030303]"></div>
                <h4 className="font-semibold text-lg text-white">Maestría en Ingeniería de Software</h4>
                <p className="text-white/60">Stevens Institute of Technology, Hoboken, NJ</p>
                <p className="text-sm text-white/40">Mayo 2025</p>
            </div>
            <div className="relative border-l-2 border-white/20 pl-6">
                 <div className="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-500 rounded-full border-4 border-[#030303]"></div>
                <h4 className="font-semibold text-lg text-white">Grado en Ciencias de la Computación</h4>
                <p className="text-white/60">Universidad Amrita, India</p>
                <p className="text-sm text-white/40">Abril 2021</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
