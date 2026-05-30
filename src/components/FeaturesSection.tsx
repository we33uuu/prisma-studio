import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

interface FeatureCard {
  num: string;
  title: string;
  icon: string;
  items: string[];
}

const FEATURES: FeatureCard[] = [
  {
    num: '01',
    title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Visual scene mapping',
      'Shot-by-shot planning tools',
      'Collaborative review boards',
      'Export to production formats',
    ],
  },
  {
    num: '02',
    title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-driven visual analysis',
      'Contextual creative notes',
      'Tool integrations',
    ],
  },
  {
    num: '03',
    title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Notification silencing',
      'Ambient soundscapes',
      'Schedule syncing',
    ],
  },
];

function FeatureCardItem({
  card,
  index,
}: {
  card: FeatureCard;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-5 flex flex-col gap-3 h-full min-h-[240px] lg:min-h-[480px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: (index + 1) * 0.15,
        ease: CARD_EASE,
      }}
    >
      <img
        src={card.icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
      />
      <div>
        <p className="text-[10px] text-gray-500 mb-1">{card.num}</p>
        <p className="text-sm sm:text-base font-bold text-primary">{card.title}</p>
      </div>
      <ul className="flex flex-col gap-2 mt-1 flex-1">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-gray-400">
            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-xs text-primary mt-auto group"
      >
        Learn more
        <ArrowRight className="w-3 h-3 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  );
}

function VideoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden h-[240px] lg:h-[480px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0, ease: CARD_EASE }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute bottom-4 left-4 text-[#E1E0CC] text-sm font-bold">
        Your creative canvas.
      </div>
    </motion.div>
  );
}

const HEADER_SEGMENTS_1 = [
  {
    text: 'Studio-grade workflows for visionary creators.',
    className: 'text-primary/90',
  },
];
const HEADER_SEGMENTS_2 = [
  { text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' },
];

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-black bg-noise py-16 md:py-24 px-4 md:px-6 relative">
      {/* Section header */}
      <header className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <WordsPullUpMultiStyle
          segments={HEADER_SEGMENTS_1}
          containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-1"
        />
        <WordsPullUpMultiStyle
          segments={HEADER_SEGMENTS_2}
          containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          delay={0.4}
        />
      </header>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 max-w-[1400px] mx-auto">
        <VideoCard />
        {FEATURES.map((card, i) => (
          <FeatureCardItem key={card.num} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
