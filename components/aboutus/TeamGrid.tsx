import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from './motion';
import { TEAM } from '@/lib/data/about/team';

export default function TeamGrid({ reduced }: { reduced: boolean }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp(reduced)}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Meet the team</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Small, focused, and obsessed with user experience.
        </p>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger(reduced)}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {TEAM.map(({ name, role, src }) => (
          <motion.li
            key={name}
            variants={fadeUp(reduced)}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-40">
              <Image
                src={src}
                alt={`${name} – ${role}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
