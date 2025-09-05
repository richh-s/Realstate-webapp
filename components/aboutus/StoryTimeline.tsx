import { motion } from 'framer-motion';
import { fadeUp } from './motion';
import { STORY_STEPS } from '@/lib/data/about/story';

export default function StoryTimeline({ reduced }: { reduced: boolean }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(reduced)}
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(reduced)}
          className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          HomeHarbor blends great design, reliable data, and performance to help you find a place
          you love. We prioritize accessibility, speed, and clear information so you can focus on
          what matters: your next home.
        </motion.p>

        <ol className="relative mt-8 border-l border-gray-200 dark:border-gray-700 space-y-8">
          {STORY_STEPS.map((step) => (
            <motion.li
              key={step.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp(reduced)}
              className="ml-4"
            >
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-200 dark:ring-blue-900" />
              <time className="text-xs uppercase tracking-wide text-blue-600">{step.when}</time>
              <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
