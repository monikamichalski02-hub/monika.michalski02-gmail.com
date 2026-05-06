import { motion } from 'motion/react';
import { Brush, Diamond as DiamondIcon, Archive, AudioWaveform, Ruler, ArrowRight, Zap, Microscope } from 'lucide-react';

export default function Guide() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-12 md:pt-20">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        <div className="lg:col-span-6 space-y-8">
          <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Guide Technique</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
            L'Art de l'Écoute : Le Guide de l'Audiophile
          </h1>
          <p className="text-lg text-on-surface/70 max-w-xl leading-relaxed">
            Le vinyle n'est pas qu'un support, c'est une cérémonie. Dans ce guide, nous explorons les profondeurs de l'analogique, de la mécanique de précision de votre platine à la physique complexe des microsillons.
          </p>
          <button className="bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-on-surface transition-colors duration-300">
            Explorer le guide
          </button>
        </div>
        <div className="lg:col-span-6 relative h-[400px] md:h-[600px] border border-outline/20 p-4 bg-surface">
          <img 
            src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000" 
            alt="Turntable Details"
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
          />
        </div>
      </section>

      {/* Anatomy */}
      <section className="py-20 md:py-32 bg-on-surface text-background -mx-6 md:-mx-16 px-6 md:px-16 mb-32">
        <div className="max-w-[1440px] mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Anatomie de la Précision</h2>
          <p className="text-sm md:text-base text-background/60 italic">Comprendre les composants qui transforment le mouvement physique en émotion sonore.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center gap-12">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl md:text-2xl font-serif mb-4">Le Socle (Plinth)</h3>
              <p className="text-sm md:text-base text-background/60 leading-relaxed">
                La base de votre platine n'est pas seulement esthétique. Elle sert d'amortisseur de vibrations, isolant le plateau et le bras des interférences extérieures.
              </p>
            </div>
            <div className="border-l-2 border-secondary pl-6">
              <h3 className="text-xl md:text-2xl font-serif mb-4">Le Plateau (Platter)</h3>
              <p className="text-sm md:text-base text-background/60 leading-relaxed">
                L'inertie est votre alliée. Plus le plateau est lourd, plus la vitesse de rotation est stable (effet de volant). Les matériaux comme l'acrylique ou l'aluminium massif sont privilégiés.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 aspect-video border border-background/20 bg-background/5 relative flex items-center justify-center group">
            <div className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-20 group-hover:opacity-40 transition-opacity">
              [ Schéma Technique interactif ]
            </div>
            <div className="absolute bottom-6 right-6 bg-primary text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              Exploded View 01
            </div>
          </div>
        </div>
      </section>

      {/* Vinyl 101 */}
      <section className="mb-32">
        <h2 className="text-4xl font-serif mb-16 border-b border-outline/10 pb-4 inline-block">Vinyl 101</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-7 bg-on-surface text-background p-10 md:p-16 flex flex-col justify-between min-h-[400px]">
             <div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6 block">The Groove</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Physique du Microsillon</h3>
                <p className="text-lg text-background/60 max-w-md">
                  Un seul sillon continu parcourt chaque face du disque. Les parois du sillon portent les canaux gauche et droit, gravés avec une précision microscopique.
                </p>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center">
                  <Microscope size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Observation au 500x</span>
             </div>
          </div>
          <div className="md:col-span-5 bg-surface p-10 md:p-12 border border-outline/10 flex flex-col justify-center">
              <h4 className="text-2xl font-serif mb-4">33, 45 or 78?</h4>
              <p className="text-on-surface/70 leading-relaxed text-sm md:text-base">
                La vitesse de rotation impacte directement la fidélité. Le 45 RPM offre une plus grande surface de sillon par seconde, permettant une dynamique plus élevée.
              </p>
          </div>
          <div className="md:col-span-4 bg-primary/5 p-10 border border-primary/10 space-y-6">
              <Zap className="text-primary" size={32} />
              <h4 className="text-2xl font-serif">180g Vinyl</h4>
              <p className="text-sm md:text-base text-on-surface/70 leading-relaxed">
                Souvent appelé "Audiophile Weight", le disque de 180g est plus résistant au gauchissement et offre une plateforme plus stable pour le diamant.
              </p>
          </div>
          <div className="md:col-span-8 bg-secondary/10 p-10 flex items-center border border-secondary/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div>
                   <h4 className="text-2xl font-serif mb-2 text-secondary">Inner Groove Distortion</h4>
                   <p className="text-sm text-on-surface/60">Pourquoi la fin d'une face sonne-t-elle différemment ? Le guide sur la géométrie d'alignement.</p>
                </div>
                <div className="flex items-center justify-end">
                   <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                      Lire l'article <ArrowRight size={16} />
                   </button>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-xl">
             <h2 className="text-3xl md:text-5xl font-serif mb-6">Préserver l'Éternel</h2>
             <p className="text-base md:text-lg text-on-surface/60 leading-relaxed">L'entretien est le prix de la perfection analogique. Suivez ces rituels pour protéger vos disques.</p>
           </div>
           <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 border-b border-on-surface/10 pb-2">Maintenance Routine</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: Brush, color: 'text-primary', bg: 'bg-primary/10', title: 'Le Nettoyage', text: 'Utilisez toujours une brosse antistatique en fibres de carbone avant chaque écoute pour éliminer les poussières.', list: ['Brosse Carbone', 'Liquide Spécialisé'] },
             { icon: DiamondIcon, color: 'text-secondary', bg: 'bg-secondary/10', title: 'Soin du Diamant', text: 'Un stylus sale use prématurément vos disques. Un nettoyage délicat avec un gel polymère préserve la fidélité.', list: ['500-1000 Heures d\'écoute', 'Alignement annuel'] },
             { icon: Archive, color: 'text-tertiary', bg: 'bg-tertiary/10', title: 'Stockage Vertical', text: 'Ne jamais empiler vos disques à plat. Le stockage vertical prévient le gauchissement et protège les pochettes.', list: ['Pochettes antistatiques', 'Abri de la lumière'] }
           ].map((card, idx) => (
             <div key={idx} className="border border-outline/10 hover:border-on-surface transition-colors p-10 group bg-surface/30">
                <div className={`w-12 h-12 ${card.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <card.icon className={card.color} size={24} />
                </div>
                <h4 className="text-2xl font-serif mb-4 uppercase text-sm font-bold tracking-widest">{card.title}</h4>
                <p className="text-sm text-on-surface/60 mb-8 leading-relaxed">{card.text}</p>
                <ul className="text-[10px] font-bold tracking-widest uppercase space-y-2 opacity-40">
                   {card.list.map((item, i) => (
                     <li key={i} className="flex items-center gap-2">
                       <span className={`w-1 h-1 rounded-full ${card.color.replace('text-', 'bg-')}`}></span> {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* Chain Guide */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <h2 className="text-3xl md:text-5xl font-serif lg:sticky lg:top-32 leading-tight">La Chaîne Haute Fidélité</h2>
          </div>
          <div className="lg:col-span-8 space-y-24">
             <div className="relative pl-12 border-l border-outline/20">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-serif mb-6">01. Le Préampli Phono</h3>
                <p className="text-lg text-on-surface/70 leading-relaxed mb-8">
                  Le signal d'une cellule vinyle est extrêmement faible. Le préampli doit appliquer la courbe d'égalisation RIAA pour restaurer les basses et amplifier le signal.
                </p>
                <div className="bg-surface p-6 border-l-4 border-primary/30 italic text-sm text-on-surface/60">
                   Tip: Un préampli externe de qualité est souvent l'upgrade la plus audible pour un système débutant.
                </div>
             </div>
             <div className="relative pl-12 border-l border-outline/20">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-secondary rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-serif mb-6">02. Amplification & Haut-parleurs</h3>
                <p className="text-lg text-on-surface/70 leading-relaxed">
                  L'amplificateur est le cœur du système. Sa synergie avec vos enceintes définit la dynamique de votre écoute. Recherchez des amplificateurs avec une bonne réserve de courant.
                </p>
             </div>
             <div className="relative pl-12 border-l border-outline/20">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-tertiary rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-serif mb-6">03. Le Placement (The Sweet Spot)</h3>
                <p className="text-lg text-on-surface/70 leading-relaxed mb-10">
                  Formez un triangle équilatéral entre vos enceintes et vous. Éloignez les enceintes des murs pour des basses précises et orientez-les vers vous.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square bg-surface border border-dashed border-outline/20 flex flex-col items-center justify-center gap-4 group">
                      <AudioWaveform size={24} className="text-on-surface/20 group-hover:text-primary transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">Acoustics</span>
                   </div>
                   <div className="aspect-square bg-surface border border-dashed border-outline/20 flex flex-col items-center justify-center gap-4 group">
                      <Ruler size={24} className="text-on-surface/20 group-hover:text-primary transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">Geometry</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
