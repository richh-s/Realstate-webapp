'use client';

import {
  motion,
  type TargetAndTransition,
  type VariantLabels,
} from 'framer-motion';
import { Send } from 'lucide-react';

type SubmitButtonProps = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  // Allow callers to pass a motion target/variant OR a boolean
  // (we'll coerce the boolean to a valid motion target below).
  whileTap?: TargetAndTransition | VariantLabels | boolean;
};

export function SubmitButton({
  text,
  loading,
  disabled,
  whileTap,
}: SubmitButtonProps) {
  // Coerce boolean to a valid motion target
  const whileTapResolved: TargetAndTransition | VariantLabels | undefined =
    typeof whileTap === 'boolean'
      ? whileTap
        ? { scale: 0.97 }
        : undefined
      : whileTap;

  return (
    <motion.button
      type="submit"
      whileTap={whileTapResolved}
      disabled={disabled}
      aria-busy={loading ? 'true' : 'false'}
      className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
    >
      <Send className="w-5 h-5 mr-2" />
      {loading ? 'Sending…' : text}
    </motion.button>
  );
}
