import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const NAV_ITEMS = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="h-screen p-4 md:p-6">
      <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden h-full">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200 whitespace-nowrap"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#E1E0CC')}
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = 'rgba(225, 224, 204, 0.8)')
                }
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 px-4 md:px-6 pb-4 md:pb-5">
          {/* Heading - 8 cols */}
          <div className="col-span-8">
            <div
              className="relative inline-block font-medium leading-[0.85] tracking-[-0.07em]"
              style={{
                fontSize: 'clamp(80px, 20vw, 260px)',
                color: '#E1E0CC',
              }}
            >
              <WordsPullUp text="Prisma" showAsterisk />
            </div>
          </div>

          {/* Right column - 4 cols */}
          <div className="col-span-4 flex flex-col justify-end gap-3 md:gap-4 pb-1">
            <motion.p
              className="text-xs sm:text-sm md:text-base leading-[1.2]"
              style={{ color: 'rgba(222, 219, 200, 0.7)', maxWidth: '260px' }}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and storytellers
              bound not by place, status or labels but by passion and hunger to unlock
              potential through our unique perspectives.
            </motion.p>

            <motion.button
              className="group inline-flex items-center gap-2 bg-primary rounded-full font-medium text-sm sm:text-base text-black self-start pl-5 pr-[6px] py-[6px] transition-all duration-200 hover:gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            >
              Join the lab
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 text-primary" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
