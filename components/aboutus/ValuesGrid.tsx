import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../aboutus/motion';
import { VALUES } from '@/lib/data/about/values';

export default function ValuesGrid({ reduced }: { reduced: boolean }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger(reduced)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {VALUES.map(({ title, body, icon }) => (
          <motion.article
            key={title}
            variants={fadeUp(reduced)}
            className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-2" aria-hidden>
              {icon}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{body}</p>
            <div className="mt-4 h-1 w-0 group-hover:w-16 transition-all bg-blue-600 rounded-full" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
