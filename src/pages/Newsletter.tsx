import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-32 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 w-full items-center">
        {/* Left: Image Container */}
        <div className="col-span-12 lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="border border-on-surface p-4 bg-surface relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1539371910803-86c26bd530ec?auto=format&fit=crop&q=80&w=1000" 
                alt="Vinyl Record Spinning" 
                className="w-full aspect-square object-cover grayscale brightness-95"
              />
            </div>
            {/* Artistic Background Shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary -z-0"></div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start space-y-10">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-6 block"
            >
              Newsletter Exclusive
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif leading-tight uppercase"
            >
              Recevez nos nouveautés vinyles
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface/60 max-w-lg leading-relaxed"
          >
            Rejoignez notre cercle d'initiés pour découvrir en avant-première nos dernières trouvailles analogiques, nos éditions limitées et l'histoire des pressages légendaires.
          </motion.p>

          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-8"
            >
              <div className="relative group">
                <label className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest mb-2 block" htmlFor="email">
                  ADRESSE E-MAIL
                </label>
                <input 
                  id="email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com" 
                  required
                  className="w-full bg-transparent border-b-2 border-on-surface/20 py-4 focus:outline-none focus:border-primary text-xl font-body placeholder:text-on-surface/10 transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="bg-primary text-white py-6 px-12 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-on-surface transition-all duration-300 transform active:scale-95"
              >
                S'abonner à la liste
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 border border-primary/20 p-8 w-full max-w-md text-center space-y-4"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-serif">Bienvenue au Club</h3>
              <p className="text-sm text-on-surface/70">Un e-mail de confirmation vient de vous être envoyé. Préparez-vous à redécouvrir le son.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[10px] font-bold tracking-widest uppercase text-primary hover:underline"
              >
                S'inscrire avec un autre e-mail
              </button>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 opacity-40"
          >
            <ShieldCheck size={16} />
            <span className="text-[10px] font-bold tracking-widest uppercase">Confidentialité garantie. Désinscription en un clic.</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
