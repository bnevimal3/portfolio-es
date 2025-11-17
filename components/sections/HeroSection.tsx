import React from 'react';
import { HeroGeometric } from '../ui/shape-landing-hero';

const HeroSection: React.FC = () => {
  return (
    <HeroGeometric
      badge="~4.7 Años de Experiencia"
      title1="Nanda Eswar Vimal Boppudi"
      title2="Desarrollador Full Stack Java"
      subtitle="Construyendo aplicaciones empresariales escalables y listas para la nube en los sectores de banca, comercio electrónico, salud y finanzas."
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-12">
        <img
          src="https://i.postimg.cc/HkpkLF2D/v2.jpg"
          alt="Nanda Eswar Vimal Boppudi"
          className="w-32 h-32 rounded-full border-4 border-white/20 object-cover shadow-lg"
        />
      </div>
      <div className="flex justify-center gap-4">
        <a href="#portfolio" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
          Ver mi Trabajo
        </a>
        <a href="#contact" className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
          Ponte en Contacto
        </a>
      </div>
    </HeroGeometric>
  );
};

export default HeroSection;