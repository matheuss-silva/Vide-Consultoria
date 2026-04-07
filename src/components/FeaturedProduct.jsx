import React from 'react';
import { Star } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const FeaturedProduct = () => {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24 sm:px-10 lg:px-12" id="produtos">
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <span className="text-sm uppercase tracking-widest font-semibold text-primary mb-4 block">NOSSO PRODUTO</span>
        <h2 className="text-4xl md:text-5xl font-bold text-content-primary leading-tight">
          Agricultura sustentável<br/>
          é a nossa raiz
        </h2>
      </Motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        <Motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4"
        >
          {/* Mosaic Grid Photos */}
          {[
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-square h-full w-full group">
               <img src={src} alt={`Pessoa ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          ))}
        </Motion.div>

        <Motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 bg-surface-secondary texture-bg p-12 md:p-16 rounded-3xl flex flex-col justify-center"
        >
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" className="text-primary" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl text-content-primary font-medium leading-relaxed mb-10 relative">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce id mauris nec libero vehicula dictum. Integer at justo ut arcu cursus."
          </p>
          <div>
            <div className="font-bold text-lg text-content-primary mb-1">João da Silva</div>
            <div className="text-sm text-content-secondary font-medium uppercase tracking-wide">Proprietário da Fazenda</div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
