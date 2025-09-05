'use client';

import { useField } from 'formik';
import type {
  TextareaHTMLAttributes,
  InputHTMLAttributes,
} from 'react';

type BaseProps = {
  name: string;
  label: string;
  className?: string;
};

type InputProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> & {
    as?: 'input'; // default
  };

type TextareaProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> & {
    as: 'textarea';
  };

function isTextareaProps(
  props: InputProps | TextareaProps
): props is TextareaProps {
  return (props as TextareaProps).as === 'textarea';
}

export function TextField(props: InputProps | TextareaProps) {
  const { name, label, className } = props;
  const [field, meta] = useField<string>(name);
  const errorText = meta.touched && meta.error ? meta.error : '';
  const hasError = Boolean(errorText);

  const baseClasses =
    'w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600';
  const errorClasses = hasError
    ? 'border-red-500 dark:border-red-500'
    : 'border-gray-300';

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>

      {isTextareaProps(props) ? (
        // Textarea
        <textarea
          id={name}
          {...field}
          {...(props as TextareaProps)}
          className={`${baseClasses} ${errorClasses} ${className ?? ''}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />
      ) : (
        // Input
        <input
          id={name}
          {...field}
          {...(props as InputProps)}
          className={`${baseClasses} ${errorClasses} ${className ?? ''}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />
      )}

      {hasError ? (
        <p
          id={`${name}-error`}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        >
          {errorText}
        </p>
      ) : null}
    </div>
  );
}
