import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Share2, Mail, Album, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Vinyles', path: '/vinyles' },
    { name: 'Platines', path: '/platines' },
    { name: 'Notre Histoire', path: '/' },
    { name: 'Guide Audiophile', path: '/guide' },
    { name: 'Le Club', path: '/newsletter' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background/80 backdrop-blur-md border-b border-outline/20 sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-6 md:px-16 py-6 md:py-8 max-w-[1440px] mx-auto">
          <Link to="/" className="text-xl md:text-2xl font-serif text-on-surface tracking-tight uppercase hover:text-primary transition-colors">
            VINYLE & PLATINES
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-on-surface/60 hover:text-primary'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:text-primary transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button className="hover:text-primary transition-colors">
              <User size={20} />
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-on-surface text-background pt-20 pb-8 mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-6">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">VINYLE & PLATINES</h2>
              <p className="text-background/60 max-w-md mb-8 text-sm md:text-base">
                Spécialiste de l'analogique de haute voltige. Une curation exigeante pour les passionnés du son pur et de l'objet d'exception.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Album size={18} />
                </button>
                <button className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <PlayCircle size={18} />
                </button>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 opacity-40">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/vinyles" className="hover:text-primary transition-colors">Collections</Link></li>
                <li><Link to="/platines" className="hover:text-primary transition-colors">Platines</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Notre Histoire</Link></li>
                <li><Link to="/guide" className="hover:text-primary transition-colors">Guide Audiophile</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 opacity-40">Contact</h4>
              <p className="text-sm mb-2 opacity-60">12 Rue du Faubourg, Paris</p>
              <p className="text-sm opacity-60">contact@vinyle-platines.com</p>
              <div className="mt-8">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-40">Le Club</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="VOTE EMAIL" 
                    className="bg-transparent border-b border-background/40 py-2 text-xs focus:outline-none focus:border-primary transition-colors flex-grow"
                  />
                  <button className="text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors">S'abonner</button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 space-y-4 md:space-y-0">
            <div>© 2024 VINYLE & PLATINES. L'ART DE L'ANALOGIQUE.</div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
