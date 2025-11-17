import React from 'react';
import { type Service } from '../../types';
import { LayoutTemplate, Server, CloudCog } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const services: Service[] = [
  {
    title: "Diseño UI/UX",
    description: "Creación de interfaces de usuario intuitivas y visualmente atractivas con frameworks modernos como React y Angular para garantizar una experiencia de usuario fluida.",
    icon: LayoutTemplate,
  },
  {
    title: "Desarrollo Backend",
    description: "Construcción de sistemas y API de backend robustos, escalables y seguros utilizando Java, Spring Boot y arquitectura de microservicios.",
    icon: Server,
  },
  {
    title: "Despliegue en la Nube",
    description: "Despliegue de aplicaciones en plataformas en la nube como AWS, utilizando Docker y Kubernetes para la contenedorización y orquestación para garantizar una alta disponibilidad y rendimiento.",
    icon: CloudCog,
  },
];

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

const ServicesSection: React.FC = () => {
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
        Servicios
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={service.title} 
            className="bg-white/[0.05] border border-white/10 rounded-lg p-8 text-center flex flex-col items-center transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="mb-4">
              <service.icon
                size={32}
                stroke="url(#icon-gradient)"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-white/60">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesSection;
