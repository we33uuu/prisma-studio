import { useRef } from 'react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

const ABOUT_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.';

const HEADING_SEGMENTS = [
  { text: 'I am Marcus Chen,', className: 'font-normal' },
  {
    text: 'a self-taught director.',
    className: 'font-serif italic',
  },
  {
    text: 'I have skills in color grading, visual effects, and narrative design.',
    className: 'font-normal',
  },
];

export default function AboutSection() {
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const chars = ABOUT_TEXT.split('');

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-6">
      <div
        className="bg-[#101010] rounded-[1.5rem] max-w-6xl mx-auto px-8 md:px-14 py-12 md:py-16 text-center"
      >
        {/* Label */}
        <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase block mb-6">
          Visual arts
        </span>

        {/* Main heading */}
        <WordsPullUpMultiStyle
          segments={HEADING_SEGMENTS}
          containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-8 md:mb-10"
        />

        {/* Animated body text */}
        <p
          ref={bodyRef as React.RefObject<HTMLParagraphElement>}
          className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#DEDBC8' }}
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              index={i}
              total={chars.length}
              containerRef={bodyRef as React.RefObject<HTMLElement>}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
