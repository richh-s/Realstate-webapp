'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonTapAnimation, formSuccessVariants } from '@/lib/motion';
import { contactSchema, type ContactValues, getInitialValues } from './schema';
import { TextField } from './TextField';
import { SubmitButton } from './SubmitButton';
import { SuccessState } from './SuccessState';

export default function ContactForm({
  agentName,
  propertyTitle,
}: {
  agentName: string;
  propertyTitle: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Contact Agent
      </h3>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            variants={formSuccessVariants}
            initial="hidden"
            animate="visible"
            className="py-8"
            aria-live="polite"
          >
            <SuccessState agentName={agentName} propertyTitle={propertyTitle} />
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Formik<ContactValues>
              initialValues={getInitialValues(agentName)}
              validationSchema={contactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // Simulate API call
                setTimeout(() => {
                  setSubmitting(false);
                  setSubmitted(true);
                  // Auto-hide and reset after 5s
                  setTimeout(() => {
                    resetForm({ values: getInitialValues(agentName) });
                    setSubmitted(false);
                  }, 5000);
                }, 800);
              }}
            >
              {({ isSubmitting }) => (
                <Form noValidate className="space-y-4">
                  <TextField name="name" label="Your Name*" />
                  <TextField name="email" type="email" label="Email Address*" />
                  <TextField name="phone" label="Phone Number" />
                  <TextField
                    name="message"
                    label="Message*"
                    as="textarea"
                    rows={4}
                  />

                  <SubmitButton
                    whileTap={buttonTapAnimation}
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    text="Send Message"
                  />

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </Form>
              )}
            </Formik>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
