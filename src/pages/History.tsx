import { motion } from 'motion/react';
import { Music2 } from 'lucide-react';

export default function History() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-12 md:pt-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 md:mb-32">
        <div className="lg:col-span-8">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-bold text-primary mb-6 block uppercase tracking-[0.3em]"
          >
            L'héritage de l'écoute
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-on-surface mb-8 leading-none uppercase"
          >
            NOTRE HISTOIRE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface/70 max-w-2xl leading-relaxed"
          >
            Depuis 1974, nous cultivons l'obsession du son pur. Ce qui a commencé comme un petit atelier de réparation à Paris est devenu le sanctuaire des audiophiles exigeants.
          </motion.p>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-2 border-outline/20 p-3 bg-surface aspect-square overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1544690356-93ad98e7ec99?auto=format&fit=crop&q=80&w=1000" 
              alt="Vintage Studio"
              className="w-full h-full object-cover grayscale sepia-[0.3] brightness-90 contrast-110 hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
        </div>
        
        <div className="lg:col-span-6 lg:offset-1 flex flex-col justify-center order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-on-surface mb-10 leading-tight italic"
          >
            "Le son n'est pas qu'une onde, c'est un toucher."
          </motion.h2>
          <div className="space-y-8 text-base md:text-lg text-on-surface/70 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Notre fondateur, Jean-Luc Vallet, ne cherchait pas seulement à vendre du matériel. Il cherchait à capturer l'émotion brute du studio, cette vibration imperceptible que seule l'aiguille sur le sillon peut restituer.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Chaque platine sélectionnée, chaque vinyle pressé est une promesse faite à l'art : celle de respecter l'intention originale de l'artiste. Dans notre quête de perfection analogique, nous refusons les compromis du numérique pour préserver la chaleur organique du spectre sonore.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-outline/20 flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                <Music2 size={24} />
              </div>
              <div>
                <p className="font-bold text-on-surface uppercase tracking-wider">Jean-Luc Vallet</p>
                <p className="text-[10px] font-bold tracking-widest text-primary uppercase">Fondateur & Mélomane</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif mb-4">L'Art de la Sélection</h3>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { id: '01', title: 'Le Sourcing', text: 'Nous parcourons le monde à la recherche de pressages originaux et d\'éditions limitées qui font battre le cœur des collectionneurs.' },
            { id: '02', title: 'L\'Audition', text: 'Chaque exemplaire passe par une phase d\'écoute rigoureuse. Si le son ne transporte pas, le disque ne quitte pas notre atelier.' },
            { id: '03', title: 'La Transmission', text: 'Nous ne vendons pas seulement des disques, nous accompagnons chaque client dans la construction de son patrimoine musical.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-l border-outline/20 pl-8"
            >
              <span className="text-5xl font-serif text-primary/20 mb-4 block leading-none">{item.id}</span>
              <h4 className="text-xs font-bold mb-4 tracking-[0.2em] uppercase text-on-surface">{item.title}</h4>
              <p className="text-sm md:text-base text-on-surface/70 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
