'use client';

import { CheckCircle } from 'lucide-react';

export function SuccessState({
  agentName,
  propertyTitle,
}: {
  agentName: string;
  propertyTitle: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Message Sent!
      </h4>
      <p className="text-gray-600 dark:text-gray-400">
        Thank you for your interest. {agentName} will contact you shortly about{' '}
        {propertyTitle}.
      </p>
    </div>
  );
}
