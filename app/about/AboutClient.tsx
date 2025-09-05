'use client';
import { useReducedMotion } from 'framer-motion';
import Hero from '@/components/aboutus/Hero';
import ValuesGrid from '@/components/aboutus/ValuesGrid';
import StoryTimeline from '@/components/aboutus/StoryTimeline';
import TeamGrid from '@/components/aboutus/TeamGrid';
import Cta from '@/components/aboutus/Cta';

export default function AboutClient() {
    // get reduced motion preference once
    const reduced = useReducedMotion() ?? false;
  
    return (
      <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Hero reduced={reduced} />
        <ValuesGrid reduced={reduced} />
        <StoryTimeline reduced={reduced} />
        <TeamGrid reduced={reduced} />
        <Cta reduced={reduced} />
      </main>
    );
  }
